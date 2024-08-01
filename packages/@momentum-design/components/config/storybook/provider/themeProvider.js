import { html } from 'lit';
import { themes } from '../themes';
import '../themes/themes.css';

const clearStyles = (element) => {
  // eslint-disable-next-line no-restricted-syntax
  for (const theme of themes) {
    element.classList.remove(theme.className);
  }
};

const applyStyle = (element, className) => {
  element.classList.add(className);
};

export const withThemeProvider = (story, context) => {
  const currentTheme = context.globals.theme;
  const themeObject = themes.find((theme) => theme.displayName === currentTheme);

  const body = document.querySelector('body.sb-show-main');
  clearStyles(body);
  applyStyle(body, themeObject.className);

  return html`<mdc-themeprovider
      id="theme-provider"
      theme="${themeObject.name}"
      themes="mds-theme-stable-darkWebex mds-theme-stable-lightWebex"
    >
      ${story()}
    </mdc-themeprovider>`;
};
