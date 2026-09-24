import type { ProjectAnnotations, Renderer } from "storybook/internal/types";

import { KEY } from "./constants";
import { withComponentInspector } from "./componentInspector";

const preview: ProjectAnnotations<Renderer> = {
  initialGlobals: {
    [KEY]: false,
  },
  decorators: [withComponentInspector],
};

export default preview;
