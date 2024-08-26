/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable max-len */
import CONSTANTS from './constants';

// make ReturnType a String Literal to make it usable in the HTMLElementTagNameMap per component
// using Template Literal Types: https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html
type ReturnType<ComponentName extends string> =
  `${typeof CONSTANTS.NAMESPACE.PREFIX}${typeof CONSTANTS.NAMESPACE.SEPARATOR}${ComponentName}`;

const constructTagName = <ComponentName extends string>(componentName: ComponentName): ReturnType<ComponentName> =>
  [CONSTANTS.NAMESPACE.PREFIX, componentName].join(CONSTANTS.NAMESPACE.SEPARATOR) as ReturnType<ComponentName>;

export default {
  constructTagName,
};
