// https://github.com/shoelace-style/shoelace/blob/next/scripts/make-react.js

const fs = require("fs");
const rimraf = require("rimraf");
const path = require("path");
const prettier = require("prettier");
const prettierConfig = require("../prettier.config.js");

function getAllComponents(metadata) {
  const allComponents = [];

  metadata.modules.map((module) => {
    module.declarations?.map((declaration) => {
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

const distFolder = path.join("./dist");
const srcFolder = path.join("./src");
const reactDir = path.join(srcFolder, "react");

// Clear react directory
rimraf.sync(reactDir);
fs.mkdirSync(reactDir, { recursive: true });

// Fetch component metadata
const metadata = JSON.parse(fs.readFileSync(path.join(distFolder, "custom-elements.json"), "utf8"));
const components = getAllComponents(metadata);
const index = [];

async function loop() {
  for await (const component of components) {
    const tagWithoutPrefix = component.tagName.replace(/^mdc-/, "");
    const reactComponentDir = path.join(reactDir, tagWithoutPrefix);
    const reactComponentFile = path.join(reactComponentDir, "index.ts");

    const webComponentDir = path.dirname(component.path);
    const webComponentConstantsFile = path.join(webComponentDir, `${tagWithoutPrefix}.constants`);

    fs.mkdirSync(reactComponentDir, { recursive: true });

    // TODO: this is currently the jsDoc from the web component, we would want to automatically
    // generate a nice React component jsDoc based on the web component jsDoc
    const jsDoc = component.jsDoc || "";

    const source = await prettier.format(
      `
      import * as React from 'react';
      import { createComponent } from '@lit/react';
      import Component from '../../${webComponentDir}';
      import { TAG_NAME } from '../../${webComponentConstantsFile}';

      ${jsDoc}
      const reactWrapper = createComponent({
        tagName: TAG_NAME,
        elementClass: Component,
        react: React,
        events: {},
        displayName: "${component.name}",
      })

      export default reactWrapper
    `,
      Object.assign(prettierConfig, {
        parser: "babel-ts",
      }),
    );

    fs.writeFileSync(reactComponentFile, source, "utf8");
    index.push(`export { default as ${component.name} } from './${tagWithoutPrefix}';`);
  }

  index.push(''); // to make EOF newline
}

loop().then(() => {
  // Generate the index file
  fs.writeFileSync(path.join(reactDir, "index.ts"), index.join("\n"), "utf8");
  console.log("React components generated");
});
