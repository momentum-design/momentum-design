const { execSync } = require('child_process');

const workspace = process.argv[2];
const scriptName = process.argv[3];
const project = process.argv[4] || '';

if (!workspace || !scriptName) {
  process.exit(1);
}

try {
  const dockerCmd = 'docker run --platform linux/amd64 --rm --network=\'host\' -v .:/app docker-test-postbuild sh -c '
    + '"yarn install && yarn build && yarn test:e2e:docker:install && yarn workspace'
    + ` ${workspace} ${scriptName} ${project}"`;

  // Execute the Docker command
  execSync(dockerCmd, { stdio: 'inherit' });
} catch (error) {
  process.exit(1);
}
