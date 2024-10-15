const { execSync } = require('child_process');

const workspace = process.argv[2];
const scriptName = process.argv[3];
const project = process.argv[4];

if (!workspace || !scriptName) {
  process.exit(1);
}

try {
  let dockerCommand = 'docker run --platform linux/amd64 --rm --network=\'host\' -v .:/app docker-test-postbuild sh -c '
    + `"yarn docker:install && yarn workspace ${workspace} ${scriptName}`;

  // Append `project` if it's provided
  if (project) {
    dockerCommand += ` ${project}`;
  }

  dockerCommand += '"';

  // Execute the Docker command
  execSync(dockerCommand, { stdio: 'inherit' });
} catch (error) {
  process.exit(1);
}
