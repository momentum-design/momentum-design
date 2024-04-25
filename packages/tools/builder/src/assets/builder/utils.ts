import Handlebars from 'handlebars';
import { camelCase } from 'lodash';
import CONSTANTS from './constants';
import FileHandler from './file-handler';

// http://en.wikipedia.org/wiki/Private_Use_(Unicode)
let currentCodepoint = CONSTANTS.START_CODEPOINT;
export const getNextCodepoint = () => {
  const res = currentCodepoint;
  // eslint-disable-next-line no-plusplus
  currentCodepoint++;
  return res;
};

// Useful helpers for handlebars
Handlebars.registerHelper('removeDashes', (selector, spacer) => selector.replace(/[_-]/g, spacer));
Handlebars.registerHelper('equals', (params) => params[0] === params[1]);
Handlebars.registerHelper('camelCase', (str) => camelCase(str));
Handlebars.registerHelper('iosCharCode', (str) => `\\u{${str}}`);

export const transformHbs = async (hbsPath: string) => {
  const fileHandler = new FileHandler();

  const file = await fileHandler.readFile({ srcPath: hbsPath }, fileHandler.encoding.read);
  return Handlebars.compile(file.data);
};
