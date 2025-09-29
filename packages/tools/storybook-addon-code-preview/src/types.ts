import type { Package as CustomElementPackage } from "custom-elements-manifest/schema";
export interface Result {
  divs: DOMRect[];
  styled: DOMRect[];
}

export interface CodeSnippetEvent {
  id: String;
  args: Record<string, any>;
  source: string;
}

export type Language = "lit" | "react";

export interface SourceLanguage {
  format: any;
  id: Language;
  label: string;
  status: "active";
  type: "base";
}

export interface PluginParameters {
  languages?: SourceLanguage[];
  initialLanguageId?: Language;
  customElements?: CustomElementPackage;
}
