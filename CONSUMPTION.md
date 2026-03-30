# General Consumption Guide

How you install depends on whether you use **npm** (or Yarn, pnpm, etc.) or need **raw files** without a package manager.

### With npm (or compatible package managers)

Add the packages you need to `package.json` with the versions your project requires. Typical usage is one or more of:

- [**@momentum-design/components**](https://www.npmjs.com/package/@momentum-design/components) — Web Components (and React wrappers where applicable).
- [**@momentum-design/animations**](https://www.npmjs.com/package/@momentum-design/animations)
- [**@momentum-design/brand-visuals**](https://www.npmjs.com/package/@momentum-design/brand-visuals)
- [**@momentum-design/fonts**](https://www.npmjs.com/package/@momentum-design/fonts)
- [**@momentum-design/icons**](https://www.npmjs.com/package/@momentum-design/icons)
- [**@momentum-design/illustrations**](https://www.npmjs.com/package/@momentum-design/illustrations)
- [**@momentum-design/tokens**](https://www.npmjs.com/package/@momentum-design/tokens)
- [**@momentum-design/utils**](https://www.npmjs.com/package/@momentum-design/utils)

Each package’s `dist/` layout may differ; refer to **momentum.design** and package READMEs for import paths and frameworks-specific notes.

### Without npm: CDN-style access via unpkg

For quick experiments or non-Node pipelines, you can fetch published files from **[unpkg](https://unpkg.com)** (files as served from npm). Examples for theme token JSON:

```text
# dark-stable theme (JSON)
https://unpkg.com/@momentum-design/tokens/dist/json/theme/webex/dark-stable.json

# light-stable theme (JSON)
https://unpkg.com/@momentum-design/tokens/dist/json/theme/webex/light-stable.json
```

Replace the package name and path to match the asset and version you need. Pinning a version in the URL (`/package@version/path`) is recommended for production.

### Without npm: full package tarball

To download the **entire** contents of a published package (for example all files under `@momentum-design/tokens`), you can pull the `.tgz` from the registry and extract it. `curl` and `tar` are available on macOS and on [recent Windows](https://learn.microsoft.com/en-us/virtualization/community/team-blog/2017/20171219-tar-and-curl-come-to-windows) builds.

```bash
# Example: download a specific version of @momentum-design/tokens (adjust version and package name)
curl "https://registry.npmjs.org/@momentum-design/tokens/-/tokens-0.0.46.tgz" --output tokens.tgz
tar -xf tokens.tgz
```

Swap `@momentum-design/tokens` / `tokens-0.0.46.tgz` for the scope, package tarball name, and version you want.