#!/bin/bash
# Compare dist/ between current commit and previous commit
# Exit 0 = dist changed (publish), 1 = same (skip), 2 = error

set -euo pipefail

PKG=$1
PKG_PATH=$2

if [ -z "$PKG" ] || [ -z "$PKG_PATH" ]; then
  echo "ERROR: Usage: $0 <package-name> <package-path>"
  exit 2
fi

# Convert to absolute path if relative
[[ ! "$PKG_PATH" = /* ]] && PKG_PATH="$(pwd)/$PKG_PATH"

echo "Checking dist changes for: $PKG"
echo "Path: $PKG_PATH"

# Get current and previous commits
CURRENT_COMMIT=$(git rev-parse HEAD)
PREVIOUS_COMMIT=$(git rev-parse HEAD~1)

echo "Current commit: $CURRENT_COMMIT"
echo "Previous commit: $PREVIOUS_COMMIT"

# Create temporary directory and setup cleanup
TMP=$(mktemp -d)
REPO_ROOT=$(git rev-parse --show-toplevel)
PREVIOUS_WORKTREE="$TMP/previous"

# Cleanup function to remove worktree and temp directory
cleanup() {
  cd "$REPO_ROOT" 2>/dev/null || true
  git worktree remove "$PREVIOUS_WORKTREE" --force 2>/dev/null || true
  rm -rf "$TMP" 2>/dev/null || true
}
trap cleanup EXIT

# Get the package directory relative to repo root
PKG_REL_PATH="${PKG_PATH#$REPO_ROOT/}"

echo "Setting up worktree for previous commit..."

# Create worktree for previous commit
git worktree add --detach "$PREVIOUS_WORKTREE" "$PREVIOUS_COMMIT" > /dev/null 2>&1

# Check current commit dist (already built by CI)
CURRENT_DIST="$PKG_PATH/dist"
if [ ! -d "$CURRENT_DIST" ]; then
  echo "ERROR: dist/ folder missing in current build - make sure to run build before this script"
  exit 2
fi

# Build previous commit
PREVIOUS_PKG_PATH="$PREVIOUS_WORKTREE/$PKG_REL_PATH"

if [ ! -d "$PREVIOUS_PKG_PATH" ]; then
  echo "WARNING: Package doesn't exist in previous commit - will publish (new package)"
  exit 0
fi

echo "Building previous commit..."
cd "$PREVIOUS_WORKTREE"
if ! yarn install --frozen-lockfile > /dev/null 2>&1; then
  echo "WARNING: Failed to install dependencies for previous commit - will publish"
  exit 0
fi

if ! yarn workspaces foreach -R --topological-dev --from "$PKG" run build > /dev/null 2>&1; then
  echo "WARNING: Failed to build previous commit - will publish"
  exit 0
fi

PREVIOUS_DIST="$PREVIOUS_PKG_PATH/dist"
if [ ! -d "$PREVIOUS_DIST" ]; then
  echo "WARNING: No dist/ in previous commit build - will publish"
  exit 0
fi

# Compare the dist directories (exclude tsbuildinfo - build cache files)
echo "Comparing current dist with previous commit dist..."
set +e
DIFF_OUTPUT=$(diff -qr --exclude="*.tsbuildinfo" "$PREVIOUS_DIST" "$CURRENT_DIST" 2>&1)
DIFF_EXIT=$?
set -e

if [ $DIFF_EXIT -eq 0 ]; then
  echo "dist/ unchanged from previous commit - skipping publish"
  exit 1
else
  echo "dist/ changed from previous commit - will publish"
  echo "Changes detected:"
  echo "$DIFF_OUTPUT" | head -n 10 || true
  exit 0
fi
