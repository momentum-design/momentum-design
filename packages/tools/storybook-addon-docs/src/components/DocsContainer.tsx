import React, { useEffect, useState } from "react";
import { DocsContainer as StorybookDocsContainer, type DocsContainerProps } from "@storybook/addon-docs/blocks";
import { ThemeProvider } from "@momentum-design/components/react";

import { getThemeClassFromGlobal, getThemeGlobalKey } from "../registry";
import type { DocsAddonParameters } from "../types";

const GLOBALS_UPDATED = "globalsUpdated";

type Globals = Record<string, unknown>;

const readGlobalsFromPreview = (): Globals | undefined => {
  try {
    const preview = (
      window as unknown as {
        __STORYBOOK_PREVIEW__?: {
          storyStoreValue?: { userGlobals?: { get?: () => Globals } };
        };
      }
    ).__STORYBOOK_PREVIEW__;
    return preview?.storyStoreValue?.userGlobals?.get?.();
  } catch {
    return undefined;
  }
};

const readTheme = (context: DocsContainerProps["context"], key: string): string | undefined => {
  // Prefer the live preview store — it reflects the user's current toolbar
  // selection, including the value persisted via URL globals on reload.
  const live = readGlobalsFromPreview()?.[key];
  if (typeof live === "string") return live;
  try {
    const story = context.storyById();
    const globals = (story as unknown as { userGlobals?: Globals }).userGlobals;
    const value = globals?.[key];
    return typeof value === "string" ? value : undefined;
  } catch {
    return undefined;
  }
};

/**
 * Wraps Storybook's `DocsContainer` with the MDC `<ThemeProvider>` so docs
 * pages react to the toolbar theme switcher. Re-renders on `globalsUpdated`.
 */
export const ThemedDocsContainer: React.FC<React.PropsWithChildren<DocsContainerProps>> = ({
  children,
  context,
  ...rest
}) => {
  const themeKey = getThemeGlobalKey();
  const toClass = getThemeClassFromGlobal();

  const [theme, setTheme] = useState<string | undefined>(() => readTheme(context, themeKey));

  useEffect(() => {
    const channel = context.channel;
    if (!channel) return undefined;
    const handler = (payload: { globals?: Globals }) => {
      const next = payload?.globals?.[themeKey];
      if (typeof next === "string") setTheme(next);
    };
    channel.on(GLOBALS_UPDATED, handler);
    return () => channel.off(GLOBALS_UPDATED, handler);
  }, [context, themeKey]);

  const themeClass = theme ? toClass(theme) : "mds-theme-stable-darkWebex";

  // Mirror the theme class onto <body> so the MDC token CSS variables cascade
  // to the full-width `.sbdocs-wrapper` (which lives outside our React tree).
  useEffect(() => {
    const body = document.body;
    if (!body) return undefined;
    const prev = Array.from(body.classList).filter((c) => c.startsWith("mds-theme-stable-"));
    prev.forEach((c) => body.classList.remove(c));
    body.classList.add(themeClass, "mds-typography", "mds-elevation");
    return () => {
      body.classList.remove(themeClass, "mds-typography", "mds-elevation");
    };
  }, [themeClass]);

  return (
    <StorybookDocsContainer context={context} {...rest}>
      <ThemeProvider themeclass={themeClass} style={{ display: "contents" }}>
        {children}
      </ThemeProvider>
    </StorybookDocsContainer>
  );
};
