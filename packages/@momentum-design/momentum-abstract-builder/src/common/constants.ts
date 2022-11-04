const path = require('path');

const packagePath = path.resolve(__dirname, '../../../');

const CONSTANTS = {
  source: {
    icon: path.join(packagePath, 'icons/src/core'),
    iconColored: path.join(packagePath, 'icons/src/color'),
    iconBrand: path.join(packagePath, 'icons/src/brand'),
    illustration: path.join(packagePath, 'illustrations/src'),
    sonic: path.join(packagePath, 'sonic/src'),
    color: path.join(packagePath, 'color/src'),
    font: path.join(packagePath, 'font/src'),
  },
  packageJsonPath: path.resolve(__dirname, '../../package.json'),
};

export default CONSTANTS;
