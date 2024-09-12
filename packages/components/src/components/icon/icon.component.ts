import { html } from 'lit';
import { property, state } from 'lit/decorators.js';
import styles from './icon.styles';
import { Component } from '../../models';
import providerUtils from '../../utils/provider';
import IconProvider from '../iconprovider/iconprovider.component';
import { dynamicSVGImport } from './icon.utils';
import { DEFAULTS } from './icon.constants';

/**
 * Icon component, which has to be mounted inside of a `IconProvider`
 * component.
 *
 * The `IconProvider` component defines where icons should be consumed from (`url`).
 * This `Icon` component accepts the `name` attribute, which will be
 * the file name of the icon to be loaded from the given `url`.
 *
 * Once fetched, the icon will be mounted. If fetching wasn't successful,
 * nothing will be shown.
 *
 * The `scale` attribute allows scaling the icon based on the provided
 * `length-unit` attribute (which will either come from the IconProvider or
 * could be overridden per icon). For example:
 * if `scale = 1` and `length-unit = 'em'`, the size of the icon will be
 * `width: 1em; height: 1em`.
 *
 * For accessibility the `role` and `aria-label` of the icon can be set.
 *
 * @tag mdc-icon
 * @tagname mdc-icon
 */
class Icon extends Component {
  @state()
  private iconData?: HTMLElement;

  @state()
  private lengthUnitFromContext?: string;

  /**
   * Name of the icon (= filename)
   */
  @property({ type: String, reflect: true })
  name?: string = DEFAULTS.NAME;

  /**
   * Scale of the icon (works in combination with length unit)
   */
  @property({ type: Number })
  scale?: number = DEFAULTS.SCALE;

  /**
   * Length unit attribute for overridding length-unit from `IconProvider`
   */
  @property({ type: String, attribute: 'length-unit' })
  lengthUnit?: string;

  /**
   * Role attribute to be set for accessibility
   */
  @property({ type: String })
  override role: string | null = null;

  /**
   * Aria-label attribute to be set for accessibility
   */
  @property({ type: String, attribute: 'aria-label' })
  override ariaLabel: string | null = null;

  private iconProviderContext = providerUtils.consume({ host: this, context: IconProvider.Context });

  /**
   * Get Icon Data function which will fetch the icon (currently only svg)
   * and sets state and attributes once fetched successfully
   */
  private async getIconData() {
    if (this.iconProviderContext.value) {
      const { fileExtension, url } = this.iconProviderContext.value;
      if (url && fileExtension && this.name) {
        const iconHtml = await dynamicSVGImport(url, this.name, fileExtension);

        // update iconData state once fetched:
        this.iconData = iconHtml as HTMLElement;

        // when icon got fetched, set role and aria-label:
        this.setRoleOnIcon();
        this.setAriaLabelOnIcon();
      }
    }
  }

  /**
   * Updates the size by setting the width and height
   */
  private updateSize() {
    if (this.scale && (this.lengthUnit || this.lengthUnitFromContext)) {
      const value = `${this.scale}${this.lengthUnit || this.lengthUnitFromContext}`;
      this.style.width = value;
      this.style.height = value;
    }
  }

  private setRoleOnIcon() {
    if (this.role) {
      // pass through role attribute to svg if set on mdc-icon
      this.iconData?.setAttribute('role', this.role);
    } else {
      this.iconData?.removeAttribute('role');
    }
  }

  private setAriaLabelOnIcon() {
    if (this.ariaLabel) {
      // pass through aria-label attribute to svg if set on mdc-icon
      this.iconData?.setAttribute('aria-label', this.ariaLabel);
    } else {
      this.iconData?.removeAttribute('aria-label');
    }
  }

  override updated(changedProperties: Map<string, any>) {
    super.updated(changedProperties);

    if (changedProperties.has('name')) {
      // fetch icon data if name changes:
      this.getIconData().catch((err) => {
        console.error(err);
      });
    }

    if (changedProperties.has('role')) {
      this.setRoleOnIcon();
    }

    if (changedProperties.has('ariaLabel')) {
      this.setAriaLabelOnIcon();
    }

    if (changedProperties.has('scale') || changedProperties.has('lengthUnit')) {
      this.updateSize();
    }

    if (this.lengthUnitFromContext !== this.iconProviderContext.value?.lengthUnit) {
      this.lengthUnitFromContext = this.iconProviderContext.value?.lengthUnit;
      this.updateSize();
    }
  }

  override render() {
    return html` ${this.iconData} temp`;
  }

  static override styles = styles;
}

export default Icon;
