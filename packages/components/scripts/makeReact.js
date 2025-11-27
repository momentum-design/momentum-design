// https://github.com/shoelace-style/shoelace/blob/next/scripts/make-react.js

const fs = require('fs');
const rimraf = require('rimraf');
const path = require('path');
const prettier = require('prettier');
const prettierConfig = require('../prettier.config.js');

function getAllComponents(metadata) {
  const allComponents = [];

  metadata.modules.map(module => {
    module.declarations?.map(declaration => {
      if (declaration.customElement) {
        const component = declaration;
        const path = module.path;

        if (component) {
          allComponents.push(Object.assign(component, { path }));
        }
      }
    });
  });

  return allComponents;
}

const distFolder = path.posix.join('./dist');
const srcFolder = path.posix.join('./src');
const reactDir = path.posix.join(srcFolder, 'react');

// Clear react directory
rimraf.sync(reactDir);
fs.mkdirSync(reactDir, { recursive: true });

// Fetch component metadata
const metadata = JSON.parse(fs.readFileSync(path.posix.join(distFolder, 'custom-elements.json'), 'utf8'));
const components = getAllComponents(metadata).sort((a, b) => a.name.localeCompare(b.name));
const index = [];

async function loop() {
  for await (const component of components) {
    const tagWithoutPrefix = component.tagName.replace(/^mdc-/, '');
    const reactComponentDir = path.posix.join(reactDir, tagWithoutPrefix);
    const reactComponentFile = path.posix.join(reactComponentDir, 'index.ts');

    const webComponentDir = path.dirname(component.path);
    const webComponentConstantsFile = path.posix.join(webComponentDir, `${tagWithoutPrefix}.constants`);
    const webComponentTypesFile = path.posix.join(webComponentDir, `${tagWithoutPrefix}.types`);

    fs.mkdirSync(reactComponentDir, { recursive: true });

    // TODO: this is currently the jsDoc from the web component, we would want to automatically
    // generate a nice React component jsDoc based on the web component jsDoc
    const jsDoc = component.jsDoc || '';

    // ** EVENTS for CREATE COMPONENT **
    const evDirectlyDefined = (component.events || []).filter(event => !!event.name && !event.inheritedFrom);
    const evInheritDefined = (component.events || []).filter(event => !!event.name && !!event.inheritedFrom);

    const evDirectlyDefinedImportStrings = evDirectlyDefined
      .map(event => `${event.reactName}: '${event.name}' as EventName<Events['${event.reactName}Event']>`)
      .join(',\n');

    const evInheritDefinedImportStrings = evInheritDefined
      .map(event => `${event.reactName}: '${event.name}' as EventName<EventsInherited['${event.reactName}Event']>`)
      .join(',\n');

    // ** TYPE IMPORTS **
    const convertModulePathToTypesFile = modulePath => {
      return modulePath.replace('src/', '').replace('.component.ts', '.types');
    };

    let typeImports = '';
    let typeInheritedImports = '';

    if (evDirectlyDefined.length > 0) {
      typeImports = `import type { Events } from '../../${webComponentTypesFile}';`;
    }
    if (evInheritDefined.length > 0) {
      // this assumes that there can only be inherited from one other component:
      typeInheritedImports = `import type { Events as EventsInherited } from '../../${convertModulePathToTypesFile(evInheritDefined[0].inheritedFrom.module)}';`;
    }

    const source = await prettier.format(
      `
      import * as React from 'react';
      import { createComponent${component.events ? `, type EventName` : ''} } from '@lit/react';
      import Component from '../../${webComponentDir}';
      import { TAG_NAME } from '../../${webComponentConstantsFile}';
      ${typeImports}${typeInheritedImports}

      ${jsDoc}
      const reactWrapper = createComponent({
        tagName: TAG_NAME,
        elementClass: Component,
        react: React,
         events: {
          ${evDirectlyDefinedImportStrings}${evDirectlyDefinedImportStrings && evInheritDefinedImportStrings && `,`}
          ${evInheritDefinedImportStrings}
        },
        displayName: "${component.name}",
      })

      export default reactWrapper
    `,
      Object.assign(prettierConfig, {
        parser: 'babel-ts',
      }),
    );

    fs.writeFileSync(reactComponentFile, source, 'utf8');
    index.push(`export { default as ${component.name} } from './${tagWithoutPrefix}';`);
  }

  index.push(''); // to make EOF newline
}

loop().then(() => {
  // Generate the index file
  fs.writeFileSync(path.posix.join(reactDir, 'index.ts'), index.join('\n'), 'utf8');
  console.log('React components generated');
});
