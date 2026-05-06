import CONSTANTS from './constants';

export const constructTagName = (componentName: string): string =>
  `${CONSTANTS.NAMESPACE.PREFIX}${CONSTANTS.NAMESPACE.SEPARATOR}${componentName}`;

export default {
  constructTagName,
};
