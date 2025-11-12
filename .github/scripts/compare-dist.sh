#!/bin/bash
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

if ! npm view "$PKG" version &> /dev/null; then
  echo "No previous version found on npm - will publish"
  exit 0
fi

VERSION=$(npm view "$PKG" version)
echo "Published version: $VERSION"

TMP=$(mktemp -d)
trap "rm -rf $TMP" EXIT

cd "$TMP"
echo "Downloading $PKG@$VERSION..."

# npm pack downloads the tarball - just find it after download
npm pack "$PKG@$VERSION" > /dev/null 2>&1

# Find the actual .tgz file that was downloaded
TARBALL=$(find . -maxdepth 1 -name "*.tgz" -type f | head -n 1)

if [ -z "$TARBALL" ]; then
  echo "ERROR: No tarball found after npm pack"
  echo "Files in directory:"
  ls -la
  exit 2
fi

echo "Found tarball: $TARBALL"
tar -xzf "$TARBALL"

if [ ! -d "package/dist" ]; then
  echo "WARNING: No dist/ folder in published package - will publish"
  exit 0
fi

NEW_DIST="$PKG_PATH/dist"
if [ ! -d "$NEW_DIST" ]; then
  echo "ERROR: dist/ folder missing in local build"
  exit 2
fi

set +e  # Disable exit on error for diff
diff -qr "package/dist" "$NEW_DIST" > /dev/null 2>&1
DIFF_EXIT=$?
set -e  # Re-enable exit on error

if [ $DIFF_EXIT -eq 0 ]; then
  echo "dist/ unchanged - skipping publish"
  exit 1
else
  echo "dist/ changed - will publish"
  diff -qr "package/dist" "$NEW_DIST" | head -n 5 || true
  exit 0
fi