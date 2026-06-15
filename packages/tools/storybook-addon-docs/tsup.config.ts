import { readFile } from "node:fs/promises";

import { defineConfig, type Options } from "tsup";

import {
  BROWSER_TARGETS,
  NODE_TARGET,
} from "storybook/internal/builder-manager";
import { globalPackages as globalManagerPackages } from "storybook/internal/manager/globals";
import { globalPackages as globalPreviewPackages } from "storybook/internal/preview/globals";

type BundlerConfig = {
  bundler?: {
    exportEntries?: string[];
    nodeEntries?: string[];
    managerEntries?: string[];
    previewEntries?: string[];
  };
};

export default defineConfig(async (options) => {
  const packageJson = (await readFile("./package.json", "utf8").then(
    JSON.parse,
  )) as BundlerConfig;
  const {
    bundler: {
      exportEntries = [],
      managerEntries = [],
      previewEntries = [],
      nodeEntries = [],
    } = {},
  } = packageJson;

  const commonConfig: Options = {
    splitting: false,
    minify: !options.watch,
    treeshake: true,
    sourcemap: true,
    clean: false,
  };

  const configs: Options[] = [];

  if (exportEntries.length) {
    configs.push({
      ...commonConfig,
      entry: exportEntries,
      dts: {
        resolve: true,
      },
      format: ["esm", "cjs"],
      platform: "neutral",
      target: NODE_TARGET,
      external: [...globalManagerPackages, ...globalPreviewPackages],
    });
  }

  if (managerEntries.length) {
    configs.push({
      ...commonConfig,
      entry: managerEntries,
      format: ["esm"],
      platform: "browser",
      target: BROWSER_TARGETS,
      external: globalManagerPackages,
    });
  }

  if (previewEntries.length) {
    configs.push({
      ...commonConfig,
      entry: previewEntries,
      dts: {
        resolve: true,
      },
      format: ["esm", "cjs"],
      platform: "browser",
      target: BROWSER_TARGETS,
      // React must come from the consumer's bundle so hooks share one runtime
      // with @storybook/addon-docs/blocks.
      external: [
        ...globalPreviewPackages,
        "react",
        "react-dom",
        "react/jsx-runtime",
        "@storybook/addon-docs/blocks",
        // Consumer-provided peer; resolved at runtime via the consumer's bundler.
        /^@momentum-design\/components($|\/)/,
        /^@momentum-design\/fonts($|\/)/,
        /^@momentum-design\/tokens($|\/)/,
      ],
    });
  }

  if (nodeEntries.length) {
    configs.push({
      ...commonConfig,
      entry: nodeEntries,
      format: ["cjs"],
      platform: "node",
      target: NODE_TARGET,
    });
  }

  return configs;
});
