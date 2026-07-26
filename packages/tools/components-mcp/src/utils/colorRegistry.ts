// AI-Assisted
import { colorTokensRegistry } from '../data';
import type { ColorTokenCategory, ColorTokenRegistryEntry } from '../common';

interface ColorTokenFilters {
  category?: ColorTokenCategory;
  theme?: string;
}

function normalizeColorLookup(value: string): string {
  return value
    .trim()
    .replace(/^var\(/, '')
    .replace(/\)$/, '')
    .replace(/;$/, '')
    .replace(/^--mds-/, '')
    .toLowerCase();
}

function colorTokenMatchesFilters(token: ColorTokenRegistryEntry, filters: ColorTokenFilters): boolean {
  const normalizedTheme = filters.theme?.trim().toLowerCase();

  if (filters.category && token.category !== filters.category) {
    return false;
  }

  if (normalizedTheme && token.theme?.toLowerCase() !== normalizedTheme) {
    return false;
  }

  return true;
}

function listColorTokens(filters?: ColorTokenFilters, limit?: number): ColorTokenRegistryEntry[] {
  const filteredTokens = colorTokensRegistry.filter(token => colorTokenMatchesFilters(token, filters ?? {}));

  return typeof limit === 'number' ? filteredTokens.slice(0, limit) : filteredTokens;
}

function findColorTokens(tokenName: string, filters: ColorTokenFilters = {}): ColorTokenRegistryEntry[] {
  const normalizedInput = normalizeColorLookup(tokenName);

  return colorTokensRegistry.filter(token => {
    if (!colorTokenMatchesFilters(token, filters)) {
      return false;
    }

    return [
      token.name,
      token.cssVariable,
      token.cssVariable.replace(/^--mds-/, ''),
    ].map(normalizeColorLookup).includes(normalizedInput);
  });
}

function searchColorTokens(query: string, filters: ColorTokenFilters = {}, limit = 20): ColorTokenRegistryEntry[] {
  const normalizedQuery = query.trim().toLowerCase();
  const tokens = normalizedQuery.split(/[^a-z0-9]+/).filter(Boolean);

  if (tokens.length === 0) {
    return listColorTokens(filters, limit);
  }

  return colorTokensRegistry
    .filter(token => colorTokenMatchesFilters(token, filters))
    .map(colorToken => {
      const searchableText = [
        colorToken.name,
        colorToken.cssVariable,
        colorToken.value,
        colorToken.resolvedValue,
        colorToken.description,
        colorToken.category,
        colorToken.theme,
        colorToken.keywords.join(' '),
      ].join(' ').toLowerCase();

      let score = 0;

      tokens.forEach(token => {
        if (
          colorToken.name.toLowerCase() === token
          || normalizeColorLookup(colorToken.cssVariable) === token
        ) {
          score += 50;
        }
        if (colorToken.name.toLowerCase().includes(token) || colorToken.cssVariable.toLowerCase().includes(token)) {
          score += 18;
        }
        if (colorToken.theme?.toLowerCase() === token || colorToken.category === token) {
          score += 12;
        }
        if (colorToken.keywords.includes(token)) {
          score += 8;
        }
        if (searchableText.includes(token)) {
          score += 4;
        }
      });

      return { colorToken, score };
    })
    .filter(result => result.score > 0)
    .sort((a, b) => b.score - a.score || a.colorToken.name.localeCompare(b.colorToken.name))
    .slice(0, limit)
    .map(result => result.colorToken);
}

export { findColorTokens, listColorTokens, searchColorTokens };
// End AI-Assisted
