import { html, nothing } from 'lit';

import { themes, isFluidTheme } from '../themes';

import '../../../src/components/themeprovider';
import '../../../src/styles/glass.css';
import './overrides.css';
import { descriptionBanner, getStoryDescription } from './storyDescription';

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

/**
 * `backdrop-filter` on .glassContainer makes it the containing block for a dialog's `position: fixed`
 * backdrop, which would then stop at the glass box instead of covering the viewport. The backdrop is
 * appended to `dialog.parentElement`, so the dialog has to sit on the canvas before it is shown.
 */
const hoistDialogs = canvas => {
  const glass = canvas.querySelector(':scope > .glassContainer');
  if (!glass) return;

  for (const dialog of glass.querySelectorAll('mdc-dialog')) {
    if (!dialog.parentElement?.closest('mdc-dialog')) canvas.append(dialog);
  }
};

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
  applyStyle(body, 'mds-effect');

  // Mirror the active theme onto <body> so non-story chrome (e.g. the
  // knowledge-base Docs page rendered by `@momentum-design/storybook-addon-docs`)
  // can resolve `--mds-*` tokens.
  syncBodyTheme(themeObject.themeclass);

  // This will set the all canvas in "Docs" with the current theme background color
  setCanvasBackgroundOnDocs(themeObject.backgroundColor);

  const isFluid = isFluidTheme(themeObject.displayName);
  const backgroundClass = isFluid ? 'backgroundImage' : 'backgroundGradient';
  const docs = getStoryDescription(context);
  // Stories that demonstrate glass themselves opt out, so they are not shown on top of more glass.
  const glassContainer = context.parameters?.glassContainer !== false;
  const storyContent = isFluid
    ? html`<div class="fluidCanvas">
        ${docs ? descriptionBanner(docs) : nothing}
        ${glassContainer
          ? html`<div class="glassContainer mdc-glass-border mdc-glass-overlay-background">${story()}</div>`
          : story()}
      </div>`
    : story();

  // Runs after lit has committed this render, so every re-render re-hoists a freshly created dialog.
  if (isFluid) queueMicrotask(() => document.querySelectorAll('.fluidCanvas').forEach(hoistDialogs));

  return html` <mdc-themeprovider id="theme-provider" themeclass="${themeObject.themeclass}">
    <div class="${backgroundClass}">${storyContent}</div>
  </mdc-themeprovider>`;
};
