export type Debounced<T extends (...args: any[]) => any> = ((...args: Parameters<T>) => void) & { cancel: () => void };

/**
 * Returns a debounced version of the provided callback function.
 * The returned function will delay calling the provided callback function
 * by the specified timeout (in milliseconds).
 * If the returned function is called again before the timeout has expired,
 * the timeout will be reset.
 *
 * @param callback - The function to debounce.
 * @param timeout - The timeout in milliseconds (default 500ms).
 * @returns - The debounced function & cancel function.
 */
export function debounce<T extends (...args: any[]) => any>(callback: T, timeout = 500): Debounced<T> {
  let timer: number | undefined;

  const debounced = ((...args: Parameters<T>) => {
    if (timer !== undefined) {
      window.clearTimeout(timer);
    }
    timer = window.setTimeout(() => {
      timer = undefined;
      callback(...args);
    }, timeout);
  }) as Debounced<T>;

  debounced.cancel = () => {
    if (timer !== undefined) {
      window.clearTimeout(timer);
      timer = undefined;
    }
  };

  return debounced;
}
