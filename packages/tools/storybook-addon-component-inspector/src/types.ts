export interface ManifestSlot {
  name?: string;
}

export interface ManifestCssPart {
  name: string;
}

export interface ManifestDeclaration {
  tagName?: string;
  slots?: ManifestSlot[];
  cssParts?: ManifestCssPart[];
}

export interface ManifestModule {
  declarations?: ManifestDeclaration[];
}

export interface CustomElementsManifest {
  modules?: ManifestModule[];
}

/**
 * Parameters read from `context.parameters.componentInspector`.
 *
 * The consuming Storybook must provide the *raw* custom-elements manifest so
 * the inspector can resolve each component's slots and shadow parts.
 */
export interface ComponentInspectorParameters {
  customElements?: CustomElementsManifest;
  /**
   * Tag-name prefix of the web components to inspect (e.g. `"mdc-"`). Matched
   * case-insensitively against `tagName`. When omitted, any HTML element can be
   * selected.
   */
  prefix?: string;
  /**
   * CSS selector of a container element. When set and a matching element
   * exists in the story, only elements inside that container can be hovered
   * and selected. When omitted, or no matching element exists, the whole
   * story root is used.
   */
  contentContainer?: string;
}

/** Inspector mode selected from the toolbar dropdown. */
export type InspectorMode = "off" | "slots" | "parts";

/** A single slot / shadow-part row shown in the legend. */
export interface LegendItem {
  label: string;
  empty: boolean;
  borderColor: string;
  bgColor: string;
}

/** Viewport rect of the hovered element, used to anchor the floating legend. */
export interface LegendAnchor {
  top: number;
  left: number;
  width: number;
  height: number;
}

/** Payload streamed from the preview to the manager to render the legend. */
export interface LegendPayload {
  tag: string | null;
  mode: "slots" | "parts";
  items: LegendItem[];
  anchor: LegendAnchor | null;
}
