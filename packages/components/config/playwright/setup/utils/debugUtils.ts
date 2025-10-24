import { Page } from '@playwright/test';

export class DebugUtils {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Logs the currently active element on the page to the console.
   * It logs the css path of the active element.
   *
   * Pass result to `document.QuerySelector` to get the element in Playwright trace.
   */
  async logActiveElement() {
    const activeElement = await this.page.evaluate(() => {
      // https://stackoverflow.com/a/31281201
      function getDomPath(target: any) {
        let el = target;
        const stack = [];
        let isShadow = false;
        while (el.parentNode != null) {
          // console.log(el.nodeName);
          let sibCount = 0;
          let sibIndex = 0;
          // get sibling indexes
          for (let i = 0; i < el.parentNode.childNodes.length; i += 1) {
            const sib = el.parentNode.childNodes[i];
            if (sib.nodeName === el.nodeName) {
              if (sib === el) {
                sibIndex = sibCount;
              }
              sibCount += 1;
            }
          }
          // if ( el.hasAttribute('id') && el.id != '' ) { no id shortcuts, ids are not unique in shadowDom
          //   stack.unshift(el.nodeName.toLowerCase() + '#' + el.id);
          // } else
          let nodeName = el.nodeName.toLowerCase();
          if (isShadow) {
            nodeName += '::shadow';
            isShadow = false;
          }
          if (sibCount > 1) {
            stack.unshift(`${nodeName}:nth-of-type(${sibIndex + 1})`);
          } else {
            stack.unshift(nodeName);
          }
          el = el.parentNode;
          if (el.nodeType === 11) {
            // for shadow dom, we
            isShadow = true;
            el = el.host;
          }
        }
        stack.splice(0, 1); // removes the html element
        return stack.join(' > ');
      }

      return getDomPath(document.activeElement);
    });
    console.log(activeElement);
  }
}
