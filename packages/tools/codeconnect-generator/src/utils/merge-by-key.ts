// AI-Assisted
/**
 * Copyright (c) 2022 Momentum Design
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
/**
 * Merge-By-Key Utility
 *
 * Provides a stable way to merge arrays into a Map keyed by a selector.
 *
 * @module utils/merge-by-key
 */

export interface MergeByKeyOptions<TItem, TKey> {
  /** Returns the key used to merge items. */
  readonly getKey: (item: TItem) => TKey;
  /** Merge strategy when the key already exists (defaults to last-in-wins). */
  readonly merge?: (existing: TItem, incoming: TItem) => TItem;
}

/**
 * Merges a list of items into a Map keyed by the provided selector.
 * Uses insertion order for deterministic iteration.
 *
 * @param items - Items to merge into the map.
 * @param options - Key selector and merge strategy.
 * @returns Map of merged items keyed by the selector.
 */
export function mergeByKey<TItem, TKey>(
  items: readonly TItem[],
  options: MergeByKeyOptions<TItem, TKey>,
): Map<TKey, TItem> {
  const map = new Map<TKey, TItem>();
  const merge = options.merge ?? ((_existing, incoming) => incoming);

  for (const item of items) {
    const key = options.getKey(item);
    if (map.has(key)) {
      const existing = map.get(key) as TItem;
      map.set(key, merge(existing, item));
    } else {
      map.set(key, item);
    }
  }

  return map;
}
// End AI-Assisted
