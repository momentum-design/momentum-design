import { CSSResult } from 'lit';
import FormFieldGroup from '../formfieldgroup/formfieldgroup.component';

/**
 * `mdc-checkboxgroup` component allows you to select multiple options from a predefined list.
 * It is commonly used in forms where multiple selections are required, such as preferences, filters, or categories.
 *
 * A checkbox group typically consists of multiple checkboxes grouped together,
 * each representing a selectable option. You can check or uncheck options based on their preferences.
 *
 * @tagname mdc-checkboxgroup
 *
 * @slot default - This is a default slot for children.
 */
class Checkboxgroup extends FormFieldGroup {
  public static override styles: Array<CSSResult> = [...FormFieldGroup.styles];
}

export default Checkboxgroup;
