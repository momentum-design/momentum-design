function makeToken(
  name: string,
  type: string,
  originalValue: string,
  resolvedValue: string,
  extra: Record<string, unknown> = {},
) {
  return {
    path: ['animation', name],
    value: resolvedValue,
    original: { type, value: originalValue, ...extra },
  };
}

const MOTION_PRIMITIVE_TOKENS = [
  { path: ['motion', 'duration', 'instant'], value: '100ms', original: { value: '100ms' } },
  { path: ['motion', 'duration', 'fast'], value: '200ms', original: { value: '200ms' } },
  { path: ['motion', 'duration', 'slow'], value: '500ms', original: { value: '500ms' } },
  { path: ['motion', 'easing', 'standard'], value: 'cubic-bezier(0.4, 0, 0.2, 1)', original: { value: 'cubic-bezier(0.4, 0, 0.2, 1)' } }, // eslint-disable-line max-len
  { path: ['motion', 'easing', 'linear'], value: 'linear', original: { value: 'linear' } },
  { path: ['motion', 'delay', 'none'], value: '0ms', original: { value: '0ms' } },
];

function makeDictionary(tokens: ReturnType<typeof makeToken>[]) {
  return { allTokens: [...MOTION_PRIMITIVE_TOKENS, ...tokens] };
}

export { makeToken, MOTION_PRIMITIVE_TOKENS, makeDictionary };
