/* eslint-disable implicit-arrow-linebreak */

const dynamicSVGImport = async (url: string, name: string, fileExtension: string): Promise<Element> =>
  fetch(`${url}/${name}.${fileExtension}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('There was a problem while fetching the icon!');
      }
      return response.text();
    })
    .then((iconResponse) => new DOMParser().parseFromString(iconResponse, 'text/html').body.children[0]);

export { dynamicSVGImport };
