import { momentumAbstractSync } from './models/index';

const sync = async () => {
  await momentumAbstractSync.sync();
};

sync();
