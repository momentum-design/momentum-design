import { Logger, generateMetadata } from '@momentum-design/telemetry';

describe('Logger Telemetry Module', () => {
  const PACKAGE = 'test';
  const logger = Logger.child(generateMetadata(PACKAGE, 'test'));

  it('logs information', async () => {
    const logInstance = logger.info('test');

    expect(logInstance).toBeDefined();
  });
});
