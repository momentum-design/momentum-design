const normaliseObject = (object: Record<string, string> | null): Record<string, string> => {
  if (!object) {
    return {};
  }

  return Object.keys(object).reduce((acc: Record<string, string>, key) => {
    const lowerCaseKey = key.toLowerCase();
    const lowerCaseValue = object[key].toLowerCase();
    acc[lowerCaseKey] = lowerCaseValue;
    return acc;
  }, {});
};

export { normaliseObject };
