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

  private readonly getIndex: (item: TItem) => number = () => 0;

  private lengthFn: () => number;

  constructor(items: BaseArray<TItem>, getIndex: (item: TItem) => number, length: () => number) {
    this.items = items;
    this.getIndex = getIndex;
    this.lengthFn = length;
  }

  get length(): number {
    return this.lengthFn();
  }

  at(index: number): TItem | undefined {
    return this.items.find(item => this.getIndex(item) === index);
  }

  map<U>(cb: (value: TItem, index: number, array: TItem[]) => U, thisArg?: any): U[] {
    return this.items.map((value, _index, array) => cb.call(thisArg, value, this.getIndex(value), array));
  }

  forEach(cb: (value: TItem, index: number, array: TItem[]) => void, thisArg?: any): void {
    this.items.forEach((value, _index, array) => {
      cb.call(thisArg, value, this.getIndex(value), array);
    });
  }

  findIndex(predicate: (value: TItem, index: number, obj: TItem[]) => boolean, thisArg?: any): number {
    const item = this.items.find((value, _index, obj) => predicate.call(thisArg, value, this.getIndex(value), obj));
    return !item ? -1 : this.getIndex(item);
  }

  find(predicate: (value: TItem, index: number, obj: TItem[]) => boolean, thisArg?: any): TItem | undefined {
    return this.items.find((value, _index, obj) => predicate.call(thisArg, value, this.getIndex(value), obj));
  }
}
