const updateObjectByPath = (targetObject: any, path: string, value: any) => {
  const pathSegments = path.split('.');
  let current = targetObject;
  for (let i = 0; i < pathSegments.length - 1; i += 1) {
    const segment = pathSegments[i];
    if (!(segment in current)) {
      current[segment] = {};
    }
    current = current[segment];
  }
  const finalSegment = pathSegments[pathSegments.length - 1];
  current[finalSegment] = value;
};

const updateObjectByPaths = (targetObject: any, paths: string|Array<string>, values: any) => {
  if (typeof paths === 'string') {
    updateObjectByPath(targetObject, paths, values);
  } else if (typeof paths === 'object' && paths.length) {
    paths.forEach((path, index) => {
      updateObjectByPath(targetObject, path, values[index]);
    });
  }
  return targetObject;
};

export { updateObjectByPaths };
