// AI-Assisted
/**
 * Component Model Mapper
 *
 * Normalizes parser output into a ComponentModel for downstream emitters.
 *
 * @module mappers/component-model
 */

import path from 'node:path';

import type { ComponentModel, EventDescriptor, PropertyDescriptor } from '../core/types';
import { normalizePath } from '../utils/paths';

import { mapPropertiesToAttributes } from './attribute-mapper';

/**
 * Input payload for normalizing a component model.
 */
export interface ComponentModelInput {
  readonly className?: string;
  readonly tagName: string;
  readonly filePath: string;
  readonly componentDir: string;
  readonly props: readonly PropertyDescriptor[];
  readonly events: readonly EventDescriptor[];
}

/**
 * Derives the import path relative to the components source root.
 *
 * @param componentDir - Component directory path.
 * @returns Normalized import path fragment.
 */
export const deriveImportPath = (componentDir: string): string => {
  const marker = '/packages/components/src/';
  const normalized = normalizePath(componentDir);
  const index = normalized.lastIndexOf(marker);
  if (index >= 0) {
    return normalized.slice(index + marker.length);
  }
  return path.posix.basename(normalized);
};

/**
 * Normalizes a component model for downstream emitters.
 *
 * @param input - Raw parser output to normalize.
 * @returns Normalized ComponentModel.
 */
export const mapComponentModel = (input: ComponentModelInput): ComponentModel => {
  const className = input.className?.trim() || 'UnknownComponent';
  const props = input.props ?? [];
  const events = input.events ?? [];

  return {
    className,
    tagName: input.tagName,
    filePath: input.filePath,
    componentDir: input.componentDir,
    props,
    attributes: mapPropertiesToAttributes(props),
    events,
    importPath: deriveImportPath(input.componentDir),
  };
};
// End AI-Assisted
