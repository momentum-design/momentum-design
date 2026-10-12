const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const complete = require.resolve('@momentum-design/tokens/dist/css/components/complete.css');
const motion = require.resolve('@momentum-design/tokens/dist/css/motion/complete.css');
const animation = require.resolve('@momentum-design/tokens/dist/css/motion/animation.css');

const root = process.cwd();
const playwrightPublicDist = path.join(root, 'config', 'playwright', 'public', 'dist');

const copyFileToFolder = (src, destFolder, fileName = path.basename(src)) => {
  const dest = path.join(destFolder, fileName);

  // Create the destination folder if it doesn't exist
  if (!fs.existsSync(destFolder)) {
    fs.mkdirSync(destFolder, {}, err => {
      if (err) throw err;
    });
  }

  fs.copyFileSync(src, dest);
};

copyFileToFolder(complete, playwrightPublicDist);
copyFileToFolder(motion, playwrightPublicDist, 'motion.css');
copyFileToFolder(animation, playwrightPublicDist, 'animation.css');

console.log(chalk.gray('Tokens have been copied successfully!'));
