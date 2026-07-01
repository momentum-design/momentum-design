import React, { useMemo, useState } from 'react';
import Tablist from '@momentum-design/components/dist/react/tablist/index.js';
import Tab from '@momentum-design/components/dist/react/tab/index.js';

import { MarkdownView } from './Markdown';
import { slugify } from '../utils/slugify';
import type { MarkdownSection } from '../types';

export interface DocsTabsProps {
  sections: MarkdownSection[];
}

type TabMeta = { section: MarkdownSection; tabId: string; panelId: string };

export const DocsTabs: React.FC<DocsTabsProps> = ({ sections }) => {
  const tabs = useMemo<TabMeta[]>(
    () =>
      sections.map((section) => {
        const tabId = `docs-tab-${slugify(section.heading)}`;
        return { section, tabId, panelId: `${tabId}-panel` };
      }),
    [sections],
  );

  const [activeTabId, setActiveTabId] = useState<string | undefined>(
    tabs[0]?.tabId,
  );

  if (tabs.length === 0) return null;

  const active = tabs.find((t) => t.tabId === activeTabId) ?? tabs[0]!;

  return (
    <div style={{ marginTop: 12 }}>
      <Tablist
        data-aria-label="Documentation sections"
        activeTabId={active.tabId}
        onChange={(event: CustomEvent<{ tabId: string }>) => {
          setActiveTabId(event.detail.tabId);
        }}
      >
        {tabs.map((t) => (
          <Tab
            key={t.tabId}
            tabId={t.tabId}
            variant="pill"
            text={t.section.heading}
            aria-controls={t.panelId}
          />
        ))}
      </Tablist>
      <div
        role="tabpanel"
        id={active.panelId}
        aria-labelledby={active.tabId}
        style={{ padding: '8px 0 0' }}
      >
        <MarkdownView>{active.section.body}</MarkdownView>
      </div>
    </div>
  );
};
