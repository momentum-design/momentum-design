import utils from '../../utils/tag-name';

import type { PoseName } from './animatedbackground.types';

const TAG_NAME = utils.constructTagName('animatedbackground');

const DEFAULTS = {
  INITIAL_POSE: 'collapsed' as PoseName,
} as const;

const POSE_NAMES: readonly PoseName[] = ['hidden', 'wake', 'collapsed', 'expanded', 'disabled'];

const DESIGN_WIDTH = 1280;
const DESIGN_HEIGHT = 720;
const MAX_DEVICE_PIXEL_RATIO = 2;

const GRAIN = {
  WEBGL: 0.05,
  DOM_OPACITY: 0.08,
  DOM_CONTRAST: 4,
} as const;

const MIDTONE_1_ALPHA = 0.5;

const MOTION_VARS = {
  durationSustained: '--mds-motion-duration-sustained',
  durationExtended: '--mds-motion-duration-extended',
  easingEntrance: '--mds-motion-easing-entrance',
  easingStandard: '--mds-motion-easing-standard',
} as const;

const MOTION_FALLBACKS = {
  durationSustainedMs: 1200,
  durationExtendedMs: 2400,
  easingEntrance: [0, 0, 0.2, 1] as const,
  easingStandard: [0.44, 0, 0, 1] as const,
} as const;

const TOKEN_VARS = {
  base: '--mds-color-theme-background-gradient-uplift-base',
  ambient: [
    '--mds-color-theme-background-gradient-uplift-ambient-0',
    '--mds-color-theme-background-gradient-uplift-ambient-1',
    '--mds-color-theme-background-gradient-uplift-ambient-2',
    '--mds-color-theme-background-gradient-uplift-ambient-3',
  ],
  midtone: [
    '--mds-color-theme-background-gradient-uplift-midtone-0',
    '--mds-color-theme-background-gradient-uplift-midtone-1',
    '--mds-color-theme-background-gradient-uplift-midtone-2',
  ],
  expressive: [
    '--mds-color-theme-background-gradient-uplift-expressive-0',
    '--mds-color-theme-background-gradient-uplift-expressive-1',
    '--mds-color-theme-background-gradient-uplift-expressive-2',
  ],
} as const;

const POSES: Record<PoseName, { x: number; y: number }> = {
  hidden: { x: -292.2102813720703, y: 743.6270294189453 },
  wake: { x: -292.2102813720703, y: -36.37297058105469 },
  collapsed: { x: -62.64, y: 0 },
  expanded: { x: -359.05918884277344, y: -1.06195068359375 },
  disabled: { x: 603.7960052490234, y: -1.06195068359375 },
};

const ELLIPSE_GEOMETRY = [
  {
    id: 'ambient',
    layer: 'ambient' as const,
    w: 1096.087890625,
    h: 1096.087890625,
    m: [
      -0.9957175254821777, -0.09244802594184875, 0.09244802594184875, -0.9957175254821777, 1228.7550811767578,
      1257.7026062011719,
    ],
    g: [0.5245503783226013, 1.230573058128357, -0.26227518916130066],
    stopPositions: [0.28311946988105774, 0.31611257791519165, 0.6026790142059326, 1],
    stopAlphas: [1, 1, 1, 1],
    blur: 100,
  },
  {
    id: 'midtone',
    layer: 'midtone' as const,
    w: 414.23297119140625,
    h: 412.6757507324219,
    m: [0.8931230902671814, -0.4498123824596405, 0.4498123824596405, 0.8931230902671814, 754.5301666259766, 825.7383117675781],
    g: [1.1278702020645142, -0.3397463858127594, 0.01592479832470417],
    stopPositions: [0, 0.5839894413948059, 1],
    stopAlphas: [1, MIDTONE_1_ALPHA, 1],
    blur: 50,
  },
  {
    id: 'expressive',
    layer: 'expressive' as const,
    w: 573.9616088867188,
    h: 571.8039550781,
    m: [
      -0.9849522113800049, -0.17282700538635254, 0.17282700538635254, -0.9849522113800049, 1628.2357940673828,
      1194.3095397949219,
    ],
    g: [-0.5406105518341064, 1.6105092763900757, -0.16944703459739685],
    stopPositions: [0, 0.32139095664024353, 0.7950533628463745],
    stopAlphas: [1, 1, 1],
    blur: 100,
  },
].map(ellipse => ({ ...ellipse, pad: Math.ceil(ellipse.blur * 3) }));

export {
  DEFAULTS,
  DESIGN_HEIGHT,
  DESIGN_WIDTH,
  ELLIPSE_GEOMETRY,
  GRAIN,
  MAX_DEVICE_PIXEL_RATIO,
  MIDTONE_1_ALPHA,
  MOTION_FALLBACKS,
  MOTION_VARS,
  POSE_NAMES,
  POSES,
  TAG_NAME,
  TOKEN_VARS,
};
