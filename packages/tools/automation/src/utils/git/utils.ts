import { ChangeDetails } from './types';

const calculateChanges = (details: ChangeDetails) => details.changes.reduce((acc, cur) => {
  const add = acc.added + cur.added;
  const rem = acc.removed + cur.removed;
  const chg = add + rem;
  return { added: add, removed: rem, changed: chg };
}, { changed: 0, added: 0, removed: 0 });

export { calculateChanges };
