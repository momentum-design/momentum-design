/* eslint-disable implicit-arrow-linebreak */

/**
 * Fetches a dynamic SVG icon based on the provided `url`, `name` and `fileExtension`.
 * It will throw an error if the response is not ok.
 *
 * @param url - The base url of the icon
 * @param name - The name of the icon
 * @param fileExtension - The file extension of the icon
 * @returns The valid icon element
 * @throws Error if the response is not ok
 */
const dynamicSVGImport = async (url: string, name: string, fileExtension: string): Promise<Element> => {
  const response = await fetch(`${url}/${name}.${fileExtension}`);

  if (!response.ok) {
    throw new Error('There was a problem while fetching the icon!');
  }

  const iconResponse = await response.text();
  return new DOMParser().parseFromString(iconResponse, 'text/html').body.children[0];
};

export { dynamicSVGImport };
