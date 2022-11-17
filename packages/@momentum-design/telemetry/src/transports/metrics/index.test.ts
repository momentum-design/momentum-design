import MetricsTransport from '.';

describe('metrics', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  describe('transport', () => {
    it('should emit a recorded event', () => {
      const transport = new MetricsTransport({ level: 'record' });
      expect(transport).toBeDefined();
      expect(transport.log).toBeDefined();
      transport.on('recorded', (value) => {
        expect(value).toBeDefined();
      });
      transport.log({
        level: 'record',
        message: 'test',
        metadata: {
          pkg: 'test',
          file: 'test',
        },
        eventInput: 'Calculated_Engineering_test_Automation_Build',
      }, () => {});
      jest.runAllTimers();
      expect.assertions(3);
    });
  });
});
