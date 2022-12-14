## API Report File for "@momentum-design/common"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

/// <reference types="node" />

import { Options } from 'yargs';

// @beta
export abstract class Command<O extends CommandOptions, P extends CommandParams> {
    constructor(options: O);
    protected clean(): this;
    protected collect(): CommandParams;
    // Warning: (ae-forgotten-export) The symbol "CONSTANTS" needs to be exported by the entry point index.d.ts
    static get CONSTANTS(): typeof CONSTANTS;
    options: O;
    params: CommandParams;
    abstract prepare(results: any): Promise<string>;
    abstract process(): Promise<any>;
}

// @beta
export type CommandOptions = Record<string, Options>;

// @beta
export type CommandParams = Record<string, any>;

// @beta
export class Execute {
    static emit(value: string): void;
    static run(command: string): Promise<string>;
}

// @beta
export class Json {
    // Warning: (ae-forgotten-export) The symbol "CONSTANTS_2" needs to be exported by the entry point index.d.ts
    static get CONSTANTS(): typeof CONSTANTS_2;
    static read(target: string, encoding?: BufferEncoding): Promise<any>;
    static write(target: string, data: any, tabSpacing?: number): Promise<void>;
}

```
