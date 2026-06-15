import React from 'react';
import type { ProjectAnnotations, Renderer } from 'storybook/internal/types';

import '@momentum-design/fonts/dist/css/fonts.css';
import '@momentum-design/tokens/dist/css/components/complete.css';

import { DocsPage } from './components/DocsPage';
import { ThemedDocsContainer } from './components/DocsContainer';

const DocsTheme: React.FC = () => (
  <style>{`
    .sbdocs.sbdocs-wrapper {
      background: var(--mds-color-theme-background-gradient-primary-normal) !important;
      color: var(--mds-color-theme-text-primary-normal) !important;
      font-family: var(--mds-font-family-primary, Inter, sans-serif) !important;
    }
    .sbdocs.sbdocs-content {
      max-width: 1000px;
    }
    .sbdocs.sbdocs-content a {
      color: var(--mds-color-theme-text-accent-normal) !important;
    }
    /* Inline code only (fenced code uses Storybook <Source>). */
    .sbdocs.sbdocs-content :not(pre) > code {
      color: var(--mds-color-theme-text-primary-normal) !important;
      background: var(--mds-color-theme-background-solid-tertiary-normal) !important;
      border: none !important;
      box-shadow: none !important;
    }
  `}</style>
);

const preview: ProjectAnnotations<Renderer> = {
  parameters: {
    docs: {
      container: ThemedDocsContainer,
      page: () => (
        <>
          <DocsTheme />
          <DocsPage />
        </>
      ),
    },
  },
};

export default preview;
