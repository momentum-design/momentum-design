import { TYPE, VALID_TEXT_TAGS } from './text.constants';
import type { ValueOf } from '../../utils/types';

type TextType = ValueOf<typeof TYPE>;
type TagName = ValueOf<typeof VALID_TEXT_TAGS>;

export type { TextType, TagName };
