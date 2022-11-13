const MAX_COMMITS = 10;
const COMMIT_INDEX_OFFSET = 1;

const FORMAT = {
  commit: "%H",
  abbreviated_commit: "%h",
  tree: "%T",
  abbreviated_tree: "%t",
  parent: "%P",
  abbreviated_parent: "%p",
  refs: "%D",
  encoding: "%e",
  subject: "%s",
  sanitized_subject_line: "%f",
  body: "%b",
  commit_notes: "%N",
  verification_flag: "%G?",
  signer: "%GS",
  signer_key: "%GK",
  author: {
    name: "%aN",
    email: "%aE",
    date: "%aD",
  },
  commiter: {
    name: "%cN",
    email: "%cE",
    date: "%cD",
  },
};

const CONSTANTS = {
  COMMIT_INDEX_OFFSET,
  FORMAT,
  MAX_COMMITS,
};

export default CONSTANTS;
