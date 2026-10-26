import { DepthManager } from '../../controllers/DepthManager';
import { composedContains, getDomActiveElement } from '../../dom';

/**
 * Keeps one eligible trap and one Tab listener active. Managed overlays share
 * DepthManager's layer order; standalone traps retain activation ordering.
 */
export class FocusTrapStack {
  private static stack: Set<any> = new Set();

  private static activeTrap: any;

  static get stackArray() {
    return Array.from(this.stack);
  }

  static getActiveTrap() {
    return this.activeTrap;
  }

  private static currentKeydownListener: ((event: KeyboardEvent) => void) | null = null;

  private static getNextTrap() {
    const layers = DepthManager.getOrderedHosts();
    const eligible = this.stackArray
      .filter(trap => {
        const layer = DepthManager.getContainingHost(trap);
        return !layer || layers.includes(layer);
      })
      .reverse();
    const latest = eligible[0];
    if (!latest || !DepthManager.getContainingHost(latest)) return latest;

    // A standalone trap inside an overlay shares that overlay's layer. Within
    // one layer, the most recently activated (e.g. nested) trap takes precedence.
    return [...layers]
      .reverse()
      .map(layer => eligible.find(trap => DepthManager.getContainingHost(trap) === layer))
      .find(Boolean);
  }

  /** Reevaluate ownership after a managed layer changes, without re-registering traps. */
  static refresh(moveFocus: boolean = false) {
    const previous = this.activeTrap;
    const next = this.getNextTrap();
    if (previous === next) return;

    previous?.setIsFocusTrapActivated(false);
    this.activeTrap = next;
    next?.setIsFocusTrapActivated(true);

    if (this.currentKeydownListener) {
      document.removeEventListener('keydown', this.currentKeydownListener);
      this.currentKeydownListener = null;
    }
    if (next) {
      this.currentKeydownListener = next.handleTabKeydown.bind(next);
      document.addEventListener('keydown', this.currentKeydownListener!);
    }

    if (moveFocus && previous && next && composedContains(previous, getDomActiveElement())) {
      next.setInitialFocus();
    }
  }

  static activate(trap: any) {
    this.stack.delete(trap);
    this.stack.add(trap);
    this.refresh();
  }

  private static getRestoreTarget(next?: HTMLElement, target?: HTMLElement | null): HTMLElement | undefined {
    let current = target;
    let candidate: HTMLElement | undefined;
    const layers = DepthManager.getOrderedHosts();
    const visited = new Set<HTMLElement>();
    // Skip targets inside removed layers. Trigger links lead portaled menu
    // chains back to an available target within the resumed trap.
    while (current && !visited.has(current)) {
      visited.add(current);
      const overlay = DepthManager.getContainingHost(current);
      if (
        !candidate &&
        (!overlay || layers.includes(overlay)) &&
        current.isConnected &&
        current.getClientRects().length
      ) {
        candidate = current;
      }
      if (candidate && (!next || composedContains(next, current))) return candidate;
      if (!overlay?.triggerID) return undefined;
      current = (overlay.getRootNode() as Document | ShadowRoot | Element).querySelector<HTMLElement>(
        `#${CSS.escape(overlay.triggerID)}`,
      );
    }
    return undefined;
  }

  /** Remove a trap; only its focus owner may restore focus into the resumed layer. */
  static deactivate(trap: any, restoreTarget?: HTMLElement | null) {
    const wasActive = this.activeTrap === trap || composedContains(trap, getDomActiveElement());
    this.stack.delete(trap);
    this.refresh();
    if (!wasActive) return;

    const next = this.activeTrap;
    const target = this.getRestoreTarget(next, restoreTarget);
    target?.focus({ preventScroll: true });
    if (next && !composedContains(target || next, getDomActiveElement())) {
      next.setInitialFocus();
    }
  }
}
