import { exec } from 'node:child_process';

/**
 * Emit an output directly to the CLI.
 *
 * @param {string} output details to be emitted when this method is called.
 * @returns {void}
 */
 const emit = (output) => process.stdout.write(output);

 const execute = (command) => new Promise((resolve, reject) => {
  exec(command, (error, results) => {
    if (error) {
      reject(error);
    }

    resolve(results);
  });
 });

 export {
  emit,
  execute,
 };
 