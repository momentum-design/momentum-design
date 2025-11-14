# @momentum-design/docs

[![license: mit](https://img.shields.io/badge/License-MIT-blueviolet?style=flat-square)](https://github.com/momentum-design/momentum-design/blob/main/LICENSE)
![State](https://img.shields.io/badge/State-Alpha-blue?style=flat-square)

## Overview

momentum.design docs

## Contributing

See [our contributing guide](./CONTRIBUTING.md)

## Scripts

See [our script documentation](./SCRIPTS.md)

## 🚀 Project Structure


We're using Astro as a static site generator.
Inside the project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.
