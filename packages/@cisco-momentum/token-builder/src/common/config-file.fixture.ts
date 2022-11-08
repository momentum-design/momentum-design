import { ConfigFile } from './types';

const CONFIG_FILE_FIXTURE: ConfigFile = {
  destination: 'config-file-destination',
  filters: {
    categories: ['config-file-category-a', 'config-file-category-b'],
    items: ['config-file-item-a', 'config-file-item-b'],
    types: ['config-file-type-a', 'config-file-type-b'],
  },
  references: true,
  targets: ['config-file-target-a', 'config-file-target-b'],
};

export default CONFIG_FILE_FIXTURE;
