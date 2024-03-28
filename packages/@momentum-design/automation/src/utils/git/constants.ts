const MAX_COMMITS = 10;
const COMMIT_INDEX_OFFSET = 1;
const REPO_URL = 'https://api.github.com/repos/momentum-design/momentum-design/commits';

const FORMAT = {
  commit: '%H',
  subject: '%s',
};

const CONSTANTS = {
  COMMIT_INDEX_OFFSET,
  FORMAT,
  MAX_COMMITS,
  REPO_URL,
};

export default CONSTANTS;
