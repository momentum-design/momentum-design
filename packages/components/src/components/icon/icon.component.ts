import { CSSResult, html } from 'lit';
import { property, state } from 'lit/decorators.js';
import styles from './icon.styles';
import { Component } from '../../models';
import providerUtils from '../../utils/provider';
import IconProvider from '../iconprovider/iconprovider.component';
import { dynamicSVGImport } from './icon.utils';
import { DEFAULTS } from './icon.constants';

/**
 * Icon component that dynamically displays SVG icons based on a valid name.
 *
 * This component must be mounted within an `IconProvider` component.
 *
 * The `IconProvider` defines the source URL from which icons are consumed.
 * The `Icon` component accepts a `name` attribute, which corresponds to
 * the file name of the icon to be loaded from the specified URL.
 *
 * Once fetched, the icon will be rendered. If the fetching process is unsuccessful,
 * no icon will be displayed.
 *
 * The `size` attribute allows for dynamic sizing of the icon based on the provided
 * `length-unit` attribute. This unit can either come from the `IconProvider`
 * or can be overridden for each individual icon. For example:
 * if `size = 1` and `length-unit = 'em'`, the dimensions of the icon will be
 * `width: 1em; height: 1em`.
 *
 * Regarding accessibility, there are two types of icons: decorative and informative.
 *
 * ### Decorative Icons
 * - Decorative icons do not convey any essential information to the content of a page.
 * - They should be hidden from screen readers (SR) to prevent confusion for users.
 * - For decorative icons, an `aria-label` is not required, and the `role` will be set to null.
 *
 * ### Informative Icons
 * - Informative icons convey important information that is not adequately represented
 *   by surrounding text or components.
 * - They provide valuable context and must be announced by assistive technologies.
 * - For informative icons, an `aria-label` is required, and the `role` will be set to "img".
 * - If an `aria-label` is provided, the role will be set to 'img'; if it is absent,
 *   the role will be unset.
 *
 * @tagname mdc-icon
 *
 * @cssproperty --mdc-icon-fill-color - Allows customization of the default fill color.
 */
class Icon extends Component {
  @state()
  private iconData?: HTMLElement;

  @state()
  private lengthUnitFromContext?: string;

  @state()
  private sizeFromContext?: number;

  /**
   * Name of the icon (= filename)
   */
  @property({ type: String, reflect: true })
  name?: string = DEFAULTS.NAME;

  /**
   * Size of the icon (works in combination with length unit)
   */
  @property({ type: Number })
  size?: number;

  /**
   * Length unit attribute for overriding length-unit from `IconProvider`
   */
  @property({ type: String, attribute: 'length-unit' })
  lengthUnit?: string;

  /**
   * Aria-label attribute to be set for accessibility
   */
  @property({ type: String, attribute: 'aria-label' })
  override ariaLabel: string | null = null;

  private readonly iconProviderContext = providerUtils.consume({ host: this, context: IconProvider.Context });

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
        this.setAriaHiddenOnIcon();
      }
    }
  }

  /**
   * Updates the size by setting the width and height
   */
  private updateSize() {
    if (this.computedIconSize && (this.lengthUnit || this.lengthUnitFromContext)) {
      const value = `${this.computedIconSize}${this.lengthUnit ?? this.lengthUnitFromContext}`;
      this.style.width = value;
      this.style.height = value;
    }
  }

  private setRoleOnIcon() {
    this.role = this.ariaLabel ? 'img' : null;
  }

  private setAriaHiddenOnIcon() {
    // set aria-hidden=true for SVG to avoid screen readers
    this.iconData?.setAttribute('aria-hidden', 'true');
  }

  private setAriaLabelOnIcon() {
    if (this.ariaLabel) {
      // pass through aria-label attribute to svg if set on mdc-icon
      this.iconData?.setAttribute('aria-label', this.ariaLabel);
    } else {
      this.iconData?.removeAttribute('aria-label');
    }
  }

  private get computedIconSize() {
    return this.size ?? this.sizeFromContext ?? DEFAULTS.SIZE;
  }

  override updated(changedProperties: Map<string, any>) {
    super.updated(changedProperties);

    if (changedProperties.has('name')) {
      // fetch icon data if name changes:
      this.getIconData().catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
      });
    }

    if (changedProperties.has('ariaLabel')) {
      this.setRoleOnIcon();
      this.setAriaLabelOnIcon();
    }

    if (changedProperties.has('size') || changedProperties.has('lengthUnit')) {
      this.updateSize();
    }

    if (this.lengthUnitFromContext !== this.iconProviderContext.value?.lengthUnit) {
      this.lengthUnitFromContext = this.iconProviderContext.value?.lengthUnit;
      this.updateSize();
    }

    if (this.sizeFromContext !== this.iconProviderContext.value?.size) {
      this.sizeFromContext = this.iconProviderContext.value?.size;
      this.updateSize();
    }
  }

  override render() {
    return html` ${this.iconData} `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Icon;
