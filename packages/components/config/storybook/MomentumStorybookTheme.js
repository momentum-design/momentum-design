import { create } from 'storybook/theming';

export default create({
  base: 'dark',

  // Typography for Manager
  // (can't use Inter here without a lot of workarounds):
  fontBase: 'Helvetica Neue, sans-serif',
  fontCode: 'monospace',

  brandTitle: ' ',

  colorPrimary: '#64b4fa',
  colorSecondary: '#64b4fa',

  // UI
  appBg: '#1a1a1a',
  appContentBg: '#262626',
  appBorderColor: '#ffffff4d',

  // Text colors
  textColor: '#FFFFF2',
  textInverseColor: '#000002',

  // Toolbar default and active colors
  barTextColor: '#FFFFF2',
  barSelectedColor: '#64b4fa',
  barBg: '#262626',

  // Form colors
  inputBg: '#FFFFFF',
  inputBorder: '#ffffffb3',
  inputTextColor: '#000002',

  // Buttons:
  buttonBg: '#FFFFFF',
  buttonBorder: '#ffffffb3',
});
