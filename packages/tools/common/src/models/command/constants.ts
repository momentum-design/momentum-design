/**
 * Index offset indicating where the command arguments should begin to be
 * interpreted within the CLI string.
 */
const COMMANDS_INDEX_OFFSET = 1;

/**
 * Command separator indicating the point in which command arguements can begin
 * being parsed within the CLI string.
 */
const COMMANDS_SEPARATOR = '--';

const CONSTANTS = {
  COMMANDS_INDEX_OFFSET,
  COMMANDS_SEPARATOR,
};

export default CONSTANTS;
