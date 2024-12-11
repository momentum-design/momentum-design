/* eslint-disable implicit-arrow-linebreak */

/**
 * Fetches a dynamic SVG icon based on the provided `url`, `name` and `fileExtension`.
 * It will throw an error if the response is not ok.
 *
 * @param url - The base url of the icon
 * @param name - The name of the icon
 * @param fileExtension - The file extension of the icon
 * @param signal - The signal to abort the fetch.
 * It is used to cancel the fetch when the component is disconnected or updated.
 * @returns The valid icon element
 * @throws Error if the response is not ok
 */
const dynamicSVGImport = async (
  url: string,
  name: string,
  fileExtension: string,
  signal: AbortSignal,
): Promise<Element> => {
  const response = await fetch(`${url}/${name}.${fileExtension}`, { signal });

  if (!response.ok) {
    throw new Error('There was a problem while fetching the icon!');
  }

  const iconResponse = await response.text();
  const returnValue = new DOMParser().parseFromString(iconResponse, 'text/html').body.children[0];
  returnValue.setAttribute('data-name', name);
  returnValue.setAttribute('part', 'icon');
  return returnValue;
};

export { dynamicSVGImport };
