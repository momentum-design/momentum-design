// AI-Assisted
export type Framework = 'web-component' | 'angular' | 'react';

export type RegistryValue = string | number | boolean | null;

export type AssetKind = 'icon' | 'illustration' | 'brand-visual' | 'animation';

export type AssetFormat = 'json' | 'png' | 'svg';

export interface AssetRegistryEntry {
  name: string;
  kind: AssetKind;
  packageName: string;
  category: string;
  format: AssetFormat;
  sourcePath: string;
  importPath: string;
  keywords: string[];
}

export type ColorTokenCategory = 'aaos' | 'additional-theme' | 'core' | 'theme';

export interface ColorTokenRegistryEntry {
  name: string;
  cssVariable: string;
  value: string;
  resolvedValue: string;
  description: string;
  category: ColorTokenCategory;
  theme?: string;
  parent: string;
  sourcePath: string;
  references: string[];
  keywords: string[];
}

export interface ComponentReference {
  name: string;
  description?: string;
}

export interface ComponentProperty {
  name: string;
  attribute?: string;
  type?: string;
  default?: RegistryValue | string;
  values?: RegistryValue[];
  description?: string;
  reflected?: boolean;
  source?: 'component' | 'storybook';
}

export interface ComponentApi {
  properties: ComponentProperty[];
  slots: ComponentReference[];
  events: ComponentReference[];
  cssParts: ComponentReference[];
  cssProperties: ComponentReference[];
  rules: string[];
}

export interface ComponentExample {
  language: string;
  code: string;
}

export interface ComponentSourceReference {
  componentPath: string;
  knowledgeBasePath: string;
}

export interface ComponentRegistryEntry {
  name: string;
  title: string;
  tagName: string;
  summary: string;
  tier?: number;
  source: ComponentSourceReference;
  docs: string;
  sections: Record<string, string>;
  dependencies: string[];
  api: ComponentApi;
  examples: ComponentExample[];
  reactImports: string[];
  keywords: string[];
  constants: Record<string, Record<string, RegistryValue | string | undefined>>;
}

export interface ValidationIssue {
  level: 'error' | 'warning';
  message: string;
  property?: string;
}

export interface ValidationResult {
  valid: boolean;
  issues: ValidationIssue[];
}

export type ComponentProps = Record<string, RegistryValue | undefined>;

export interface GeneratedCodeResult {
  component: ComponentRegistryEntry;
  framework: Framework;
  code: string;
  setupNotes: string[];
  validation: ValidationResult;
}

export interface McpTextContent {
  type: 'text';
  text: string;
}

export interface McpToolResponse {
  [key: string]: unknown;
  content: McpTextContent[];
  isError?: boolean;
}
// End AI-Assisted
