import { Provider } from '../../models';
import type Text from '../text/text.component';

import type { ContextType } from './overflowobserver.types';
import OverflowObserverContext from './overflowobserver.context';

/**
 * overflowobserver component provides a context for observing text elements for overflow using ResizeObserver.
 *
 * @tagname mdc-overflowobserver
 *
 * @slot default - This is a default/unnamed slot.
 */
class OverflowObserver extends Provider<ContextType> {
  /**
   * The ResizeObserver instance used to monitor text elements for overflow.
   *
   * @internal
   */
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

  /**
   * Observes a text element for overflow changes.
   * This method is provided to the context for use by child components.
   * @param element - The text element to stop observing.
   * @internal
   */
  private observeResizeForOverflow(element: Text) {
    this.resizeObserver.observe(element);
  }

  /**
   * Unobserves a text element for overflow changes.
   * This method is provided to the context for use by child components.
   * @param element - The text element to stop observing.
   * @internal
   */
  private unobserveResizeForOverflow(element: Text) {
    this.resizeObserver.unobserve(element);
    this.removeAttributesFromElement(element);
  }

  /**
   * Callback invoked by the ResizeObserver when observed elements are resized.
   * @param entries - The array of ResizeObserverEntry objects representing the resized elements.
   * @internal
   */
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

  /**
   * Removes the attributes added to an element when it loses focus.
   * @param event - The blur event.
   * @internal
   */
  private handleBlur = (event: FocusEvent) => {
    const target = event.target as Text;

    this.removeAttributesFromElement(target);
  };

  /**
   * Adds attributes to an element to make it focusable when it is overflowing.
   * @param element - The text element that is overflowing.
   * @internal
   */
  private addAttributesToElement = (element: Text) => {
    element.removeEventListener('blur', this.handleBlur);

    // Don't override an existing tabindex or if we have already marked it as overflowing
    if (element.hasAttribute('tabindex') || element.hasAttribute('data-overflowing')) {
      return;
    }

    element.setAttribute('tabindex', '0');
    element.setAttribute('data-overflowing', 'true');
  };

  /**
   * Removes attributes from an element when it is no longer overflowing.
   * If the element is focused, it defers removal until blur to avoid losing focus unexpectedly.
   * @param element - The text element that is no longer overflowing.
   * @internal
   */
  private removeAttributesFromElement = (element: Text) => {
    if (!element.hasAttribute('data-overflowing')) {
      return;
    }

    const { activeElement } = document;

    if (activeElement === element) {
      element.addEventListener('blur', this.handleBlur, { once: true });
    } else {
      element.removeAttribute('data-overflowing');
      element.removeAttribute('tabindex');
    }
  };

  /**
   * We have no updates to do on every render, therefore this is a NO-OP.
   * @internal
   */
  protected override updateContext(): void {
    // NO-OP
  }
}

export default OverflowObserver;
