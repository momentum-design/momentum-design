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
  type: "basE";
}
