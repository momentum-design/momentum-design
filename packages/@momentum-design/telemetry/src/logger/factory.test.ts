import winston from 'winston';
import { LOGGER_FORMAT, LOGGER_TRANSPORTS } from './config';
import { create } from './factory';

describe('factory', () => {
  describe('create', () => {
    it('should create a logger instance', () => {
      const createLoggerSpy: jest.SpyInstance = jest.spyOn(winston, 'createLogger');
      const logger = create({ transports: LOGGER_TRANSPORTS, format: LOGGER_FORMAT });
      expect(logger).toBeDefined();
      expect(createLoggerSpy).toHaveBeenCalled();
    });
  });
});
