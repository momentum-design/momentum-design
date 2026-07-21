// AI-Assisted
interface Events {
  /** Fired when the focus trap is activated (React: onFocusTrapActivated) */
  onFocusTrapActivated: Event;
  /** Fired when the focus trap is deactivated (React: onFocusTrapDeactivated) */
  onFocusTrapDeactivated: Event;
}

declare global {
  interface GlobalEventHandlersEventMap {
    focustrapactivated: Event;
    focustrapdeactivated: Event;
  }
}

export type { Events };
// End AI-Assisted
