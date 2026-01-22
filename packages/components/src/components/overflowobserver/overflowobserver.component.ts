import { Provider } from '../../models';
import type Text from '../text/text.component';

import type { ContextType } from './overflowobserver.types';
import OverflowObserverContext from './overflowobserver.context';

/**
 * overflowobserver component, which ...
 *
 * @tagname mdc-overflowobserver
 *
 * @slot default - This is a default/unnamed slot
 */
class OverflowObserver extends Provider<ContextType> {
  private resizeObserver: ResizeObserver;

  constructor() {
    super({
      context: OverflowObserver.Context,
    });

    this.context.setValue({
      observeResizeForOverflow: this.observeResizeForOverflow.bind(this),
      unobserveResizeForOverflow: this.unobserveResizeForOverflow.bind(this),
    });

    this.resizeObserver = new ResizeObserver(this.observerCallback);
  }

  public static get Context() {
    return OverflowObserverContext;
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();

    this.resizeObserver.disconnect();
  }

  private observeResizeForOverflow(element: Text) {
    this.resizeObserver.observe(element);
  }

  private unobserveResizeForOverflow(element: Text) {
    this.resizeObserver.unobserve(element);
    this.removeAttributesFromElement(element);
  }

  private observerCallback = (entries: ResizeObserverEntry[]) => {
    for (const entry of entries) {
      const textElement = entry.target as Text;

      if (textElement.isWidthOverflowing()) {
        this.addAttributesToElement(textElement);
      } else {
        this.removeAttributesFromElement(textElement);
      }
    }
  };

  private handleBlur = (event: FocusEvent) => {
    const target = event.target as Text;

    this.removeAttributesFromElement(target);
    target.removeEventListener('blur', this.handleBlur);
  };

  private addAttributesToElement = (element: Text) => {
    element.removeEventListener('blur', this.handleBlur);

    // Don't override an existing tabindex or if we have already marked it as overflowing
    if (element.hasAttribute('tabindex') || element.hasAttribute('data-overflowing')) {
      return;
    }

    element.setAttribute('tabindex', '0');
    element.setAttribute('data-overflowing', 'true');
  };

  private removeAttributesFromElement = (element: Text) => {
    if (!element.hasAttribute('data-overflowing')) {
      return;
    }

    const { activeElement } = document;

    if (activeElement === element) {
      element.addEventListener('blur', this.handleBlur);
    } else {
      element.removeAttribute('data-overflowing');
      element.removeAttribute('tabindex');
    }
  };

  protected override updateContext(): void {
    // NO-OP
  }
}

export default OverflowObserver;
