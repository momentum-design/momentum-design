# Tools

Internal **CLIs and build pipelines** that produce Momentum packages (`md-builder`, `md-token-builder`, automation, Figma export plugin, etc.).

Source lives under [`packages/tools`](../../../tools).

The monorepo’s **tools** package builds assets, tokens, and supporting workflows. Contributors use CLIs such as **`md-builder`** and **`md-token-builder`** rather than hand-editing generated dist output.

Authoritative command names, scripts, and dependencies are defined in each tool’s `package.json` under [`packages/tools/`](../../../tools). This KB summarizes **how tools fit together**; for exact flags and config, follow the tool READMEs and config files in-repo. If this overview drifts, **update it to match the scripts people actually run**.
