import tar from 'tar';

const compress = (path: string): Promise<string> => {
  const gzPath = `${path.split('/').pop()}.tgz`;
  const tarczf = tar.c(
    {
      gzip: true,
      file: gzPath,
    },
    [`${path}`],
  );
  return tarczf.then(() => Promise.resolve(gzPath));
};

export { compress };
