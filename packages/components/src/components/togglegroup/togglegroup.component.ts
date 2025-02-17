import { CSSResult } from 'lit';
import FormfieldGroup from '../formfieldgroup';

/**
 * togglegroup component, which ...
 *
 * @tagname mdc-togglegroup
 *
 * @slot default - This is a default/unnamed slot
 */
class ToggleGroup extends FormfieldGroup {
  public static override styles: Array<CSSResult> = [...FormfieldGroup.styles];
}

export default ToggleGroup;
