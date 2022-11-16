import {
  Logger,
  generateMetadata,
  calculateApproximateValue,
  RecordEventProperties,
  RecordContextPrefix,
  RecordBusinessPrefix,
  RecordSourcePrefix,
  RecordEventName,
} from '@momentum-design/telemetry';
import { Command } from '../../models';
import GetPackages from '../get-packages';

import CONSTANTS from './constants';
import { Config, Options } from './types';
import { Git } from '../../utils';
import { GitChangeDetails, calculateChanges, GitCalculatedChanges } from '../../utils/git';

const PACKAGE = 'automation';

const logger = Logger.child(generateMetadata(PACKAGE, 'dispatch-telemetry'));

class DispatchTelemetry extends Command {
  public static override execute(): Promise<string> {
    const config = Command.parse<Config, Options>(DispatchTelemetry.CONSTANTS.OPTIONS);

    return DispatchTelemetry.process(config)
      .then((results) => results.map((line) => `${line}`).join(''));
  }

  private static sendAbstractTelemetry = async (label: string, changes: GitCalculatedChanges): Promise<string> => {
    const value = calculateApproximateValue(label, changes.changed);

    const results = [];

    if (value?.engineering) {
      await logger.record({
        // eslint-disable-next-line max-len
        eventInput: `${RecordSourcePrefix.Calculated}_${RecordBusinessPrefix.Engineering}_${PACKAGE}_${RecordContextPrefix.Automation}_${RecordEventName.Git}`,
        eventProperties: {
          [RecordEventProperties.SecondsSaved]: value?.engineering.seconds,
        },
      });

      results.push(`Sent abstract ${RecordBusinessPrefix.Engineering} telemetry for package: ${label}`);
    }
    if (value?.design) {
      await logger.record({
        // eslint-disable-next-line max-len
        eventInput: `${RecordSourcePrefix.Calculated}_${RecordBusinessPrefix.Design}_${PACKAGE}_${RecordContextPrefix.Automation}_${RecordEventName.Git}`,
        eventProperties: {
          [RecordEventProperties.SecondsSaved]: value?.engineering.seconds,
        },
      });

      results.push(`Sent abstract ${RecordBusinessPrefix.Design} telemetry for package: ${label}`);
    }

    return Promise.resolve(results.join('\n'));
  };

  private static sendConcreteTelemetry = async (label: string, changes: GitCalculatedChanges): Promise<string> => {
    await logger.record({
      // eslint-disable-next-line max-len
      eventInput: `${RecordSourcePrefix.Raw}_${RecordBusinessPrefix.Engineering}_${PACKAGE}_${RecordContextPrefix.Automation}_${RecordEventName.Git}`,
      eventProperties: {
        [RecordEventProperties.LineCount_Changed]: changes.changed,
        [RecordEventProperties.LineCount_Added]: changes.added,
        [RecordEventProperties.LineCount_Removed]: changes.removed,
      },
    });

    return `Sent telemetry for package: ${label}`;
  };

  private static handleDetail = async (detail: GitChangeDetails): Promise<string> => {
    const calculated = calculateChanges(detail);
    await DispatchTelemetry.sendAbstractTelemetry(detail.label, calculated);
    const result = await DispatchTelemetry.sendConcreteTelemetry(detail.label, calculated);
    return result;
  };

  private static handleDetails = async (details: Array<GitChangeDetails>): Promise<string[]> => Promise.all(details
    .map(async (detail) => DispatchTelemetry.handleDetail(detail)));

  public static async process(config: Config): Promise<Array<string>> {
    const { ...getPackagesConfig } = config;

    const packages = await GetPackages.process({ ...getPackagesConfig });
    const intersection = packages.collection.filter((pack) => config.targets.includes(pack.package));
    if (!intersection) {
      return Promise.resolve([]);
    }
    const details = await Promise.all(intersection.map(async (pack) => {
      const label = pack.package;
      const changes = await Git.changes(label, config['commit-index']);
      return {
        label,
        changes,
      };
    }));
    return DispatchTelemetry.handleDetails(details);
  }

  public static override get CONSTANTS(): typeof CONSTANTS {
    return structuredClone(CONSTANTS);
  }
}

export default DispatchTelemetry;
