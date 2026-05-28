# AGENTS.md

## Project Overview

Momentum Design is a Yarn Workspaces monorepo that serves as the source of truth for the Momentum Design System.

This root AGENTS.md defines repository-wide guidance only.

Package-specific implementation details, conventions, and workflows must live in nested AGENTS.md files under packages/ and take precedence for their package scope.

## General Guidelines

- Be analytical, straightforward, and technical. No fluff or overly agreeable responses.
- Always follow the latest relevant web standards and aim for the highest possible quality.
- Don't generate unnecessary code comments — only comment complex logic.
- Never duplicate information across repository documents (including AGENTS.md files and other documentation).
- Always link or refer to the existing source of truth when one already exists.
- When a plan or approach is ready, present it to the user and wait for confirmation before executing. "Looks good" or equivalent is required; silence is not consent.

## Knowledge Base Capture

All knowledge base content **must follow the [Knowledge Base Schema](KNOWLEDGE_BASE_SCHEMA.md)**.

- When a user asks a question that produces a repeatable answer, ask whether they want it saved to the knowledge base.
- Question-and-answer captures should be concise, reusable, and frontmatter-based where relevant.
- Do not duplicate knowledge — each topic has exactly one canonical location. Other levels link to it.
- Refer to [KNOWLEDGE_BASE_SCHEMA.md](KNOWLEDGE_BASE_SCHEMA.md) to determine the correct tier and location for any new knowledge base entry.

## Monorepo Scope

This root guide applies to:

- Repository-level tooling, scripts, and workflows
- Cross-package coordination and dependency hygiene
- Contribution and PR process expectations

This root guide does not define package-internal coding rules.

For package-local guidance, consult the nearest AGENTS.md in that package.

## Repository Layout

- packages/components contains the component library package.
- packages/assets contains design assets and token-related packages.
- packages/documentation contains the documentation website.
- packages/tools contains shared build and tooling packages.

Each package should own its implementation details in its local AGENTS.md.

## Workspace Model

See [package.json](package.json) for workspace configuration (package manager, workspace pattern, and orchestration details).

## AI-Assisted Code Marker Rule

- For generated code files, start generated blocks with a comment that begins with // AI-Assisted.
- End generated blocks with a comment that ends with // End AI-Assisted.
- Apply this rule in code files. Do not add these markers to documentation-only markdown text unless explicitly requested.

## First-Time Setup

Use the setup flow in [CONTRIBUTING.md](CONTRIBUTING.md#first-time-setup).

## Root Commands

Run commands from repo root.

- Analyze root config and dependency consistency: yarn analyze:root
- Analyze all workspaces: yarn analyze
- Build all workspaces: yarn build
- Test all workspaces: yarn test
- Clean all workspaces: yarn clean
- Generate scaffolding via plop: yarn generate
- Build docs entry points: yarn docs:build

When possible, run targeted package scripts instead of broad repo-wide commands during iteration.

## Working Across Packages

- Prefer package-targeted scripts for local development speed and lower CI churn.
- Keep changes scoped to the minimum set of packages required for the task.
- Avoid introducing package-specific conventions into this root file.
- When behavior differs by package, document it in that package's AGENTS.md.

## Dependency and Version Hygiene

- Use [.syncpackrc](.syncpackrc) as the single source of truth for dependency/version policy.
- Validate dependency policy with yarn analyze:dependencies (or yarn analyze:root) before opening PRs.
- Treat lockfile updates as part of dependency changes and keep them intentional.

## Contribution Workflow

Use [Create a PR](CONTRIBUTING.md#create-a-pr) in [CONTRIBUTING.md](CONTRIBUTING.md) for the contribution workflow.

## Review Expectations

Use [PR Reviews](CONTRIBUTING.md#pr-reviews), including [Asking for Review](CONTRIBUTING.md#asking-for-review) and [Reviewing a PR](CONTRIBUTING.md#reviewing-a-pr), in [CONTRIBUTING.md](CONTRIBUTING.md) for review expectations.

## Package-Level AGENTS Contract

Nested AGENTS.md files should define:

- Package architecture and source layout
- Package-specific build, lint, test, and dev commands
- Framework/library conventions for that package
- Validation expectations specific to that package

If root and package guidance conflict, package guidance wins for files in that package.
