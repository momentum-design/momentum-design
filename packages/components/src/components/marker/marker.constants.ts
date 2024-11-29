import utils from '../../utils/tag-name';
const TAG_NAME = utils.constructTagName('marker');

const MARKER_VARIANTS = {
    "SOLID": "SOLID",
    "STRIPED": "STRIPED",
} as const;

type MarkerVariant = keyof typeof MARKER_VARIANTS;

const MARKER_CLASSES = {
    "SOLID": "mdc-marker--solid",
    "STRIPED": "mdc-marker--striped",
} as const;

const MARKER_VARIANTS_CLASS_MAPPING = {
    [MARKER_VARIANTS.SOLID]: MARKER_CLASSES.SOLID,
    [MARKER_VARIANTS.STRIPED]: MARKER_CLASSES.STRIPED,
} as const;



export { TAG_NAME, MARKER_VARIANTS, MARKER_VARIANTS_CLASS_MAPPING, MARKER_CLASSES, MarkerVariant };