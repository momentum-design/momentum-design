import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import { useChannel, useParameter } from "storybook/manager-api";
import { styled } from "storybook/theming";
import { createPortal } from "react-dom";

import { EVENTS, PARAM_KEY } from "../constants";
import type { ComponentInspectorParameters, LegendPayload } from "../types";

const PREVIEW_IFRAME_ID = "storybook-preview-iframe";
const PREVIEW_WRAPPER_ID = "storybook-preview-wrapper";
const GAP = 8;

const Panel = styled.div(({ theme }) => ({
  position: "fixed",
  zIndex: 100,
  minWidth: 180,
  maxWidth: 350,
  maxHeight: "60vh",
  overflow: "auto",
  pointerEvents: "none",
  display: "flex",
  flexDirection: "column",
  gap: 6,
  padding: "8px 10px",
  background: theme.background.content,
  color: theme.color.defaultText,
  border: `1px solid ${theme.appBorderColor}`,
  borderRadius: theme.appBorderRadius,
  boxShadow: "0 2px 10px 0 rgba(0, 0, 0, 0.25)",
  fontFamily: theme.typography.fonts.base,
  fontSize: theme.typography.size.s1,
  lineHeight: "16px",
}));

const Title = styled.div(({ theme }) => ({
  fontWeight: theme.typography.weight.bold,
  color: theme.color.defaultText,
  paddingBottom: 2,
}));

const Row = styled.div({
  display: "flex",
  alignItems: "center",
  gap: 8,
});

const Swatch = styled.span<{ bg: string; border: string }>(({ bg, border }) => ({
  width: 12,
  height: 12,
  borderRadius: 2,
  flex: "0 0 auto",
  background: bg,
  border: `1px solid ${border}`,
}));

const Label = styled.span<{ empty: boolean }>(({ empty }) => ({
  opacity: empty ? 0.6 : 1,
}));

const Kbd = styled.kbd(({ theme }) => ({
  display: "inline-block",
  minWidth: 18,
  padding: "1px 6px",
  textAlign: "center",
  borderRadius: 3,
  background: theme.base === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.06)",
  border: `1px solid ${theme.appBorderColor}`,
  fontFamily: theme.typography.fonts.mono,
  fontSize: theme.typography.size.s1 - 1,
  lineHeight: "16px",
  whiteSpace: "nowrap",
}));

const Hint = styled.div(({ theme }) => ({
  color: theme.textMutedColor,
  paddingTop: 2,
}));

/**
 * The `Meta` key maps to a different physical key (and glyph) per platform, so
 * the "inspect parts" hint reflects the user's OS.
 */
const detectMetaKeyLabel = (): string => {
  const nav = navigator as Navigator & { userAgentData?: { platform?: string } };
  const platform = (nav.userAgentData?.platform || nav.platform || "").toLowerCase();
  const ua = nav.userAgent.toLowerCase();
  if (platform.includes("mac") || ua.includes("mac")) return "\u2318 Cmd";
  if (platform.includes("win") || ua.includes("win")) return "\u229E Win";
  return "Meta";
};

interface LegendState {
  payload: LegendPayload;
  tick: number;
}

/**
 * Floating legend rendered with Storybook's own UI toolkit (theming + styled).
 * It listens on the addon channel for data streamed from the preview decorator
 * and anchors itself over the inspected component inside the preview iframe.
 */
export const InspectorLegend = memo(function InspectorLegend() {
  const [state, setState] = useState<LegendState | null>(null);

  const emit = useChannel({
    [EVENTS.UPDATE]: (payload: LegendPayload) => {
      setState((prev) => ({ payload, tick: (prev?.tick ?? 0) + 1 }));
    },
    [EVENTS.CLEAR]: () => setState(null),
  });

  // Ask the preview for its current state: the panel may mount after the
  // preview emitted its initial help, so request a fresh emit on mount.
  useEffect(() => {
    emit(EVENTS.REQUEST);
  }, [emit]);

  const metaKeyLabel = useMemo(detectMetaKeyLabel, []);

  const { prefix } = useParameter<ComponentInspectorParameters>(PARAM_KEY, {});
  const targetText = prefix ? `<${prefix.toLowerCase()}\u2026>` : "HTML";
  const shiftKey = "\u21E7 Shift";

  const reposition = useCallback(() => {
    setState((prev) => (prev ? { ...prev, tick: prev.tick + 1 } : prev));
  }, []);

  useEffect(() => {
    window.addEventListener("resize", reposition);
    return () => window.removeEventListener("resize", reposition);
  }, [reposition]);

  if (!state) return null;

  const wrapper = document.getElementById(PREVIEW_WRAPPER_ID);
  const iframe = document.getElementById(PREVIEW_IFRAME_ID);
  if (!wrapper || !iframe) return null;

  const { payload } = state;
  const iframeRect = iframe.getBoundingClientRect();
  const { anchor } = payload;

  let top = iframeRect.top + GAP;
  let left = iframeRect.left + GAP;
  if (anchor) {
    top = iframeRect.top + anchor.top + anchor.height + GAP;
    left = iframeRect.left + anchor.left;
  }

  // Keep the panel within the preview horizontally.
  const maxLeft = Math.max(iframeRect.left + GAP, iframeRect.right - 320 - GAP);
  left = Math.min(Math.max(left, iframeRect.left + GAP), maxLeft);

  const kind = payload.mode === "parts" ? "Parts" : "Slots";

  // Nothing is selected yet: guide the user on how to inspect an element.
  if (!payload.tag) {
    return createPortal(
      <Panel style={{ top, left }}>
        <Title>Component Inspector</Title>
        <div>
          To inspect, <b>Hold</b> <Kbd>{shiftKey}</Kbd> (for Slots) or <Kbd>{metaKeyLabel}</Kbd> (for Parts) and{" "}
          <b>Click</b> on any {targetText} element.
        </div>
      </Panel>,
      wrapper,
    );
  }

  return createPortal(
    <Panel style={{ top, left }}>
      <Title>{`${kind} \u00B7 <${payload.tag}>`}</Title>
      {payload.items.map((item, index) => (
        <Row key={`${item.label}-${index}`}>
          <Swatch bg={item.empty ? item.bgColor : item.borderColor} border={item.borderColor} />
          <Label empty={item.empty}>{item.empty ? `${item.label} (empty)` : item.label}</Label>
        </Row>
      ))}
      <div style={{ transform: "scale(.85)", transformOrigin: "left" }}>
        {kind === "Parts" && (
          <Hint>
            Hold <Kbd>{shiftKey}</Kbd> to show Slots.
          </Hint>
        )}
        {kind === "Slots" && (
          <Hint>
            Hold <Kbd>{metaKeyLabel}</Kbd> to show Parts.
          </Hint>
        )}
        <Hint>
          Hold <Kbd>{shiftKey}</Kbd> / <Kbd>{metaKeyLabel}</Kbd> and Click on any {targetText} element to inspect it.
        </Hint>
      </div>
    </Panel>,
    wrapper,
  );
});
