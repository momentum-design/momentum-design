export interface BaseArray<TItem>
  extends Pick<Array<TItem>, 'length' | 'forEach' | 'findIndex' | 'map' | 'at' | 'find'> {}

/**
 * A wrapper around an array that applies a "virtual" index to the index when accessing items.
 * This is useful when the array is just a view of the real data and the real data has gaps in the indexes.
 *
 * @example
 * ```ts
 * const originalArray = [{realIndex: 2, value: 10}, {realIndex: 3, value: 20}];
 * const offsetArray = new OffsetArray(originalArray, (item) => item.realIndex);
 *
 * console.log(offsetArray.at(0)); // Output: undefined
 * console.log(offsetArray.at(2).value); // Output: 10
 * ```
 */
export class VirtualIndexArray<TItem> implements BaseArray<TItem> {
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
