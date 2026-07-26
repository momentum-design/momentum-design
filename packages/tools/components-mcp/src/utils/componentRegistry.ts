// AI-Assisted
import { componentsRegistry } from '../data';
import type { ComponentRegistryEntry } from '../common';

import { normalizeName } from './naming';

const SEARCH_ALIASES: Record<string, string[]> = {
  action: ['button', 'buttonlink', 'linkbutton'],
  alert: ['banner', 'toast', 'statusmessage', 'announcementdialog'],
  dropdown: ['combobox', 'listbox', 'selectlistbox', 'menuitem'],
  form: ['input', 'textarea', 'checkbox', 'radio', 'radiogroup', 'toggle', 'slider'],
  menu: ['menubar', 'menuitem', 'menuitemcheckbox', 'menuitemradio'],
  modal: ['dialog', 'announcementdialog'],
  navigation: ['sidenavigation', 'tab', 'tablist', 'verticaltablist', 'navmenuitem'],
  notification: ['toast', 'banner', 'statusmessage'],
  profile: ['avatar', 'avatarbutton', 'presence'],
  select: ['combobox', 'listbox', 'selectlistbox', 'option', 'optgroup'],
};

function listComponents(): ComponentRegistryEntry[] {
  return componentsRegistry;
}

function getComponent(componentName: string): ComponentRegistryEntry | undefined {
  const normalizedName = normalizeName(componentName);

  return componentsRegistry.find(component => {
    const names = [
      component.name,
      component.title,
      component.tagName,
      component.tagName.replace(/^mdc-/, ''),
    ].map(normalizeName);

    return names.includes(normalizedName);
  });
}

function requireComponent(componentName: string): ComponentRegistryEntry {
  const component = getComponent(componentName);

  if (!component) {
    throw new Error([
      `Unknown Momentum component "${componentName}".`,
      'Use list_components or search_components to find valid names.',
    ].join(' '));
  }

  return component;
}

function searchComponents(query: string, limit = 10): ComponentRegistryEntry[] {
  const normalizedQuery = query.trim().toLowerCase();
  const tokens = normalizedQuery.split(/[^a-z0-9]+/).filter(Boolean);
  const aliasMatches = tokens.flatMap(token => SEARCH_ALIASES[token] ?? []);

  if (tokens.length === 0) {
    return componentsRegistry.slice(0, limit);
  }

  return componentsRegistry
    .map(component => {
      const searchableText = [
        component.name,
        component.title,
        component.tagName,
        component.summary,
        component.keywords.join(' '),
        component.docs,
      ].join(' ').toLowerCase();

      let score = 0;

      tokens.forEach(token => {
        if (normalizeName(component.name) === token || component.tagName === `mdc-${token}`) {
          score += 40;
        }
        if (component.title.toLowerCase().includes(token)) {
          score += 20;
        }
        if (component.summary.toLowerCase().includes(token)) {
          score += 12;
        }
        if (component.keywords.includes(token)) {
          score += 8;
        }
        if (searchableText.includes(token)) {
          score += 4;
        }
      });

      if (aliasMatches.includes(component.name)) {
        score += 30;
      }

      return { component, score };
    })
    .filter(result => result.score > 0)
    .sort((a, b) => b.score - a.score || a.component.name.localeCompare(b.component.name))
    .slice(0, limit)
    .map(result => result.component);
}

export { getComponent, listComponents, requireComponent, searchComponents };
// End AI-Assisted
