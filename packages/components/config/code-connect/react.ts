// Shared helper for React Code Connect templates.
// Lives outside src/ so it is never compiled into the published dist bundle.
import type { TemplateStringResult } from 'figma';

/**
 * Joins a prop list into the attribute run of a JSX tag.
 *
 * No separator, because `figma.helpers.react.renderProp` bakes in its own leading space and returns
 * an empty string when a prop is absent. This is only valid for primitive values — given an
 * instance, renderProp returns ResultSection[], which must be interpolated into `figma.code`
 * rather than joined.
 */
export const joinProps = (rendered: (TemplateStringResult | string)[]): string => rendered.join('');
