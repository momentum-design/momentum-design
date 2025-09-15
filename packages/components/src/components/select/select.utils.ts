import { TAG_NAME as OPTION_TAG_NAME } from '../option/option.constants';
import type Option from '../option/option.component';

const OPTION_COMPONENT = `${OPTION_TAG_NAME}:not([disabled])`;

const getAllValidOptions = (slottedListbox: HTMLElement): Array<Option> =>
  Array.from(slottedListbox?.querySelectorAll(OPTION_COMPONENT) || []);

const getFirstValidOption = (slottedListbox: HTMLElement): Option | null =>
  slottedListbox?.querySelector(OPTION_COMPONENT);

const getFirstSelectedOption = (slottedListbox: HTMLElement): Option | null =>
  slottedListbox?.querySelector(`${OPTION_TAG_NAME}[selected]:not([disabled])`);

const getLastValidOption = (slottedListbox: HTMLElement): Option | null => {
  const options = getAllValidOptions(slottedListbox);
  return options.length > 0 ? options[options.length - 1] : null;
};

const isValidItem = (item: Element): boolean => item.matches(`${OPTION_TAG_NAME}:not([disabled])`);

export { getAllValidOptions, getFirstValidOption, getLastValidOption, getFirstSelectedOption, isValidItem };
