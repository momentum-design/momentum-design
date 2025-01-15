import { html } from 'lit';
import { themes } from '../themes';
import '../../../src/components/themeprovider';
import '../themes/themes.css';

const clearStyles = element => {
  // eslint-disable-next-line no-restricted-syntax
  for (const theme of themes) {
    element.classList.remove(theme.className);
  }
};

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

export const withThemeProvider = (story, context) => {
  const currentTheme = context.globals.theme;
  const themeObject = themes.find(theme => theme.displayName === currentTheme);

  // this body override is necessary cause the themeprovider is not available on the body
  const body = document.querySelector('body.sb-show-main');
  clearStyles(body);
  applyStyle(body, themeObject.className);
  applyStyle(body, 'mds-typography');
  applyStyle(body, 'mds-elevation');

  // This will set the all canvas in "Docs" with the current theme background color
  setCanvasBackgroundOnDocs(themeObject.backgroundColor);

  return html` <mdc-themeprovider id="theme-provider" themeclass="${themeObject.themeclass}">
    ${story()}
  </mdc-themeprovider>`;
};
