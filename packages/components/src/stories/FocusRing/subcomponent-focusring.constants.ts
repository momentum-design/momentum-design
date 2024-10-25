/* eslint-disable implicit-arrow-linebreak */
import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('subcomponent-focusring');

const DEFAULTS = {
  SHAPE: 'mds-div' as const,
};

const FOCUS_RING_DESCRIPTION = `
  **The Focus Ring provides a visual indication of focus for users navigating via keyboard or mouse.** 
  
  It is comprised of three distinct borders: black, blue, and light blue.

  When the shared styles of the Focus Ring are applied to a component, that component in its focus state will automatically have the focus ring wrap around every form (like rounded corners, edges, etc.) without increasing its overall size.
  
  > **Note:**
  > Currently, the Focus Ring is not exported as part of our global web library.
  > However, once there is an accessible component that requires the Focus Ring in its focus state (triggered by tab or click), the focus ring will wrap around that web component.
  
  For now, there is a temporary component that consumes the shared styles. As you select any shape from the options below, you will see the focus ring wrap around the component.
`;

export { DEFAULTS, TAG_NAME, FOCUS_RING_DESCRIPTION };
