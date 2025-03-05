export const remToPx = (remValue: number): number => {
  // @ts-ignore : (open issue: https://github.com/microsoft/TypeScript/issues/59968)
  const rootFontSize = parseInt(window.getComputedStyle(document.documentElement)['font-size'], 10);
  return rootFontSize * remValue;
};
