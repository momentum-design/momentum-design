import ChildProcess from 'node:child_process';

class Execute {
  public static emit(value: string): void {
    process.stdout.write(value);
  }

  public static resultsToArray(results: string): Array<string> {
    // using regex to split on both \r and \n (for win and mac)
    return results.split(/\r?\n/);
  }

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
