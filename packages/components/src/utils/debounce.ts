/**
 * Returns a debounced version of the provided callback function.
 * The returned function will delay calling the provided callback function
 * by the specified timeout (in milliseconds).
 * If the returned function is called again before the timeout has expired,
 * the timeout will be reset.
 *
 * @param callback - The function to debounce.
 * @param timeout - The timeout in milliseconds (default 500ms).
 * @returns - The debounced function.
 */
export const debounce = (callback: Function, timeout = 500): Function => {
  let timer: number;
  return (...args: any[]) => {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      callback.apply(this, args);
    }, timeout);
  };
};
