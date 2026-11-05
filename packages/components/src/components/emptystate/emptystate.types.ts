import type { ValueOf } from '../../utils/types';
import type { TagName } from '../text/text.types';
import { SIZE, LAYOUT } from './emptystate.constants';

interface Events {}

type EmptyStateLayout = ValueOf<typeof LAYOUT>;
type EmptyStateSize = ValueOf<typeof SIZE>;
type EmptyStateHeadingTagName = TagName;

export type { Events, EmptyStateLayout, EmptyStateSize, EmptyStateHeadingTagName };
