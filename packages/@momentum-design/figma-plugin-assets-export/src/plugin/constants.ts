const DOCUMENT = {
  VALID_CHILD_TYPES: ['PAGE'],
};

const SEARCH_CRITERIA = ['COMPONENT' as const];

const REPLACE_TERMS = {
  COMPONENT_NAME: 'COMPONENT_NAME' as const,
  PARENT_NAME: 'PARENT_NAME' as const,
  SET_OR_COMPONENT_NAME: 'SET_OR_COMPONENT_NAME' as const,
  SF_ALTERNATIVE: 'SF_ALTERNATIVE' as const,
  RTL: 'RTL' as const,
  WEIGHT: 'WEIGHT' as const,
  COLOR: 'COLOR' as const,
  STATE: 'STATE' as const,
  SIZE: 'SIZE' as const,
  THEME: 'THEME' as const,
  TYPE: 'TYPE' as const,
  ORIENTATION: 'ORIENTATION' as const,
  PRODUCT: 'PRODUCT' as const,
};

// note: variants have to be provided lowercase here:
const FIGMA_VARIANTS = {
  WEIGHT: 'weight',
  COLOR: 'color',
  RTL: 'right to left',
  SF_ALTERNATIVE: 'sf alternative',
  STATE: 'state',
  SIZE: 'size',
  THEME: 'theme',
  TYPE: 'type',
  ORIENTATION: 'orientation',
  PRODUCT: 'product',
};

const CONSTANTS = {
  DOCUMENT,
  SEARCH_CRITERIA,
  REPLACE_TERMS,
  FIGMA_VARIANTS,
};

export {
  CONSTANTS,
};
