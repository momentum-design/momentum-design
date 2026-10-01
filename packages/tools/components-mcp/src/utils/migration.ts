import type { ComponentRegistryEntry } from '../common';

import { getComponent } from './componentRegistry';
import { normalizeName } from './naming';

interface MomentumUiComponentMapping {
  legacyNames: string[];
  componentName: string;
  confidence: 'exact' | 'review';
  notes: string[];
}

interface MomentumUiConversionResult {
  detectedNames: string[];
  mappings: MomentumUiComponentMapping[];
  convertedCode?: string;
  unmappedNames: string[];
}

const MOMENTUM_UI_COMPONENT_MAPPINGS: MomentumUiComponentMapping[] = [
  { legacyNames: ['button', 'md-button'], componentName: 'button', confidence: 'exact', notes: [] },
  {
    legacyNames: ['button-group', 'md-button-group'],
    componentName: 'buttongroup',
    confidence: 'exact',
    notes: ['Review child button attributes after migration.'],
  },
  { legacyNames: ['link', 'md-link'], componentName: 'link', confidence: 'exact', notes: [] },
  { legacyNames: ['icon', 'md-icon'], componentName: 'icon', confidence: 'exact', notes: [] },
  { legacyNames: ['avatar', 'md-avatar'], componentName: 'avatar', confidence: 'exact', notes: [] },
  { legacyNames: ['badge', 'md-badge'], componentName: 'badge', confidence: 'exact', notes: [] },
  { legacyNames: ['card', 'md-card'], componentName: 'card', confidence: 'review', notes: ['Review card slots.'] },
  { legacyNames: ['checkbox', 'md-checkbox'], componentName: 'checkbox', confidence: 'exact', notes: [] },
  { legacyNames: ['radio', 'md-radio'], componentName: 'radio', confidence: 'exact', notes: [] },
  { legacyNames: ['radio-group', 'md-radio-group'], componentName: 'radiogroup', confidence: 'exact', notes: [] },
  {
    legacyNames: ['toggle', 'toggle-switch', 'md-toggle', 'md-toggle-switch'],
    componentName: 'toggle',
    confidence: 'exact',
    notes: [],
  },
  {
    legacyNames: ['input', 'input-container', 'md-input', 'md-input-container'],
    componentName: 'input',
    confidence: 'review',
    notes: ['Review label, help text, and validation attributes.'],
  },
  {
    legacyNames: ['password', 'md-password'],
    componentName: 'password',
    confidence: 'review',
    notes: ['Review visibility toggle accessibility labels.'],
  },
  { legacyNames: ['textarea', 'md-textarea'], componentName: 'textarea', confidence: 'exact', notes: [] },
  {
    legacyNames: ['select', 'md-select'],
    componentName: 'select',
    confidence: 'review',
    notes: ['Momentum Design select requires selectlistbox/option structure.'],
  },
  {
    legacyNames: ['option', 'select-option', 'md-option', 'md-select-option'],
    componentName: 'option',
    confidence: 'exact',
    notes: [],
  },
  { legacyNames: ['list', 'md-list'], componentName: 'list', confidence: 'exact', notes: [] },
  { legacyNames: ['list-item', 'md-list-item'], componentName: 'listitem', confidence: 'exact', notes: [] },
  { legacyNames: ['list-header', 'md-list-header'], componentName: 'listheader', confidence: 'exact', notes: [] },
  {
    legacyNames: ['menu', 'md-menu'],
    componentName: 'menupopover',
    confidence: 'review',
    notes: ['Review triggerid and menuitem structure.'],
  },
  { legacyNames: ['menu-item', 'md-menu-item'], componentName: 'menuitem', confidence: 'exact', notes: [] },
  {
    legacyNames: ['modal', 'dialog', 'md-modal', 'md-dialog'],
    componentName: 'dialog',
    confidence: 'review',
    notes: ['Review trigger, focus, and close-button accessibility.'],
  },
  {
    legacyNames: ['popover', 'md-popover'],
    componentName: 'popover',
    confidence: 'review',
    notes: ['Review triggerid and placement attributes.'],
  },
  { legacyNames: ['tooltip', 'md-tooltip'], componentName: 'tooltip', confidence: 'exact', notes: [] },
  {
    legacyNames: ['toast', 'md-toast'],
    componentName: 'toast',
    confidence: 'review',
    notes: ['Review toast body slots and dismiss behavior.'],
  },
  {
    legacyNames: ['banner', 'alert-banner', 'md-banner', 'md-alert-banner'],
    componentName: 'banner',
    confidence: 'review',
    notes: ['Review status and action slots.'],
  },
  {
    legacyNames: ['tabs', 'tab-list', 'md-tabs', 'md-tab-list'],
    componentName: 'tablist',
    confidence: 'review',
    notes: ['Review child mdc-tab ids and aria-controls.'],
  },
  { legacyNames: ['tab', 'md-tab'], componentName: 'tab', confidence: 'exact', notes: [] },
  { legacyNames: ['slider', 'md-slider'], componentName: 'slider', confidence: 'exact', notes: [] },
  { legacyNames: ['spinner', 'md-spinner'], componentName: 'spinner', confidence: 'exact', notes: [] },
  {
    legacyNames: ['progress-spinner', 'md-progress-spinner'],
    componentName: 'progressspinner',
    confidence: 'exact',
    notes: [],
  },
  { legacyNames: ['progress-bar', 'md-progress-bar'], componentName: 'progressbar', confidence: 'exact', notes: [] },
  { legacyNames: ['chip', 'md-chip'], componentName: 'chip', confidence: 'exact', notes: [] },
  { legacyNames: ['filter-chip', 'md-filter-chip'], componentName: 'filterchip', confidence: 'exact', notes: [] },
  {
    legacyNames: ['date-picker', 'datepicker', 'md-date-picker', 'md-datepicker'],
    componentName: 'datepicker',
    confidence: 'review',
    notes: ['Review date formatting and calendar popover behavior.'],
  },
  {
    legacyNames: ['time-picker', 'timepicker', 'md-time-picker', 'md-timepicker'],
    componentName: 'timepicker',
    confidence: 'review',
    notes: ['Review time format and accessibility labels.'],
  },
  {
    legacyNames: ['combobox', 'combo-box', 'md-combobox', 'md-combo-box'],
    componentName: 'combobox',
    confidence: 'review',
    notes: ['Review listbox and option composition.'],
  },
];

function getTagNameForMapping(mapping: MomentumUiComponentMapping): string {
  const component = getComponent(mapping.componentName);

  return component?.tagName ?? `mdc-${mapping.componentName}`;
}

function getComponentForMapping(mapping: MomentumUiComponentMapping): ComponentRegistryEntry | undefined {
  return getComponent(mapping.componentName);
}

function findMomentumUiMappings(legacyName: string): MomentumUiComponentMapping[] {
  const normalizedLegacyName = normalizeName(legacyName.replace(/^md-/, ''));
  const exactMappings = MOMENTUM_UI_COMPONENT_MAPPINGS.filter(mapping => (
    mapping.legacyNames.map(normalizeName).includes(normalizedLegacyName)
  ));

  if (exactMappings.length > 0) {
    return exactMappings;
  }

  const component = getComponent(normalizedLegacyName);
  if (!component) {
    return [];
  }

  return [
    {
      legacyNames: [legacyName],
      componentName: component.name,
      confidence: 'review',
      notes: ['Mapped by matching the normalized component name. Review API differences.'],
    },
  ];
}

function extractMomentumUiNames(code: string): string[] {
  const tagNames = [...code.matchAll(/<\/?([a-z][a-z0-9-]*)\b/g)]
    .map(match => match[1])
    .filter(tagName => tagName.startsWith('md-') && !tagName.startsWith('mdc-'));
  const reactNames = [...code.matchAll(/<([A-Z][A-Za-z0-9]*)\b/g)]
    .map(match => match[1]);

  return [...tagNames, ...reactNames].filter((name, index, all) => all.indexOf(name) === index);
}

function replaceLegacyTags(code: string, mappings: MomentumUiComponentMapping[]): string {
  return mappings.reduce((currentCode, mapping) => {
    const replacementTag = getTagNameForMapping(mapping);

    return mapping.legacyNames.reduce((updatedCode, legacyName) => {
      const legacyTag = legacyName.startsWith('md-') ? legacyName : `md-${legacyName}`;

      return updatedCode
        .replace(new RegExp(`(<\\/?\\s*)${legacyTag}(?=\\s|>|/)`, 'g'), `$1${replacementTag}`);
    }, currentCode);
  }, code);
}

function convertMomentumUiUsage(code?: string, componentName?: string): MomentumUiConversionResult {
  const detectedNames = [
    ...(componentName ? [componentName] : []),
    ...(code ? extractMomentumUiNames(code) : []),
  ].filter((name, index, all) => all.indexOf(name) === index);
  const mappings = detectedNames
    .flatMap(findMomentumUiMappings)
    .filter((mapping, index, all) => (
      all.findIndex(item => item.componentName === mapping.componentName) === index
    ));
  const mappedLegacyNames = new Set(mappings.flatMap(mapping => mapping.legacyNames.map(normalizeName)));
  const unmappedNames = detectedNames.filter(name => !mappedLegacyNames.has(normalizeName(name)));

  return {
    detectedNames,
    mappings,
    convertedCode: code && mappings.length > 0 ? replaceLegacyTags(code, mappings) : undefined,
    unmappedNames,
  };
}

export {
  convertMomentumUiUsage,
  findMomentumUiMappings,
  getComponentForMapping,
  getTagNameForMapping,
  type MomentumUiComponentMapping,
  type MomentumUiConversionResult,
};
