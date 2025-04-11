import { DEFAULTS } from './progressspinner.constants';

/**
 * Calculates the progress arc length based on the percentage.
 *
 * The arc length is calculated using the formula:
 * Arc Length = (Percentage / 100) * Circumference - Gap Size
 *
 * Example:
 * If the circumference is 100 and the percentage is 25,
 * and there is no gap, then the progress would cover the first quarter of the circle.
 *
 * However, with a gap, the progress arc starts after a gap of gapSize / 2 at the top (12 o'clock),
 * and ends before the quarter by another gapSize / 2 (just before 3 o'clock).
 *
 * Therefore, the total arc length becomes:
 * 25% of 100 = 25
 * Subtract the two half-gaps: 25 - (2 * (gapSize / 2)) = 25 - gapSize
 *
 * For example, if gapSize is 4:
 * Final arc length = 25 - 4 = 21
 *
 * This adjustment ensures the visual gaps are maintained between the progress and the remaining track.
 *
 * @param percentage - The percentage value (0 to 100)
 * @returns The progress arc length
 */
const getProgressArc = (percentage: number): number => {
  if (percentage === 0) {
    return 0;
  }
  const progressArc = (percentage / 100) * DEFAULTS.CIRCUMFERENCE - DEFAULTS.GAP_SIZE;
  /** Ensure the progress arc is not negative due to gap size
  * The 0.1% is a minimum threshold to ensure the arc is visible.
  * This is especially useful for very small percentages.
  * This is particularly important for accessibility and visual clarity.
  */
  return Math.max(progressArc, 0.1 * percentage);
};

/**
 * Calculates the remaining arc length based on the percentage.
 *
 * The remaining arc is calculated using the formula:
 * Remaining Arc = Circumference - Progress Arc - 2 * Gap Size
 *
 * Example:
 * If the total circumference is 100, the progress arc is 50, and each gap is 2 units,
 * then with two gaps (one before and one after the progress arc), the calculation becomes:
 * Remaining Arc = 100 - 50 - (2 * 2) = 46
 *
 * This ensures the gap between the progress and remaining arcs is visually preserved.
 *
 * @param percentage - The percentage value (0 to 100)
 * @returns The remaining arc length
 */

const getRemainingArc = (percentage: number) => {
  const remainingArc = DEFAULTS.CIRCUMFERENCE - getProgressArc(percentage) - 2 * DEFAULTS.GAP_SIZE;
  if (percentage === 0) {
    return DEFAULTS.CIRCUMFERENCE;
  }
  /**
   * Ensures that the remaining arc is never negative due to the gap size.
   * In the final state (when the progress arc is nearly complete), the remaining arc should be 0.
   */
  if (remainingArc < 0) {
    return 0;
  }
  return remainingArc;
};

/**
 * Calculates the offset for the progress arc based on the percentage.
 *
 * The offset is adjusted to maintain a visual gap between the progress and track arcs.
 * The progress arc begins slightly ahead of the 12 o’clock position, by half the gap size to account for spacing.
 *
 * @param percentage - The percentage value (0 to 100)
 * @returns The offset for the progress arc
 */
const getProgressOffset = (percentage: number) => {
  if (percentage === 0) {
    return 0;
  }
  return DEFAULTS.GAP_SIZE * 0.5;
};

/**
 * Calculates the remaining offset for the remaining arc based on the percentage and progress arc.
 *
 * Adjusts the offset to maintain a consistent visual gap between the progress and track arcs.
 * The remaining arc begins where the progress arc ends, we have to consider the gap before progress arc(12'o clock)
 * i.e. half the gap size, plus an additional gap between the two arcs.
 *
 * @param percentage - The percentage value (0 to 100)
 * @param progressArc - The length of the progress arc
 * @returns The remaining offset for the remaining arc
 */
const getRemainingOffset = (percentage: number, progressArc: number) => {
  const remainingOffset = progressArc + DEFAULTS.GAP_SIZE * 1.5;
  if (percentage === 0) {
    return 0;
  }
  return remainingOffset;
};

export { getProgressArc, getRemainingArc, getProgressOffset, getRemainingOffset };
