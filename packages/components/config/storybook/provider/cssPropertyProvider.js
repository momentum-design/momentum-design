import { html } from 'lit';

export const withCssPropertyProvider = cssProperties => (story, context) => {
  // filter every key value pair of context.args that is not in cssProperties
  const filteredArgs = Object.fromEntries(
    Object.entries(context.args).filter(([key, value]) => cssProperties.includes(key) && value.length > 0),
  );

  // create a unique class name based on filteredArgs
  const className = `css-property-provider-${context.id}`;

  // create a style element with the css properties for the class
  const styleContent = `
        .${className} ${context.component} {
            ${Object.entries(filteredArgs)
              .map(([key, value]) => `${key}: ${value} !important;`)
              .join('\n')}
        }
    `;

  // inject the style tag into the document head if it doesn't already exist
  if (!document.getElementById(className)) {
    const style = document.createElement('style');
    style.id = className;
    style.textContent = styleContent;
    document.head.appendChild(style);
  } else {
    // if the style tag already exists, update its content
    const style = document.getElementById(className);
    style.textContent = styleContent;
  }

  return html`<div class=${className} style="display: contents;">${story()}</div>`;
};
