import CONSTANTS from './constants';

// http://en.wikipedia.org/wiki/Private_Use_(Unicode)
let currentCodepoint = CONSTANTS.START_CODEPOINT;
export const getNextCodepoint = () => {
  const res = currentCodepoint;
  // eslint-disable-next-line no-plusplus
  currentCodepoint++;
  return res;
};
