export interface BaseArray<TItem>
  extends Pick<Array<TItem>, 'length' | 'forEach' | 'findIndex' | 'map' | 'at' | 'find'> {}

/**
 * A wrapper around an array that applies an offset to the index when accessing items.
 * This is useful when you want to create a view of an array that starts at a specific index
 *
 * for example in virtualized lists.
 *
 * @example
 * ```ts
 * const originalArray = [10, 20, 30, 40, 50];
 * const offset = 2;
 * const offsetArray = new OffsetArray(originalArray, () => offset);
 *
 * console.log(offsetArray.at(0)); // Output: undefined
 * console.log(offsetArray.at(2)); // Output: 10 (originalArray[0])
 * ```
 */
export class OffsetArray<TItem> implements BaseArray<TItem> {
  public readonly items: BaseArray<TItem>;

  private readonly offset: () => number = () => 0;

  private lengthFn: () => number;

  constructor(items: BaseArray<TItem>, offset: () => number, length: () => number) {
    this.items = items;
    this.offset = offset;
    this.lengthFn = length;
  }

  get length(): number {
    return this.lengthFn();
  }

  at(index: number): TItem | undefined {
    const offsetIndex = index - this.offset();
    return this.items.at(offsetIndex);
  }

  map<U>(cb: (value: TItem, index: number, array: TItem[]) => U, thisArg?: any): U[] {
    return this.items.map((value, index, array) => cb.call(thisArg, value, index + this.offset(), array));
  }

  forEach(cb: (value: TItem, index: number, array: TItem[]) => void, thisArg?: any): void {
    this.items.forEach((value, index, array) => {
      cb.call(thisArg, value, index + this.offset(), array);
    });
  }

  findIndex(predicate: (value: TItem, index: number, obj: TItem[]) => boolean, thisArg?: any): number {
    const index = this.items.findIndex((value, index, obj) =>
      predicate.call(thisArg, value, index + this.offset(), obj),
    );
    return index === -1 ? -1 : index + this.offset();
  }

  find(predicate: (value: TItem, index: number, obj: TItem[]) => boolean, thisArg?: any): TItem | undefined {
    return this.items.find((value, index, obj) => predicate.call(thisArg, value, index + this.offset(), obj));
  }
}
