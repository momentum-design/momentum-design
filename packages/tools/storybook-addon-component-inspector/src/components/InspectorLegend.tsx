import React, { memo, useCallback, useEffect, useState } from "react";
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

const Hint = styled.div(({ theme }) => ({
  color: theme.textMutedColor,
  paddingTop: 2,
}));

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

  const { prefix } = useParameter<ComponentInspectorParameters>(PARAM_KEY, {});
  const targetText = prefix ? `<${prefix.toLowerCase()}\u2026>` : "HTML";

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

  // Nothing is hovered yet: guide the user on how to inspect an element.
  // Anchor the help to the bottom center of the preview so it doesn't cover
  // the rendered component (which may be small).
  if (!payload.tag) {
    const centerX = iframeRect.left + iframeRect.width / 2;
    const bottom = iframeRect.bottom - GAP;
    return createPortal(
      <Panel style={{ top: bottom, left: centerX, transform: "translate(-50%, -100%)" }}>
        <Title>Component Inspector</Title>
        <div>
          Hover any {targetText} element to see its {kind.toLowerCase()}.
        </div>
      </Panel>,
      wrapper,
    );
  }

  return createPortal(
    <Panel style={{ top, left }}>
      <Title>{`${kind} \u00B7 <${payload.tag}>`}</Title>
      {payload.items.length === 0 && <Hint>This component has no {kind.toLowerCase()}.</Hint>}
      {payload.items.map((item, index) => (
        <Row key={`${item.label}-${index}`}>
          <Swatch bg={item.empty ? item.bgColor : item.borderColor} border={item.borderColor} />
          <Label empty={item.empty}>{item.empty ? `${item.label} (empty)` : item.label}</Label>
        </Row>
      ))}
    </Panel>,
    wrapper,
  );
});
