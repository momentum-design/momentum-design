const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const glob = require('glob');

const root = process.cwd();
const sourceFolder = path.posix.join(root, 'src', 'styles');
const destinationFolder = path.posix.join(root, 'dist', 'styles');

const stylesheets = glob.sync(path.posix.join(sourceFolder, '*.css'), { ignore: '**/*.stories.styles.css' });

if (stylesheets.length === 0) {
  console.log(chalk.yellow('No shared stylesheets found to copy.'));
  process.exit(0);
}

fs.mkdirSync(destinationFolder, { recursive: true });

stylesheets.forEach(stylesheet => {
  fs.copyFileSync(stylesheet, path.posix.join(destinationFolder, path.basename(stylesheet)));
});

console.log(chalk.gray(`Shared stylesheets have been copied successfully! (${stylesheets.length})`));
