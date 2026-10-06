import type { TemplateResult } from 'lit';

export type AssetFamily = 'icon' | 'illustration' | 'brandvisual';

export interface AssetRequest {
  family: AssetFamily;
  name: string;
  signal?: AbortSignal;
}

export type AssetSource =
  | { format: 'svg'; url: string }
  | { format: 'png'; url: string }
  | { format: 'svg'; content: string };

export interface AssetLoadingOptions {
  resolveAsset: (asset: Pick<AssetRequest, 'family' | 'name'>) => AssetSource;
}

export type LoadedAsset = Element | TemplateResult;
