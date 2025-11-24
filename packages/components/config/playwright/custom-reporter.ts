import { FullResult, TestCase, Suite, Reporter } from '@playwright/test/reporter';

class MyReporter implements Reporter {
  onTestBegin(test: TestCase) {
    // eslint-disable-next-line no-console
    console.log(`Starting test ${test.location.file}`);
  }

  onBegin(_: any, suite: Suite) {
    // eslint-disable-next-line no-console
    console.log(`Starting the run with ${suite.allTests().length} tests`);
  }

  onTestEnd(test: TestCase) {
    // eslint-disable-next-line no-console
    console.log(`Finished test ${test.location.file}`);
  }

  onEnd(result: FullResult) {
    // eslint-disable-next-line no-console
    console.log(`Finished the run: ${result.status}`);
  }
}

export default MyReporter;
