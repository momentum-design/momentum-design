import { html, nothing } from 'lit';
import type { CSSResult, PropertyValues } from 'lit';

import { ListNavigationMixin } from '../../utils/mixins/ListNavigationMixin';
import { ROLE } from '../../utils/roles';
import type Checkbox from '../checkbox/checkbox.component';
import { TAG_NAME as CHECKBOX_TAG_NAME } from '../checkbox/checkbox.constants';
import FormfieldGroup from '../formfieldgroup/formfieldgroup.component';
import { VALIDATION } from '../formfieldwrapper/formfieldwrapper.constants';

import { TAG_NAME } from './checkboxtree.constants';
import styles from './checkboxtree.styles';

/**
 * @tagname mdc-checkboxtree
 *
 * @dependency mdc-button
 * @dependency mdc-checkbox
 * @dependency mdc-icon
 * @dependency mdc-statusmessage
 * @dependency mdc-text
 * @dependency mdc-toggletip
 *
 * @slot default - Direct `mdc-checkbox` children and nested `mdc-checkboxtree` descendants. A nested tree belongs to the checkbox immediately before it.
 * @slot label - Slot for the visible group label. If omitted, the `label` property is used.
 * @slot toggletip - Slot for the label's information button and toggletip.
 * @slot help-icon - Slot for the helper or validation icon.
 * @slot help-text - Slot for the helper or validation text.
 *
 * @csspart group-header - Container for the outer tree's label and helper text.
 * @csspart label - The outer tree's label.
 * @csspart label-text - Container for the label, required indicator, and information button.
 * @csspart required-indicator - Required indicator displayed next to the label.
 * @csspart info-icon-btn - Information button displayed next to the label.
 * @csspart label-toggletip - Toggletip associated with the information button.
 * @csspart help-text - Helper or validation text.
 * @csspart helper-icon - Helper or validation icon.
 * @csspart help-text-container - Container for helper or validation content.
 *
 * @cssproperty --mdc-checkboxtree-indent - Inline indentation added by each nested tree.
 */
class CheckboxTree extends ListNavigationMixin(FormfieldGroup) {
  /** @internal */
  protected override loop: 'true' | 'false' = 'false';

  /** @internal */
  private managedTabIndexes = new Map<Checkbox, string | null>();

  /**
   * Last roving tab-stop index, retained to choose a fallback after removal.
   * @internal
   */
  private lastActiveIndex = 0;

  /** @internal */
  private generatedAriaLabel?: string;

  /**
   * Consumer aria-label cached while nested and restored when root.
   * @internal
   */
  private explicitAriaLabel?: string;

  private pendingSynchronization = false;

  constructor() {
    super();
    this.addEventListener('change', this.handleCheckboxChange);
    this.addEventListener('modified', this.handleCheckboxModified);
  }

  override connectedCallback(): void {
    if (!this.isNested && this.explicitAriaLabel !== undefined && !this.hasAttribute('aria-label')) {
      this.setAttribute('aria-label', this.explicitAriaLabel);
      this.explicitAriaLabel = undefined;
    }

    const ariaLabelBeforeConnection = this.getAttribute('aria-label');
    super.connectedCallback();
    if (this.generatedAriaLabel === undefined && ariaLabelBeforeConnection === null) {
      this.generatedAriaLabel = this.label ?? '';
    }
    this.synchronizeContext();
    // Reparenting changes isNested without changing a reactive property.
    this.requestUpdate();

    if (!this.isNested) {
      this.synchronizeTree();
    }
  }

  override disconnectedCallback(): void {
    this.releaseManagedTabIndexes();
    super.disconnectedCallback();
  }

  /** @internal */
  private get parentTree(): CheckboxTree | null {
    return this.parentElement?.closest<CheckboxTree>(TAG_NAME) ?? null;
  }

  /** @internal */
  private get rootTree(): CheckboxTree {
    return this.parentTree?.rootTree ?? this;
  }

  /** @internal */
  private get isNested(): boolean {
    return this.parentTree !== null;
  }

  /** @internal */
  protected get navItems(): Checkbox[] {
    if (this.isNested) return [];
    return this.getCheckboxes().filter(checkbox => !checkbox.disabled);
  }

  /** @internal */
  protected override setInitialFocus(): void {
    if (this.isNested) return;
    this.synchronizeTabIndexes();
  }

  protected override resetTabIndexAndSetFocus(
    newIndex: number,
    oldIndex?: number,
    focusNewItem?: boolean,
    scrollToNewItem?: boolean,
  ): boolean {
    const handled = super.resetTabIndexAndSetFocus(newIndex, oldIndex, focusNewItem, scrollToNewItem);
    if (handled) {
      this.lastActiveIndex = newIndex;
    }
    return handled;
  }

  protected override resetTabIndexes(index: number, focusElement?: boolean): void {
    super.resetTabIndexes(index, focusElement);
    if (this.navItems.length > 0) {
      this.lastActiveIndex = this.navItems.at(index) ? index : 0;
    }
  }

  /** @internal */
  private getCheckboxes(): Checkbox[] {
    return Array.from(this.querySelectorAll<Checkbox>(CHECKBOX_TAG_NAME));
  }

  /** @internal */
  private handleSlotChange = (): void => {
    this.rootTree.synchronizeTree();
  };

  /** @internal */
  private handleCheckboxModified = (event: Event): void => {
    if (this.isNested || !(event.target instanceof HTMLElement) || !event.target.matches(CHECKBOX_TAG_NAME)) return;
    this.scheduleSynchronizeTree();
  };

  /** Coalesces checkbox modifications into one full-tree synchronization. @internal */
  private scheduleSynchronizeTree(): void {
    if (this.pendingSynchronization) return;
    this.pendingSynchronization = true;
    queueMicrotask(() => {
      this.pendingSynchronization = false;
      this.synchronizeTree();
    });
  }

  /** @internal */
  private handleCheckboxChange = (event: Event): void => {
    if (this.isNested || !(event.target instanceof HTMLElement) || !event.target.matches(CHECKBOX_TAG_NAME)) return;

    const checkbox = event.target as Checkbox;
    const childTree = this.getChildTree(checkbox);
    if (childTree) {
      this.setDescendantState(childTree, checkbox.checked);
    }

    this.synchronizeParentStates();
  };

  /** @internal */
  private getChildTree(checkbox: Checkbox): CheckboxTree | null {
    const sibling = checkbox.nextElementSibling;
    return sibling?.matches(TAG_NAME) ? (sibling as CheckboxTree) : null;
  }

  /** @internal */
  private getParentCheckbox(tree: CheckboxTree): Checkbox | null {
    const sibling = tree.previousElementSibling;
    return sibling?.matches(CHECKBOX_TAG_NAME) ? (sibling as Checkbox) : null;
  }

  /** @internal */
  private setDescendantState(tree: CheckboxTree, checked: boolean): void {
    tree.getCheckboxes().forEach(checkbox => {
      if (checkbox.disabled || checkbox.readonly || checkbox.softDisabled) return;
      const descendant = checkbox;
      descendant.checked = checked;
      descendant.indeterminate = false;
    });
  }

  /** @internal */
  private synchronizeTree(): void {
    if (this.isNested || !this.isConnected) return;
    this.synchronizeParentStates();
    this.synchronizeTabIndexes();
  }

  /** @internal */
  private synchronizeParentStates(): void {
    const nestedTrees = Array.from(this.querySelectorAll<CheckboxTree>(TAG_NAME)).reverse();

    nestedTrees.forEach(tree => {
      const parentCheckbox = this.getParentCheckbox(tree);
      const descendants = tree.getCheckboxes();
      if (!parentCheckbox || descendants.length === 0) return;

      const allChecked = descendants.every(checkbox => checkbox.checked && !checkbox.indeterminate);
      const anyChecked = descendants.some(checkbox => checkbox.checked || checkbox.indeterminate);

      parentCheckbox.checked = allChecked;
      parentCheckbox.indeterminate = !allChecked && anyChecked;
    });
  }

  /** @internal */
  private synchronizeTabIndexes(): void {
    const checkboxes = this.getCheckboxes();
    const navigableCheckboxes = checkboxes.filter(checkbox => !checkbox.disabled);

    this.managedTabIndexes.forEach((tabIndex, checkbox) => {
      if (checkboxes.includes(checkbox)) return;
      this.restoreTabIndex(checkbox, tabIndex);
      this.managedTabIndexes.delete(checkbox);
    });

    checkboxes.forEach(checkbox => {
      if (!this.managedTabIndexes.has(checkbox)) {
        this.managedTabIndexes.set(checkbox, checkbox.getAttribute('tabindex'));
      }
    });

    const focusedCheckbox = navigableCheckboxes.find(checkbox => checkbox.matches(':focus-within'));
    const currentCheckbox = navigableCheckboxes.find(checkbox => checkbox.getAttribute('tabindex') === '0');
    const neighborCheckbox = navigableCheckboxes[Math.min(this.lastActiveIndex, navigableCheckboxes.length - 1)];
    const activeCheckbox = focusedCheckbox ?? currentCheckbox ?? neighborCheckbox ?? navigableCheckboxes[0];

    if (activeCheckbox) {
      this.lastActiveIndex = navigableCheckboxes.indexOf(activeCheckbox);
    }

    checkboxes.forEach(checkbox => {
      checkbox.setAttribute('tabindex', checkbox === activeCheckbox ? '0' : '-1');
    });
  }

  /** @internal */
  private releaseManagedTabIndexes(): void {
    this.managedTabIndexes.forEach((tabIndex, checkbox) => this.restoreTabIndex(checkbox, tabIndex));
    this.managedTabIndexes.clear();
  }

  /** @internal */
  private restoreTabIndex(checkbox: Checkbox, tabIndex: string | null): void {
    if (tabIndex === null) {
      checkbox.removeAttribute('tabindex');
    } else {
      checkbox.setAttribute('tabindex', tabIndex);
    }
  }

  /** @internal */
  private synchronizeContext(): void {
    if (this.isNested) {
      const currentAriaLabel = this.getAttribute('aria-label');
      if (currentAriaLabel !== null && currentAriaLabel !== this.generatedAriaLabel) {
        this.explicitAriaLabel = currentAriaLabel;
      }
      this.removeAttribute('aria-description');
      this.removeAttribute('aria-invalid');
      this.removeAttribute('aria-label');
      this.removeAttribute('role');
      return;
    }

    this.role = ROLE.GROUP;
    this.ariaDescription = this.helpText ?? '';
    if (this.helpTextType === VALIDATION.ERROR) {
      this.setAttribute('aria-invalid', 'true');
    } else {
      this.removeAttribute('aria-invalid');
    }
  }

  public override update(changedProperties: PropertyValues): void {
    // Capture before FormfieldGroup may regenerate aria-label from label.
    const ariaLabelBeforeUpdate = this.getAttribute('aria-label');
    super.update(changedProperties);
    if (!this.isConnected) {
      // Nesting is unknown while detached; defer label synchronization until reconnection.
      if (ariaLabelBeforeUpdate === null) {
        this.removeAttribute('aria-label');
      } else {
        this.setAttribute('aria-label', ariaLabelBeforeUpdate);
      }
      return;
    }
    if (!this.isNested && (ariaLabelBeforeUpdate === null || ariaLabelBeforeUpdate === this.generatedAriaLabel)) {
      this.generatedAriaLabel = this.label ?? '';
      this.setAttribute('aria-label', this.generatedAriaLabel);
    }
  }

  protected override updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);
    this.synchronizeContext();
  }

  public override render() {
    return html`
      ${this.isNested ? nothing : html`<div part="group-header">${this.renderLabel()} ${this.renderHelperText()}</div>`}
      <slot @slotchange=${this.handleSlotChange}></slot>
    `;
  }

  public static override styles: Array<CSSResult> = [...FormfieldGroup.styles, ...styles];
}

export default CheckboxTree;
