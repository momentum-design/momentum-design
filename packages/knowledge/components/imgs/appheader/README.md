# App Header guideline images (`imgs/appheader`)

PNG exports of Figma frames named **IMG** from [Momentum Component Guidelines — App Header](https://www.figma.com/design/MrrkzCQ0YXzUTca2XhesDZ/%F0%9F%93%9C-Momentum-Component-Guidelines?node-id=7834-268476).

## Generate

From the repository root (uses root `.env` if present):

```bash
node --env-file=.env packages/knowledge/scripts/export-appheader-guideline-imgs.mjs
```

Or:

```bash
export FIGMA_ACCESS_TOKEN="<figma-personal-access-token>"
yarn workspace @momentum-design/knowledge export:appheader-guidelines-imgs
```

Writes **2×** PNGs into this folder. See [Figma API access tokens](https://www.figma.com/developers/api#access-tokens).
