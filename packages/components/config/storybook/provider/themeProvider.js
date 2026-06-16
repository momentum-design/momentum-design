import { html } from 'lit';

import { themes } from '../themes';
import '../../../src/components/themeprovider';
import './overrides.css';

const applyStyle = (element, className) => {
  element.classList.add(className);
};

const setCanvasBackgroundOnDocs = backgroundColor => {
  const docsBody = document.querySelectorAll('div.docs-story');
  // eslint-disable-next-line no-restricted-syntax
  for (const body of docsBody) {
    body.style.backgroundColor = backgroundColor;
  }
};

const allThemeClasses = themes.map(t => t.themeclass);

const syncBodyTheme = themeClass => {
  const body = document.querySelector('body.sb-show-main');
  if (!body) return;
  for (const cls of allThemeClasses) {
    if (cls !== themeClass) body.classList.remove(cls);
  }
  body.classList.add(themeClass);
};

export const withThemeProvider = (story, context) => {
  const currentTheme = context.globals.theme;
  const themeObject = themes.find(theme => theme.displayName === currentTheme);

  // this body override is necessary cause the themeprovider is not available on the body
  const body = document.querySelector('body.sb-show-main');
  applyStyle(body, 'bodyOverride');
  applyStyle(body, 'mds-typography');
  applyStyle(body, 'mds-elevation');

  // Mirror the active theme onto <body> so non-story chrome (e.g. the
  // knowledge-base Docs page rendered by `@momentum-design/storybook-addon-docs`)
  // can resolve `--mds-*` tokens.
  syncBodyTheme(themeObject.themeclass);

  // This will set the all canvas in "Docs" with the current theme background color
  setCanvasBackgroundOnDocs(themeObject.backgroundColor);

  return html` <mdc-themeprovider id="theme-provider" themeclass="${themeObject.themeclass}">
    <div class="backgroundGradient">${story()}</div>
  </mdc-themeprovider>`;
};
