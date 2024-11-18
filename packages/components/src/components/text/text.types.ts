import { TYPE, VALID_TEXT_TAGS } from './text.constants';
import type { ValueOf } from '../../utils/types';

export type TextType = ValueOf<typeof TYPE>;
export type TagName = ValueOf<typeof VALID_TEXT_TAGS>;
