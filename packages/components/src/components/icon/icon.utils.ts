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
 * @returns Response string from the fetch
 * @throws Error if the response is not ok
 */
const dynamicSVGImport = async (
  url: string,
  name: string,
  fileExtension: string,
  signal: AbortSignal,
): Promise<string> => {
  const response = await fetch(`${url}/${name}.${fileExtension}`, { signal });

  if (!response.ok) {
    throw new Error('There was a problem while fetching the icon!');
  }

  return response.text();
};

export { dynamicSVGImport };
