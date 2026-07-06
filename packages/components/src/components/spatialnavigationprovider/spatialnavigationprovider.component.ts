import { property } from 'lit/decorators.js';

import { Provider } from '../../models';
import { findFocusable, getDomActiveElement, getHostComposePath, getScrollableAxis } from '../../utils/dom';
import { FocusTrapStack } from '../../utils/mixins/focus/FocusTrapStack';

import SpatialNavigationProviderContext from './spatialnavigationprovider.context';
import {
  Direction,
  ShortestDistanceWeights,
  SpatialNavigationContextValue,
  SpatialNavigationActionToKeyMap,
  SpatialNavigationKeyToActionMap,
} from './spatialnavigationprovider.types';
import { DATA_ATTRIBUTES, DEFAULTS } from './spatialnavigationprovider.constants';
import { orderElementsByDistance } from './spatialnavigationprovider.utils';
import { SpatialNavigationEvent } from './spatialnavigationprovider.events';

/**
 * @tagname mdc-spatialnavigationprovider
 * @event navbeforeprocess - (React: onNavBeforeProcess) This event dispatched before spatial navigation process any key event.
 *                           It can be canceled to prevent any action from spatial navigation, e.g.: back, click or calculating the next candidate.
 * @event navbeforefocus - (React: onNavBeforeFocus) This event is dispatched before the focus is changing to the next element.
 *                         It can be canceled to prevent the focus change. @see https://www.w3.org/TR/css-nav-1/#event-type-navbeforefocus
 * @event navback - (React: onNavBack) This event dispatched a back navigation triggered by the user.
 *                  The event's detail contains the goBackElement if any. It is cancelable to prevent click
 *                  action on the goBackElement.
 * @event navnotarget - (React: onNavNoTarget) This event is dispatched when there is no target to focus in the current focus area and
 *                      in the given direction .
 *
 */
class SpatialNavigationProvider extends Provider<SpatialNavigationContextValue> {
  /**
   * Key mapping for spatial navigation actions
   * It is possible to map left/right/up/down/enter/escape actions to any valid key
   * @see [KeyboardEvent: key property](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key)
   *
   * Some devices might have different key names for the same physical key, for example "GoBack" key on some remotes.
   *
   * By default, the following key mapping is used:
   * - up: "ArrowUp"
   * - down: "ArrowDown"
   * - left: "ArrowLeft"
   * - right: "ArrowRight"
   * - enter: "Enter"
   * - escape: "Escape"
   */
  @property({ attribute: false })
  public navigationKeyMapping: SpatialNavigationActionToKeyMap = DEFAULTS.SPATIAL_NAVIGATION_KEY_MAPPING;

  /**
   * Weights used in the distance calculation algorithm
   * @see https://www.w3.org/TR/css-nav-1/#find-the-shortest-distance
   */
  @property({ attribute: false })
  public distanceCalculationWeights: ShortestDistanceWeights = DEFAULTS.WEIGHTS;

  /**
   * Root element
   * @internal
   */
  private root: HTMLElement = this;

  /**
   * Currently focused element
   * Use WeakRef to avoid memory leaks
   * @internal
   */
  private activeElement: undefined | WeakRef<HTMLElement>;

  /**
   * Observer to track the active element changes.
   * @internal
   */
  private activeElementObserver!: MutationObserver;

  /**
   * Storey the initial history length to avoid going back beyond the provider initialization point
   * @internal
   */
  private readonly initialHistoryLength = window.history.length;

  /**
   * List of navigation keys
   */
  isNavigationKey(key: string): boolean {
    return [
      this.navigationKeyMapping.up,
      this.navigationKeyMapping.down,
      this.navigationKeyMapping.left,
      this.navigationKeyMapping.right,
      this.navigationKeyMapping.enter,
      this.navigationKeyMapping.escape,
    ].includes(key);
  }

  /**
   * List of navigation keys
   */
  isDirectionKey(key: string): boolean {
    return [
      this.navigationKeyMapping.up,
      this.navigationKeyMapping.down,
      this.navigationKeyMapping.left,
      this.navigationKeyMapping.right,
    ].includes(key);
  }

  constructor() {
    // initialize the context by running the Provider constructor:
    super({
      context: SpatialNavigationProviderContext,
    });
    this.activeElementObserver = new MutationObserver(this.activeElementObserverCallback);
  }

  override connectedCallback() {
    super.connectedCallback();

    document.addEventListener('keydown', this.handleKeyDownCapture, { capture: true });
    document.addEventListener('keydown', this.handleKeyDown);
    document.addEventListener('focus', this.handleFocus);
    this.initActiveElement();
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('keydown', this.handleKeyDownCapture, { capture: true });
    document.removeEventListener('keydown', this.handleKeyDown);
    document.removeEventListener('focus', this.handleFocus);

    this.activeElement = undefined;
    this.activeElementObserver.disconnect();
  }

  /**
   * Context object of the ControlTypeProvider, to be consumed by child components
   */
  public static get Context() {
    return SpatialNavigationProviderContext;
  }

  protected override updateContext(): void {
    const { actionToKeyMap } = this.context.value || {};
    if (
      !actionToKeyMap ||
      actionToKeyMap.left !== this.navigationKeyMapping.left ||
      actionToKeyMap.right !== this.navigationKeyMapping.right ||
      actionToKeyMap.up !== this.navigationKeyMapping.up ||
      actionToKeyMap.down !== this.navigationKeyMapping.down ||
      actionToKeyMap.enter !== this.navigationKeyMapping.enter ||
      actionToKeyMap.escape !== this.navigationKeyMapping.escape
    ) {
      this.context.value = {
        actionToKeyMap: { ...this.navigationKeyMapping },
        keyToActionMap: Object.fromEntries(
          Object.entries(this.navigationKeyMapping).map(([action, key]) => [key, action]),
        ) as SpatialNavigationKeyToActionMap,
      };

      this.context.updateObservers();
    }
  }

  /**
   * Initialize the spatial navigation.
   * @internal
   */
  private initActiveElement(nextActiveElement?: HTMLElement): void {
    const elements = findFocusable(this.root);
    this.findActiveElement(elements, nextActiveElement);
  }

  /**
   * Update the list of the focusable elements in the app.
   * @internal
   */
  private findActiveElement(elements: HTMLElement[], currentActiveElement?: HTMLElement): void {
    if (!currentActiveElement || !elements.includes(currentActiveElement)) {
      const nextActiveElement = elements[0];
      if (nextActiveElement) {
        this.setActiveElementAndFocus(nextActiveElement);
      }
    }
  }

  /**
   * Focus the next element in the given direction.
   *
   * @param event - Keyboard event
   * @param direction - User pressed arrow key.
   * @returns true when focus handled by the provider, false otherwise
   * @internal
   */
  private focusNext(event: Event, direction: Direction): boolean {
    const activeTrap = FocusTrapStack.getActiveTrap();
    let checkedFocusArea: HTMLElement | null = null;
    const focusableElements = [];

    let path = event.composedPath() as HTMLElement[];
    // In case the event triggered outside this provider (e.g.: body, etc.)
    path = path.includes(this.root) ? path : [this.root];
    // Walk through the composed path to find the focus areas (scrollable or focus trap)
    for (const el of path) {
      if (el === activeTrap || el === this.root || getScrollableAxis(el)) {
        // Find focusable elements within the current focus area (excluding the already checked focus areas)
        focusableElements.push(
          ...findFocusable(el, {
            excludedElements: checkedFocusArea ? [checkedFocusArea] : undefined,
            includeSelectors: [`[${DATA_ATTRIBUTES.FOCUSABLE}]`],
            excludeSelectors: [`[${DATA_ATTRIBUTES.EXCLUDE}]`],
          }),
        );
        const result = this.focusNextInFocusableAria(focusableElements, direction);
        // If there is a focusable element found, or reached the active trap or the root, stop searching
        if (result || el === activeTrap || el === this.root) {
          if (result) this.emitNavBeforeFocusEvent(result, direction);
          return !!result;
        }
        checkedFocusArea = el;
      }
    }
    return false;
  }

  /**
   * Emit navbeforefocus event
   *
   * @param focusCandidate - The element that will be focused
   * @param direction - navigation direction
   * @returns true when focus changed, false otherwise
   * @internal
   */
  private emitNavBeforeFocusEvent(focusCandidate: HTMLElement, direction: Direction): boolean {
    if (focusCandidate) {
      const focusEvent = new SpatialNavigationEvent('navbeforefocus', focusCandidate, direction);
      this.getActiveElement()?.dispatchEvent(focusEvent);
      if (!focusEvent.defaultPrevented) {
        this.setActiveElementAndFocus(focusCandidate);
        return true;
      }
    }
    return false;
  }

  /**
   * Check if the current active element has instruction to find the next focusable
   * We look for the element in all the shadow DOMs in the composed path of the active element,
   * so mdc component can use this feature as well.
   *
   * @param currentDomActiveElement - The current active element in the DOM
   * @param direction - Direction
   */
  private getElementSelectorForDirectionAttr(
    currentDomActiveElement: HTMLElement | null,
    direction: Direction,
  ): string | undefined {
    const dataAttrName = `data-spatial-${direction}`;

    return currentDomActiveElement?.getAttribute(dataAttrName) ?? undefined;
  }

  /**
   * Focus the next element in the given direction.
   *
   * @param elements - List of focusable elements
   * @param direction - User pressed arrow key.
   * @returns true when focus handled by the provider, false otherwise
   * @internal
   */
  private focusNextInFocusableAria(elements: HTMLElement[], direction: Direction): HTMLElement | undefined {
    let currentActiveElement = this.getActiveElement();
    const currentDomActiveElement = getDomActiveElement() as HTMLElement | null;
    let focusableElements = elements;

    // Sync current active element if necessary
    // It can be out of sync when:
    // - the component handled the navigation (programmatically focused another element), so DOM active element is different
    // - focus fallback to body or other non-focusable element
    if (
      !currentActiveElement ||
      !focusableElements.includes(currentActiveElement) ||
      currentActiveElement !== currentDomActiveElement
    ) {
      if (currentDomActiveElement && focusableElements.includes(currentDomActiveElement)) {
        currentActiveElement = currentDomActiveElement;
      } else {
        [currentActiveElement] = focusableElements;
      }
      this.setActiveElement(currentActiveElement);
    }

    // Check if the current active element has instruction to find the next focusable
    // We look for the element in all the shadow DOMs in the composed path of the active element,
    // so mdc component can use this feature as well.
    if (currentDomActiveElement) {
      const dataAttrName = `data-spatial-${direction}`;
      const elementWithDataset = getHostComposePath(currentDomActiveElement).find(node =>
        node.hasAttribute(dataAttrName),
      );
      const nextElementSelector = elementWithDataset?.getAttribute(dataAttrName);

      if (elementWithDataset && nextElementSelector) {
        const root = elementWithDataset.getRootNode() as Document | ShadowRoot;
        const nextElement = root?.getElementById(nextElementSelector) ?? root?.querySelector(nextElementSelector);

        if (nextElement) {
          const focusableAroundNextElement = findFocusable(nextElement, {
            includeSelectors: [`[${DATA_ATTRIBUTES.FOCUSABLE}]`],
            excludeSelectors: [`[${DATA_ATTRIBUTES.EXCLUDE}]`],
          });
          const isNextElementFocusable = focusableAroundNextElement.includes(nextElement);

          // Use nextElement if it focusable
          if (isNextElementFocusable) return nextElement;

          // Fall back to the distance-based navigation but search within the targeted element subtree only.
          if (focusableAroundNextElement.length > 0) {
            focusableElements = focusableAroundNextElement;
          } else {
            // Focus it anyway
            return nextElement;
          }
        }
      }
    }

    // If DOM active element is not in the focus area then move focus back to the current active element
    if (currentActiveElement !== getDomActiveElement()) {
      return currentActiveElement;
    }

    // Do nothing when there is no focusable element
    if (elements.length === 0) {
      return undefined;
    }

    // Find the closest element in the given direction
    const results = orderElementsByDistance(
      currentActiveElement,
      focusableElements,
      direction,
      this.distanceCalculationWeights,
    );
    return results[0]?.candidate;
  }

  /**
   * Emit navigation back event
   *
   * @param goBackElement - The element that will be clicked on go back action
   * @internal
   */
  private emitGoBackEvent(goBackElement: undefined | HTMLElement): boolean {
    const goBackEvent = new SpatialNavigationEvent('navback', goBackElement as EventTarget, 'escape');
    this.dispatchEvent(goBackEvent);

    return goBackEvent.defaultPrevented;
  }

  /**
   * Set the active element.
   *
   * Also, set up MutationObserver to track the element removal from the DOM.
   *
   * @param element - New active element
   * @internal
   */
  private setActiveElement(element: HTMLElement): void {
    if (element === this.activeElement?.deref()) return;

    this.activeElementObserver.disconnect();
    if (element) {
      this.activeElement = new WeakRef(element);
      if (element.parentNode) {
        this.activeElementObserver.observe(element.parentNode, { childList: true });
      }
    } else {
      this.activeElement = undefined;
    }
  }

  /**
   * Set the active element and call .focus() on it
   *
   * @param element - New active element
   * @internal
   */
  private setActiveElementAndFocus(element: HTMLElement): void {
    this.setActiveElement(element);
    // Focus the element asynchronously to make sure all calculations are done before focusing
    queueMicrotask(() => element.focus());
  }

  /**
   * Get active (focused) element
   * @internal
   */
  private getActiveElement(): HTMLElement | undefined {
    return this.activeElement?.deref();
  }

  private handleKeyDownCapture = (evt: KeyboardEvent) => {
    if (evt.shiftKey || evt.ctrlKey || evt.altKey || evt.metaKey || !this.isNavigationKey(evt.key)) {
      return;
    }
    let eventHandled = false;
    const target = evt.target as HTMLElement;
    const action = this.context.value!.keyToActionMap[evt.key];
    if (
      this.isDirectionKey(evt.key) &&
      this.getElementSelectorForDirectionAttr(target as HTMLElement, action as Direction) !== undefined
    ) {
      eventHandled = true;
      this.focusNext(evt, action as Direction);
    }

    // Handle over sized elements inside scrollable area
    if (target.parentElement && !target.hasAttribute(DATA_ATTRIBUTES.NO_SCROLL)) {
      const parent = target.closest(`[${DATA_ATTRIBUTES.SCROLL_PARENT}]`) ?? target.parentElement;

      const targetScrollAxis = getScrollableAxis(parent);
      if (targetScrollAxis) {
        const targetBB = target.getBoundingClientRect();
        const parentBB = parent.getBoundingClientRect();

        // Vertical scrolling
        if (targetScrollAxis === 'vertical' || targetScrollAxis === 'both') {
          if (action === 'up' && targetBB.top < parentBB.top && parent.scrollTop > 0) {
            parent.scrollTo({ top: parent.scrollTop - parentBB.height / 2, behavior: 'auto' });
            eventHandled = true;
          }
          if (
            action === 'down' &&
            targetBB.bottom > parentBB.bottom &&
            parent.scrollTop + parentBB.height < parent.scrollHeight
          ) {
            parent.scrollTo({ top: parent.scrollTop + parentBB.height / 2, behavior: 'auto' });
            eventHandled = true;
          }
        }

        // horizontal scrolling
        if (targetScrollAxis === 'horizontal' || targetScrollAxis === 'both') {
          if (action === 'right' && targetBB.left < parentBB.left && parent.scrollLeft > 0) {
            parent.scrollTo({ left: parent.scrollLeft - parentBB.width / 2, behavior: 'auto' });
            eventHandled = true;
          }

          if (
            action === 'left' &&
            targetBB.right > parentBB.right &&
            parent.scrollLeft + parentBB.width < parent.scrollWidth
          ) {
            parent.scrollTo({ left: parent.scrollLeft + parentBB.width / 2, behavior: 'auto' });
            eventHandled = true;
          }
        }
      }
    }

    if (eventHandled) {
      // prevent native key events
      evt.preventDefault();
      // prevent MDC component key events
      evt.stopImmediatePropagation();
    }
  };

  /**
   * Handle keydown event
   *
   * @param evt - Keyboard event
   * @internal
   */
  private handleKeyDown = (evt: KeyboardEvent) => {
    if (evt.shiftKey || evt.ctrlKey || evt.altKey || evt.metaKey || !this.isNavigationKey(evt.key)) {
      return;
    }
    const action = this.context.value!.keyToActionMap[evt.key];
    const navBeforeProcessEvent = new SpatialNavigationEvent('navbeforeprocess', this, action);
    if (evt.target) {
      (evt.composedPath()[0] || evt.target)?.dispatchEvent(navBeforeProcessEvent);
    }

    if (navBeforeProcessEvent.defaultPrevented) {
      return;
    }

    let keyEventHandled = false;

    switch (action) {
      case 'up':
        keyEventHandled = this.focusNext(evt, 'up');
        break;
      case 'down':
        keyEventHandled = this.focusNext(evt, 'down');
        break;
      case 'left':
        keyEventHandled = this.focusNext(evt, 'left');
        break;
      case 'right':
        keyEventHandled = this.focusNext(evt, 'right');
        break;
      case 'enter':
        keyEventHandled = this.pressEnter();
        break;
      case 'escape':
        keyEventHandled = this.goBack();
        break;
      default:
    }

    if (keyEventHandled) {
      // Prevent default action when the event is handled otherwise leave it to the parent to handle it
      evt.preventDefault();
    } else {
      this.dispatchEvent(new SpatialNavigationEvent('navnotarget', this, action));
    }
  };

  /**
   * Mutation Observer callback
   *
   * When the active element is removed from the DOM, try to find a new active element.
   *
   * @internal
   */
  private activeElementObserverCallback: MutationCallback = (): void => {
    const currentActiveElement = this.getActiveElement();

    if (!currentActiveElement || !currentActiveElement.isConnected) {
      // Do a soft check if the active element is inside the spatial navigation root
      // We want to track active element even when navigation (and dom) is managed by other components
      // e.g.: list, virtualized list, etc.
      if (this.root.contains(document.activeElement)) {
        const activeDomElement = getDomActiveElement() as HTMLElement | null;
        if (activeDomElement) {
          this.setActiveElement(activeDomElement);
        }
      } else {
        // Fallback, try to find a new active element
        this.initActiveElement(currentActiveElement);
      }
    }
  };

  /**
   * Handle focus event
   * @param evt - Focus event
   * @internal
   */
  private handleFocus = (evt: FocusEvent) => {
    this.initActiveElement(evt.target as HTMLElement);
  };

  /**
   * Trigger click on the active element
   *
   * @returns true when click triggered, false otherwise
   */
  public pressEnter() {
    const activeElement = getDomActiveElement();
    if (activeElement instanceof HTMLElement) {
      activeElement.click();
      return true;
    }
    return false;
  }

  /**
   * Handle back action
   *
   * Either trigger click on the goBack element if any otherwise call the default go back handler
   *
   * @returns true when go back handled, false otherwise
   */
  public goBack(): boolean {
    const goBackElement = findFocusable(this.root).find(el => el.hasAttribute(DATA_ATTRIBUTES.GO_BACK));
    const isDefaultPrevented = this.emitGoBackEvent(goBackElement);

    // Skip default behavior when event was prevented by the user
    if (!isDefaultPrevented) {
      if (goBackElement) {
        goBackElement.click();
        return true;
      }

      if (window.history.length > this.initialHistoryLength) {
        window.history.back();
        return true;
      }
    }
    return false;
  }
}

export default SpatialNavigationProvider;
