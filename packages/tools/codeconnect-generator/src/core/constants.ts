// AI-Assisted
/**
 * Core Constants Module
 *
 * Shared constants used across the CLI tool.
 *
 * @module core/constants
 */

import type { GeneratedSectionMarkers, GeneratedSectionName } from './types';

/**
 * Canonical marker pair for generated sections.
 */
export const GENERATED_SECTION_MARKERS: GeneratedSectionMarkers = {
  start: '// BEGIN GENERATED',
  end: '// END GENERATED',
};

/**
 * Default configuration values for the connect command.
 */
export const DEFAULT_CONNECT_OPTIONS = {
  dryRun: false,
  emit: 'all',
  continueOnError: true,
  force: false,
} as const;

/**
 * Default base import path for generated component imports.
 */
export const DEFAULT_IMPORT_BASE = '@momentum-design/components';

/**
 * Builds named markers for a specific generated section.
 *
 * @param name - The generated section name to embed in markers.
 * @returns The named start/end marker pair.
 */
export const buildGeneratedSectionMarkers = (name: GeneratedSectionName): GeneratedSectionMarkers => ({
  start: `${GENERATED_SECTION_MARKERS.start}: ${name}`,
  end: `${GENERATED_SECTION_MARKERS.end}: ${name}`,
});
// End AI-Assisted
