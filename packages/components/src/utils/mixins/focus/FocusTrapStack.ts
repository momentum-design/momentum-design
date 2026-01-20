/**
 * FocusTrapStack manages a stack of active focus traps,
 * ensuring only one focus trap is active at a time.
 *
 * This also makes sure there is only one keydown listener active at a time,
 * which is necessary to handle focus trapping correctly.
 *
 * Handling iFrames is supported, as long as there are focusable elements around the iFrame.
 * Otherwise it will not work as expected.
 */
export class FocusTrapStack {
  private static stack: Set<any> = new Set();

  static get stackArray() {
    return Array.from(this.stack);
  }

  static getActiveTrap() {
    return this.stackArray.at(-1);
  }

  private static currentKeydownListener: ((event: KeyboardEvent) => void) | null = null;

  private static addKeydownListener(keydownListener: (event: KeyboardEvent) => void) {
    this.currentKeydownListener = keydownListener;
    document.addEventListener('keydown', keydownListener);
  }

  private static removeKeydownListener() {
    if (this.currentKeydownListener) {
      document.removeEventListener('keydown', this.currentKeydownListener);
    }
  }

  /**
   * Activates a focus trap by adding it to the stack.
   * It deactivates all other traps in the stack to ensure only one trap is active
   *
   * @param trap - The focus trap to activate.
   */
  static activate(trap: any) {
    // Deactivate all other traps
    this.stackArray.forEach(activeTrap => {
      if (activeTrap !== trap) {
        activeTrap.setIsFocusTrapActivated(false);
      }
    });
    this.stack.add(trap);

    // remove the current keydown listener if it exists
    // and add a new one for the current trap
    this.removeKeydownListener();
    this.addKeydownListener(trap.handleTabKeydown.bind(trap));
  }

  /**
   * Deactivates a focus trap by removing it from the stack.
   * Activates the previous trap in the stack if any.
   *
   * @param trap - The focus trap to deactivate.
   */
  static deactivate(trap: any) {
    if (!this.stack.has(trap)) {
      return;
    }

    this.stack.delete(trap);
    this.removeKeydownListener();

    // activate the previous trap in the stack if any
    if (this.stack.size > 0) {
      const lastTrap = this.stackArray.pop();
      if (lastTrap) {
        lastTrap.setIsFocusTrapActivated(true);
        this.addKeydownListener(lastTrap.handleTabKeydown.bind(lastTrap));
      }
    }
  }
}
