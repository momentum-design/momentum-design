import { Options as YargsOptions } from 'yargs';

/**
 * Options interface to be provided as a generic to the abstract Command class.
 *
 * @remarks
 * This interface reflects the shape of the Options object provided to the
 * `yargs` dependency when processing CLI execution strings.
 *
 * @beta
 */
export type Options = Record<string, YargsOptions>;

/**
 * Params interface to be provided as a generic to the abstract Command class.
 *
 * @remarks
 * This interface reflects the values that will be availble within the
 * `new Command().params` class property.
 *
 * @beta
 */
export type Params = Record<string, any>;
