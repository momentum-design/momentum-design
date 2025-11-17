#!/bin/bash
# Compare dist/ with main branch (checkout main, build, compare)
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

# Check if we're on main branch - if so, always publish (nothing to compare)
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [ "$CURRENT_BRANCH" = "main" ] || [ "$CURRENT_BRANCH" = "master" ]; then
  echo "On main/master branch - will publish"
  exit 0
fi

# Check if main branch exists, otherwise try master
if git show-ref --verify --quiet refs/heads/master; then
  MAIN_BRANCH="master"
elif git show-ref --verify --quiet refs/heads/main; then
  MAIN_BRANCH="main"
else
  echo "ERROR: Neither master nor main branch found"
  exit 2
fi

echo "Comparing with $MAIN_BRANCH branch..."

# Create temporary directory and setup cleanup
TMP=$(mktemp -d)
REPO_ROOT=$(git rev-parse --show-toplevel)
MAIN_WORKTREE="$TMP/main"

# Cleanup function to remove worktree and temp directory
cleanup() {
  cd "$REPO_ROOT" 2>/dev/null || true
  git worktree remove "$MAIN_WORKTREE" --force 2>/dev/null || true
  rm -rf "$TMP" 2>/dev/null || true
}
trap cleanup EXIT

# Get the package directory relative to repo root
PKG_REL_PATH="${PKG_PATH#$REPO_ROOT/}"

echo "Checking out $MAIN_BRANCH:$PKG_REL_PATH to temp directory..."

# Use git worktree to checkout main in a separate directory
git worktree add --detach "$MAIN_WORKTREE" "$MAIN_BRANCH" > /dev/null 2>&1

# Build the main version
MAIN_PKG_PATH="$MAIN_WORKTREE/$PKG_REL_PATH"

if [ ! -d "$MAIN_PKG_PATH" ]; then
  echo "WARNING: Package doesn't exist in $MAIN_BRANCH - will publish (new package)"
  exit 0
fi

# Install dependencies in main worktree
echo "Installing dependencies in main worktree..."
cd "$MAIN_WORKTREE"
if ! yarn install --frozen-lockfile > /dev/null 2>&1; then
  echo "WARNING: Failed to install dependencies in $MAIN_BRANCH - will publish"
  exit 0
fi

echo "Building $PKG and its dependencies..."
# Use -R (recursive) and --topological-dev to build only this package and what it needs
if ! yarn workspaces foreach -R --topological-dev --from "$PKG" run build > /dev/null 2>&1; then
  echo "WARNING: Failed to build $MAIN_BRANCH version - will publish"
  exit 0
fi

MAIN_DIST="$MAIN_PKG_PATH/dist"
if [ ! -d "$MAIN_DIST" ]; then
  echo "WARNING: No dist/ in $MAIN_BRANCH build - will publish"
  exit 0
fi

# Check current branch dist
CURRENT_DIST="$PKG_PATH/dist"
if [ ! -d "$CURRENT_DIST" ]; then
  echo "ERROR: dist/ folder missing in current build"
  exit 2
fi

# Compare the dist directories (exclude tsbuildinfo - build cache files)
set +e
DIFF_OUTPUT=$(diff -qr --exclude="*.tsbuildinfo" "$MAIN_DIST" "$CURRENT_DIST" 2>&1)
DIFF_EXIT=$?
set -e

if [ $DIFF_EXIT -eq 0 ]; then
  echo "dist/ unchanged from $MAIN_BRANCH - skipping publish"
  exit 1
else
  echo "dist/ changed from $MAIN_BRANCH - will publish"
  echo "$DIFF_OUTPUT" | head -n 5 || true
  exit 0
fi
