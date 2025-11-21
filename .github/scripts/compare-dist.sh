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

# Use persistent worktree location (created by build-previous-commit.sh)
REPO_ROOT=$(git rev-parse --show-toplevel)
PREVIOUS_WORKTREE="$REPO_ROOT/.git-worktree-$PREVIOUS_COMMIT"

# Get the package directory relative to repo root
PKG_REL_PATH="${PKG_PATH#$REPO_ROOT/}"

# Check if worktree exists
if [ ! -d "$PREVIOUS_WORKTREE" ]; then
  echo "ERROR: Previous commit worktree not found at $PREVIOUS_WORKTREE"
  echo "Make sure build-previous-commit.sh was run first"
  exit 2
fi

# Check current commit dist (already built by CI)
CURRENT_DIST="$PKG_PATH/dist"
if [ ! -d "$CURRENT_DIST" ]; then
  echo "ERROR: dist/ folder missing in current build - make sure to run build before this script"
  exit 2
fi

# Check previous commit dist (should be built by workflow)
PREVIOUS_PKG_PATH="$PREVIOUS_WORKTREE/$PKG_REL_PATH"

if [ ! -d "$PREVIOUS_PKG_PATH" ]; then
  echo "WARNING: Package doesn't exist in previous commit - will publish (new package)"
  exit 0
fi

PREVIOUS_DIST="$PREVIOUS_PKG_PATH/dist"
if [ ! -d "$PREVIOUS_DIST" ]; then
  echo "WARNING: No dist/ in previous commit build - will publish"
  exit 0
fi

# Compare the dist directories (exclude tsbuildinfo - build cache files, custom-elements.json - non-deterministic)
echo "Comparing current dist with previous commit dist..."
set +e
DIFF_OUTPUT=$(diff -qr --exclude="*.tsbuildinfo" --exclude="custom-elements.json" "$PREVIOUS_DIST" "$CURRENT_DIST" 2>&1)
DIFF_EXIT=$?
set -e

if [ $DIFF_EXIT -eq 0 ]; then
  echo "dist/ unchanged from previous commit - skipping publish"
  exit 1
else
  echo "dist/ changed from previous commit - will publish"
  echo ""
  echo "Changed files in dist/:"
  echo "$DIFF_OUTPUT" | while IFS= read -r line; do
    # Extract just the filename relative to dist/
    if [[ "$line" =~ "Only in" ]]; then
      echo "  $line"
    elif [[ "$line" =~ "differ" ]]; then
      # Extract the file path and make it relative to dist/
      file=$(echo "$line" | sed "s|Files .*/dist/||" | sed "s| and .*/dist/.*||" | sed "s| differ||")
      echo "  Modified: $file"
    fi
  done
  
  echo ""
  echo "=== Line-by-line changes (first 3 files) ==="
  
  # Show detailed diffs for first 3 changed files
  COUNT=0
  while IFS= read -r line; do
    if [[ $line =~ ^Files\ (.+)\ and\ (.+)\ differ$ ]]; then
      FILE1="${BASH_REMATCH[1]}"
      FILE2="${BASH_REMATCH[2]}"
      COUNT=$((COUNT + 1))
      
      if [ $COUNT -le 3 ]; then
        echo ""
        echo "--- File $COUNT: $(basename "$FILE2") ---"
        diff -u "$FILE1" "$FILE2" 2>/dev/null | head -n 100 || echo "(binary file or diff failed)"
      fi
    fi
  done <<< "$DIFF_OUTPUT"
  
  exit 0
fi
