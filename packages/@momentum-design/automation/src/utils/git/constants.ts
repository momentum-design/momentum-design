const MAX_COMMITS = 10;
const COMMIT_INDEX_OFFSET = 1;
const COMMITS_API_URL = 'https://api.github.com/repos/momentum-design/momentum-design/commits';

const FORMAT = {
  commit: '%H',
};

const CONSTANTS = {
  COMMIT_INDEX_OFFSET,
  FORMAT,
  MAX_COMMITS,
  COMMITS_API_URL,
};

export default CONSTANTS;
