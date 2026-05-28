// AI-Assisted
/**
 * @fileoverview Shared test fixtures for codeconnect-generator tests.
 * Provides factory functions for creating test data with sensible defaults.
 */

import type { ConnectCommandOptions } from '../../src/commands/connect/types';
import {
  type AttributeDescriptor,
  type ComponentModel,
  type ConnectOptions,
  type EmitterOptions,
  type EmitterTarget,
  type EventDescriptor,
  FigmaPropertyType,
  type GenerationReport,
  GenerationStatus,
  type PropertyDescriptor,
  PropertyVisibility,
} from '../../src/core/types';

/**
 * Creates a mock PropertyDescriptor with default values.
 * @param overrides - Partial property values to override defaults.
 */
export const createMockProperty = (overrides: Partial<PropertyDescriptor> = {}): PropertyDescriptor => ({
  name: 'testProperty',
  attribute: 'test-property',
  type: FigmaPropertyType.String,
  tsType: 'string',
  reflect: false,
  defaultValue: null,
  doc: null,
  visibility: PropertyVisibility.Public,
  ...overrides,
});

/**
 * Creates a mock AttributeDescriptor with default values.
 * @param overrides - Partial attribute values to override defaults.
 */
export const createMockAttribute = (overrides: Partial<AttributeDescriptor> = {}): AttributeDescriptor => ({
  name: 'test-attribute',
  propertyName: 'testAttribute',
  type: FigmaPropertyType.String,
  reflect: false,
  defaultValue: null,
  doc: null,
  ...overrides,
});

/**
 * Creates a mock EventDescriptor with default values.
 * @param overrides - Partial event values to override defaults.
 */
export const createMockEvent = (overrides?: Partial<EventDescriptor>): EventDescriptor => ({
  name: 'test-event',
  reactHandler: 'onTestEvent',
  detailType: null,
  ...overrides,
});

/**
 * Creates a mock ComponentModel with default values.
 * @param overrides - Partial component values to override defaults.
 */
export const createMockComponentModel = (overrides?: Partial<ComponentModel>): ComponentModel => ({
  className: 'TestComponent',
  tagName: 'mdc-test',
  filePath: '/test/components/test.component.ts',
  componentDir: '/test/components',
  props: [],
  attributes: [],
  events: [],
  importPath: '@test/components',
  ...overrides,
});

/**
 * Creates a mock ConnectOptions with default values.
 * @param overrides - Partial options to override defaults.
 */
export const createMockConnectOptions = (overrides?: Partial<ConnectOptions>): ConnectOptions => ({
  inputPath: '/test/components',
  dryRun: false,
  force: false,
  emitTargets: ['webcomponent'] as unknown as EmitterTarget[],
  ...overrides,
});

/**
 * Creates an empty GenerationReport for testing.
 */
export const createMockReport = (): GenerationReport => ({
  status: GenerationStatus.Success,
  created: [],
  updated: [],
  unchanged: [],
  warnings: [],
  errors: [],
  durationMs: 0,
});

/**
 * Creates a mock EmitterOptions with default values.
 * @param overrides - Partial options to override defaults.
 */
export const createMockEmitterOptions = (overrides?: Partial<EmitterOptions>): EmitterOptions => ({
  dryRun: false,
  baseImportPath: undefined,
  ...overrides,
});

/**
 * Creates a mock ConnectCommandOptions with default values.
 * @param overrides - Partial options to override defaults.
 */
export const createMockConnectCommandOptions = (overrides?: Partial<ConnectCommandOptions>): ConnectCommandOptions => ({
  path: './components',
  dryRun: false,
  emit: 'webcomponent',
  continueOnError: false,
  ...overrides,
});

// End AI-Assisted
