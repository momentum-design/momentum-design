import { LitElement } from 'lit';

export abstract class FocusTrapClass extends LitElement {
  protected deactivateFocusTrap?(): void;

  protected setFocusableElements?(): void;

  protected setInitialFocus?(): void;
}
