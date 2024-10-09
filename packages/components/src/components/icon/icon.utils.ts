/* eslint-disable implicit-arrow-linebreak */

const dynamicSVGImport = async (url: string, name: string, fileExtension: string): Promise<Element> => {
  const response = await fetch(`${url}/${name}.${fileExtension}`);

  if (!response.ok) {
    throw new Error('There was a problem while fetching the icon!');
  }

  const iconResponse = await response.text();
  return new DOMParser().parseFromString(iconResponse, 'text/html').body.children[0];
};

export { dynamicSVGImport };
