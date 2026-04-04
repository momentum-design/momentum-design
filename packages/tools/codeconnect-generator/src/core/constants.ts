// AI-Assisted
/**
 * Core Constants Module
 *
 * Shared constants used across the CLI tool.
 *
 * @module core/constants
 */

import type { GeneratedSectionMarkers, GeneratedSectionName } from './types';

// ============================================================================
// Well-Known File & Directory Names
// ============================================================================

/** Standard npm package manifest file name. */
export const PACKAGE_JSON = 'package.json';

/** Custom elements manifest file name produced by the CEM analyzer. */
export const CUSTOM_ELEMENTS_MANIFEST = 'custom-elements.json';

/** Standard npm dependency directory name. */
export const NODE_MODULES_DIR = 'node_modules';

/** Standard distribution output directory name. */
export const DIST_DIR = 'dist';

/** Source root directory marker (with path separators). */
export const SRC_PATH_SEGMENT = '/src/';

/** Output sub-directory for generated Code Connect files. */
export const CODE_CONNECT_DIR = 'code-connect';

/** Package-relative import path marker for component source resolution. */
export const COMPONENTS_SRC_PATH_SEGMENT = '/packages/components/src/';

// ============================================================================
// Generated Section Markers
// ============================================================================

/**
 * Canonical marker pair for generated sections.
 */
export const GENERATED_SECTION_MARKERS: GeneratedSectionMarkers = {
  start: '// BEGIN GENERATED',
  end: '// END GENERATED',
};

// ============================================================================
// Default Configuration
// ============================================================================

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
