import ChildProcess from 'node:child_process';

/**
 * Execute class used for executing CLI interactions.
 *
 * @beta
 */
class Execute {
  /**
   * Emit a string value to CLI.
   *
   * @remarks
   * This command can only emit single string primatives, as it directly
   * interfaces with the `process.stdout` Object instead of using the `console`
   * Object. The decision to use `process.stdout` was made to allow the usage
   * of this method for CI/CD workflows.
   *
   * @param value - String value to emit to CLI.
   */
  public static emit(value: string): void {
    process.stdout.write(value);
  }

  /**
   * Run the provided command in a child process.
   *
   * @remarks
   * This command can only accept a single string primative and runs the child
   * process as an external thread. This method doesn't provide any hooks for
   * actively intercepting CLI output, and provides a single buffer as a
   * response.
   *
   * @param command - String command to execute as a child process.
   * @returns - Promise that resolves to the executed child process' results.
   */
  public static run(command: string): Promise<string> {
    return new Promise((resolve, reject) => {
      ChildProcess.exec(command, (error, response) => {
        if (error) {
          reject(error);
        }

        resolve(response);
      });
    });
  }
}

export default Execute;
