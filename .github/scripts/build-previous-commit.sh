#!/bin/bash
# Build previous commit in a persistent worktree for comparison
# Exit 0 = success, 1 = error

set -euo pipefail

PREVIOUS_COMMIT=$(git rev-parse HEAD~1)
REPO_ROOT=$(git rev-parse --show-toplevel)
PREVIOUS_WORKTREE="$REPO_ROOT/.git-worktree-$PREVIOUS_COMMIT"

echo "Previous commit: $PREVIOUS_COMMIT"

# Check if worktree already exists for this commit
if [ -d "$PREVIOUS_WORKTREE" ]; then
  echo "Reusing existing worktree for previous commit"
else
  echo "Setting up worktree for previous commit..."
  git worktree add --detach "$PREVIOUS_WORKTREE" "$PREVIOUS_COMMIT"
fi

# Check if already built
if [ -d "$PREVIOUS_WORKTREE/packages/components/dist" ]; then
  echo "Previous commit already built - skipping rebuild"
else
  echo "Building previous commit..."
  cd "$PREVIOUS_WORKTREE"
  
  echo "Installing dependencies for previous commit..."
  if ! yarn install --frozen-lockfile; then
    echo "ERROR: Failed to install dependencies for previous commit"
    exit 1
  fi
  
  echo "Building all packages in previous commit..."
  if ! yarn build; then
    echo "ERROR: Failed to build previous commit"
    exit 1
  fi
  
  echo "Previous commit built successfully"
fi

echo "Worktree location: $PREVIOUS_WORKTREE"
