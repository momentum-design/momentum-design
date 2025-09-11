import { TAG_NAME as OPTION_TAG_NAME } from '../option/option.constants';
import type Option from '../option/option.component';

const getAllValidOptions = (slottedListboxes: Array<HTMLElement>): Array<Option> =>
  Array.from(slottedListboxes[0]?.querySelectorAll(OPTION_TAG_NAME) || []);

const compareOptionWithValue = (option: Option, value: string): boolean => {
  const optionValue = option.getAttribute('label') || '';
  return optionValue.toLowerCase().startsWith(value?.toLowerCase());
};

const getVisibleOptions = (slottedListboxes: Array<HTMLElement>, internalValue: string): Array<Option> =>
  getAllValidOptions(slottedListboxes).filter(option => compareOptionWithValue(option, internalValue));

const getFirstSelectedOption = (slottedListboxes: Array<HTMLElement>): Option | null =>
  slottedListboxes[0]?.querySelector(`${OPTION_TAG_NAME}[selected]:not([disabled])`);

const castBooleanToString = (condition: boolean): string => (condition ? 'true' : 'false');

export { compareOptionWithValue, getAllValidOptions, getVisibleOptions, getFirstSelectedOption, castBooleanToString };
