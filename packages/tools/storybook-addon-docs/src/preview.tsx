import React from "react";
import type { ProjectAnnotations, Renderer } from "storybook/internal/types";

import "@momentum-design/fonts/dist/css/fonts.css";
import "@momentum-design/tokens/dist/css/components/complete.css";

import { DocsPage } from "./components/DocsPage";
import { ThemedDocsContainer } from "./components/DocsContainer";
import { DocsTheme } from "./components/DocsTheme";

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
