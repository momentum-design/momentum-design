interface RangeOptions {
  includeEnd?: boolean;
}

const DEFAULT_OPTIONS: Required<RangeOptions> = {
  includeEnd: false,
};

/**
 * Represents a numeric interval between two numbers.
 *
 * Start is inclusive, end is exclusive by default.
 */
export class Interval implements Iterable<number> {
  /** The start of the Interval (inclusive). */
  public readonly start: number;

  /** The end of the Interval (exclusive) by default. */
  public readonly end: number;

  /** Whether the end is inclusive. Default is false (exclusive). */
  public readonly includeEnd: boolean;

  constructor(start: number, end: number, options: RangeOptions = {}) {
    const opt = { ...DEFAULT_OPTIONS, ...options };
    this.start = start;
    this.end = end;
    this.includeEnd = opt.includeEnd;
  }

  /**
   * Checks if a number is within the Interval.
   * @param value - The number to check.
   */
  includes(value: number) {
    const { start, end, includeEnd } = this;
    const min = Math.min(start, end);
    const max = Math.max(start, end);

    return includeEnd ? value >= min && value <= max : value >= min && value < max;
  }

  /**
   * Returns an iterator for the Interval.
   *
   * If the start is greater than the end, it decrements by step.
   * The iteration stops when the current number reaches or exceeds the end (or equals if includeEnd is true).
   *
   * @param step - The step between each number in the Interval. Default is the step defined in the constructor.
   *        It must be a positive non-zero number.
   * @returns An iterator that yields numbers from start to end, incremented by step.
   */

  iter(step = 1): Iterator<number> {
    if (step <= 0) {
      throw new Error('Step must be a positive non-zero number');
    }
    const stepper = step * (this.start <= this.end ? 1 : -1);
    const { includeEnd, end } = this;
    let current = this.start;

    let done = false;

    return {
      next: () => {
        if (done) return { value: undefined, done: true };

        const value = current;
        current += stepper;

        if (includeEnd ? value > end : value >= end) {
          done = true;
          return { value: undefined, done: true };
        }

        return { value, done: false };
      },
    };
  }

  /**
   * Returns the default iterator for the Interval.
   *
   * it steps by 1.
   */
  [Symbol.iterator]() {
    return this.iter();
  }
}
