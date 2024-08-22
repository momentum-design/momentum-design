import { Execute } from '@momentum-design/common';

import { Main } from './commands';

const main = new Main();

main.process()
  .then((results) => Execute.emit(results));
