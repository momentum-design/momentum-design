// AI-Assisted
/**
 * @fileoverview Tests for mergeByKey utility.
 */

import { mergeByKey } from '../../src/utils/merge-by-key';

describe('mergeByKey', () => {
  describe('positive cases', () => {
    it('should merge items by key with last-in-wins values', () => {
      const items = [
        { id: 'alpha', value: 1 },
        { id: 'beta', value: 2 },
        { id: 'alpha', value: 3 },
      ];

      const merged = mergeByKey(items, {
        getKey: (item) => item.id,
      });

      expect(Array.from(merged.values())).toEqual([
        { id: 'alpha', value: 3 },
        { id: 'beta', value: 2 },
      ]);
    });

    it('should apply custom merge strategy for duplicate keys', () => {
      const items = [
        { id: 'sum', value: 2 },
        { id: 'sum', value: 3 },
      ];

      const merged = mergeByKey(items, {
        getKey: (item) => item.id,
        merge: (existing, incoming) => ({
          id: existing.id,
          value: existing.value + incoming.value,
        }),
      });

      expect(Array.from(merged.values())).toEqual([{ id: 'sum', value: 5 }]);
    });
  });

  describe('edge cases', () => {
    it('should return empty map for empty input', () => {
      const merged = mergeByKey([], {
        getKey: (item: { id: string }) => item.id,
      });

      expect(merged.size).toBe(0);
    });
  });
});
// End AI-Assisted
