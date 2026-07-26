// AI-Assisted
import { assetsRegistry } from '../data';
import type { AssetKind, AssetRegistryEntry } from '../common';

import { normalizeName } from './naming';

interface AssetFilters {
  kind?: AssetKind;
  category?: string;
}

function assetMatchesFilters(asset: AssetRegistryEntry, filters: AssetFilters): boolean {
  const normalizedCategory = filters.category?.trim().toLowerCase();

  if (filters.kind && asset.kind !== filters.kind) {
    return false;
  }

  if (normalizedCategory && asset.category.toLowerCase() !== normalizedCategory) {
    return false;
  }

  return true;
}

function listAssets(filters?: AssetFilters, limit?: number): AssetRegistryEntry[] {
  const filteredAssets = assetsRegistry.filter(asset => assetMatchesFilters(asset, filters ?? {}));

  return typeof limit === 'number' ? filteredAssets.slice(0, limit) : filteredAssets;
}

function getAsset(assetName: string, kind?: AssetKind): AssetRegistryEntry | undefined {
  const normalizedName = normalizeName(assetName);
  const lowerCaseName = assetName.trim().toLowerCase();

  return assetsRegistry.find(asset => {
    if (kind && asset.kind !== kind) {
      return false;
    }

    return asset.name.toLowerCase() === lowerCaseName || normalizeName(asset.name) === normalizedName;
  });
}

function requireAsset(assetName: string, kind?: AssetKind): AssetRegistryEntry {
  const asset = getAsset(assetName, kind);

  if (!asset) {
    throw new Error([
      `Unknown Momentum asset "${assetName}".`,
      'Use list_assets or search_assets to find valid asset names.',
    ].join(' '));
  }

  return asset;
}

function searchAssets(query: string, filters: AssetFilters = {}, limit = 20): AssetRegistryEntry[] {
  const normalizedQuery = query.trim().toLowerCase();
  const tokens = normalizedQuery.split(/[^a-z0-9]+/).filter(Boolean);

  if (tokens.length === 0) {
    return listAssets(filters, limit);
  }

  return assetsRegistry
    .filter(asset => assetMatchesFilters(asset, filters))
    .map(asset => {
      const searchableText = [
        asset.name,
        normalizeName(asset.name),
        asset.kind,
        asset.category,
        asset.format,
        asset.packageName,
        asset.keywords.join(' '),
        asset.sourcePath,
      ].join(' ').toLowerCase();

      let score = 0;

      tokens.forEach(token => {
        if (asset.name.toLowerCase() === token || normalizeName(asset.name) === token) {
          score += 50;
        }
        if (asset.kind === token || asset.category.toLowerCase() === token) {
          score += 24;
        }
        if (asset.name.toLowerCase().includes(token) || normalizeName(asset.name).includes(token)) {
          score += 16;
        }
        if (asset.keywords.includes(token)) {
          score += 8;
        }
        if (searchableText.includes(token)) {
          score += 4;
        }
      });

      return { asset, score };
    })
    .filter(result => result.score > 0)
    .sort((a, b) => b.score - a.score || a.asset.name.localeCompare(b.asset.name))
    .slice(0, limit)
    .map(result => result.asset);
}

export { getAsset, listAssets, requireAsset, searchAssets };
// End AI-Assisted
