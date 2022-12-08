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
};

// note: variants have to be provided lowercase here:
const FIGMA_VARIANTS = {
  WEIGHT: 'weight',
  RTL: 'right to left',
  SF_ALTERNATIVE: 'sf alternative',
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
