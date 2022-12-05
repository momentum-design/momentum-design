// http://en.wikipedia.org/wiki/Private_Use_(Unicode)
const startCodepoint = 0xf101;
let currentCodepoint = startCodepoint;
export const getNextCodepoint = () => {
  const res = currentCodepoint;
  // eslint-disable-next-line no-plusplus
  currentCodepoint++;
  return res;
};
