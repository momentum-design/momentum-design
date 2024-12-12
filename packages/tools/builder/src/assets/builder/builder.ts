import {
  Logger,
  generateMetadata,
} from '@momentum-design/telemetry';
import { Builder as CoreBuilder } from '../../models';
import CONSTANTS from './constants';
import type { Config } from './types';
import AsyncUtils from './async-utils';
import Flow from './flow';

const logger = Logger.child(generateMetadata(CONSTANTS.PACKAGE, CONSTANTS.TYPE));

/**
 * The Assets Builder class.
 *
 * Contains initialising and processing functions and makes use of
 * several utilities, like `AsyncUtils`.
 *
 * @beta
 */
class Builder extends CoreBuilder {
  /**
   * Name of the current build process
   */
  buildName: string;

  /**
   * Flows to run as part of the current build process
   */
  flows: Array<Flow>;

  /**
   * Async utils, which will help running promises in series
   */
  asyncUtils: AsyncUtils;

  /**
   * Constructor of Builder Class
   * @param config - Configuration Object to be mounted to this Builder.
   */
  public constructor(config: Config) {
    const { flows, buildName, ...other } = config;
    super({ ...other, type: CONSTANTS.TYPE });

    this.buildName = buildName;
    this.flows = flows?.map((flowData) => new Flow(flowData));

    this.asyncUtils = new AsyncUtils();
  }

  /**
   * Verifies the config
   *
   * @returns a Promise, which resolves if
   * everythings fine / rejects if there is a problem in the config
   */
  public verifyConfig(): Promise<this> {
    if (!this.flows.length) {
      const reason = 'No \'flows\' found in config.';
      logger.error(reason);
      return Promise.reject(reason);
    }
    return Promise.resolve(this);
  }

  /**
   * Initialize method, which will run first
   * @returns Promise
   */
  public override initialize(): Promise<this> {
    logger.info(`Build '${this.buildName}' started.`);

    return this.verifyConfig();
  }

  /**
   * Run the flow steps after each other
   *
   * If `copyOnly` is true, it will only read and copy the files
   * Otherwise, it will read, transform and write the files
   *
   * @param flow - flow to run through
   * @returns Promise of this
   */
  public async runFlowSteps(flow: Flow): Promise<this> {
    if (flow.copyOnly) {
      return flow.read()
        .then(() => flow.copy())
        .then(() => this);
    }
    return flow.read()
      .then(() => flow.transform())
      .then(() => flow.write())
      .then(() => this);
  }

  /**
   * Process method, which will run after initialize.
   * This contains transformations and will write the transformed data to dist
   * @returns Promise
   */
  public override process(): Promise<this> {
    return this.asyncUtils.series(this.flows.map((flow) => () => this.runFlowSteps(flow)));
  }

  /**
   * Run after the build process step
   *
   * @returns Promise of this
   */
  public override final(): Promise<this> {
    return new Promise((resolve) => {
      logger.info(`Build '${this.buildName}' finished.`);
      resolve(this);
    });
  }

  /**
   * Constants associated with this Builder.
   */
  public static override get CONSTANTS(): typeof CONSTANTS {
    return structuredClone(CONSTANTS);
  }

  /**
   * Type of this Builder.
   */
  public static override get type(): string {
    return Builder.CONSTANTS.TYPE;
  }
}

export default Builder;
