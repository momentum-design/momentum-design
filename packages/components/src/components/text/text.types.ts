import { FONT_TYPE, VALID_TEXT_TAGS } from './text.constants';
import type { ValueOf } from '../../utils/types';

export type FontType = ValueOf<typeof FONT_TYPE>;
export type TagName = ValueOf<typeof VALID_TEXT_TAGS>;
