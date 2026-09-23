export function clamp(num: number, min: number | undefined, max: number | undefined) {
  let result = num;
  if (min !== undefined) {
    result = Math.max(result, min);
  }
  if (max !== undefined) {
    result = Math.min(result, max);
  }
  return result;
}
