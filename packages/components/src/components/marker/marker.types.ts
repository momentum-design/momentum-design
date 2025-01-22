import { MARKER_VARIANTS } from './marker.constants';

type MarkerVariants = typeof MARKER_VARIANTS[keyof typeof MARKER_VARIANTS];

export { MarkerVariants };
