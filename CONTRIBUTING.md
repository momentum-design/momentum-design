# Contributing

This package is currently under development. Contributions to this project will be strictly reviewed at the owner's disgression until this project has well-defined contribution details. Once those details are available, the contribution model will contain helpful details to assist in making active contributions to this project.

## Tech Stack

- Typescript, Javascript
- Node.js
- React
- Jest
- Lit
- Playwright
- Storybook

Specific tech:

- [Figma Plugin Development](https://www.figma.com/plugin-docs/)

More specific information is provided in each sub-package.

## First time setup

1. Fork the repository
2. Clone the forked repository
    ```
    git clone https://github.com/{username}/momentum-design.git
    ```
3. Navigate to the root of the repo.
    ```
    cd momentum-design
    ```
4. Setup upstream remote references in your local
    ```
    git remote add upstream https://github.com/momentum-design/momentum-design.git
    ```
5. Verify that your forked repos are set up with the correct remote references.
    Running `git remote -v` in your repository directory should return settings like these:

    ```bash
    origin git@github.com:{username}/momentum-design.git (fetch)
    origin git@github.com:{username}/momentum-design.git (push)
    upstream git@github.com:momentum-design/momentum-design.git (fetch)
    upstream git@github.com:momentum-design/momentum-design.git (push)
    ```
6. Run `yarn` in the root of the repo
7. Run `yarn build` in the root of the repo

## Executing scripts in the packages

This is a mono-repo (using yarn workspaces), to run scripts in each sub-package (like building, testing, etc.), run `yarn <PACKAGE_NAME> <SCRIPT_NAME>` from the root of the repository.

For example,
    to build the icons package - `yarn icons build`
    to run the builder tests - `yarn builder test`

## Create a PR

Steps for creating a PR (after [First time setup](#first-time-setup) has been done):

1. Make sure your main branch is up to date with the remote, by executing `git pull upstream main -ff` and then push.
2. Create a new branch and make your changes. See [Branch naming](#branch-naming).
3. Commit your changes, using [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#summary). See [Commit messages](#commit-messages).
4. Push your branch to the origin remote — that is, to your fork. **Never push a branch to the base repository.** This applies to everyone, including maintainers who have write access to it.
5. Create the PR against the base repository / main branch. The title, the description and the *validated* label are all set as part of creating it, not as follow-up edits:

    ```bash
    gh pr create --repo momentum-design/momentum-design --base main \
      --head {username}:{branch} --title "{title}" --body-file {file} \
      --label validated
    ```

    - **Important: Add a proper description and title to the PR - it should be formatted, human-readable and also not include the description template text anymore.** See [Pull request title](#pull-request-title) and [Pull request description](#pull-request-description).
    - The *validated* label is what kicks off the pipeline. Pass `--label validated` if you have the access rights for it. See [Running CI with the validated label](#running-ci-with-the-validated-label).

### Branch naming

Branch names are not validated by CI. Prefer a short, lowercase, hyphen-separated name prefixed with the conventional commit type — `fix/release-token-permissions`, `feat/numberinput`, `chore/publish-only-dist-changes`. Prefixing with your username, such as `{username}/fix/numberinput`, is also in use.

### Commit messages

Commit messages must follow [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#summary). This is enforced locally by the `commit-msg` Git hook, which runs [commitlint](config/commitlint/commitlint.config.js) and rejects a non-conforming message before the commit is created.

### Pull request title

The *Validate Pull Request Title* job in [pull-request.yml](.github/workflows/pull-request.yml) checks the title against:

```text
^(feat|docs|chore|fix|refactor|test|style|perf|revert|build|ci)(\(\w+\))?:.+$
```

This is stricter than conventional commits in one respect: the optional scope must match `\w+`, so it cannot contain a hyphen, slash or dot. Use `fix(ci):` rather than `fix(deploy-package):` — a hyphenated scope fails the job.

### Pull request description

The description is pre-filled from [pull_request_template.md](.github/pull_request_template.md). Replace the placeholder line under each heading and delete the leading HTML comment block. An empty description fails the *Validate Pull Request Description* job.

Write it for someone **consuming** the library, not for someone reading the diff:

- Describe what changes for a consumer — a new or changed API, different visual output, altered default behaviour, a bug they would otherwise have hit.
- Do not walk through the code changes. Which files moved, or how a function was refactored, belongs in the diff.
- If there is no consumer impact — tooling, CI, tests, internal refactors — state that explicitly, for example *"No changes for consumers of the library."* A short description is fine as long as it says so.

To work out whether a change reaches consumers, look at each package's `dist` folder, because that is what gets published. Build the package and compare its `dist` output against `main`; if `dist` is unchanged, consumers are unaffected. The deploy pipeline uses this same signal — [compare-dist.sh](.github/scripts/compare-dist.sh) skips publishing a package whose `dist` did not change.

### Running CI with the validated label

No build or test job runs until the PR carries the `validated` label. The *Validate Action* job in [pull-request.yml](.github/workflows/pull-request.yml) gates every downstream job, and because all PRs are opened from forks, the label is always required. `labeled` is one of the workflow's trigger types, so adding it starts the pipeline.

Apply it with `--label validated` when you create the PR, as shown in step 5 above. On a PR that already exists:

```bash
gh pr edit {number} --repo momentum-design/momentum-design --add-label validated
```

Applying a label needs at least triage access to the base repository. To check your role:

```bash
gh api repos/momentum-design/momentum-design/collaborators/{username}/permission --jq .role_name
```

`triage`, `write`, `maintain` or `admin` means you can set the label yourself. Otherwise, open the PR without it and ask a Momentum Core Team member to add it for you.

## Knowledge base

See [KNOWLEDGE-BASE.md](KNOWLEDGE-BASE.md) for the design-system knowledge base — tiers, folder layout, index lookup, and the contribution workflow.

## PR Reviews

### Asking for Review

When asking for a review on a PR, consider the following:

- Pipeline should pass before asking for review
- Every comment on a PR should be answered / addressed
- If there is disagreement or discussions, please stay respectful and try to resolve the issues together
- Comments from reviewer should always be resolved by reviewer
- Do not dismiss anyones review/re-review

### Reviewing a PR

When reviewing/re-reviewing a PR, consider the following:

- It is encouraged to use [conventional comments](https://conventionalcomments.org/)
- Use "Request changes" or "Approve" option in Github ("Adding comments" should be used when a PR shouldn't be blocked, but feedback should still be provided)
- Check that the PR should include unit or e2e test changes for all the implementation changes
- Every PR should be checked out locally, ran and tested manually.
- Check for breakages due to changing dependencies (like if u update a dependecy, you need a more thorough test)
- Conventions & common coding standards should be pointed out on reviews.
- Maintainability of the changes should be checked (like is it extensible / flexible / etc.)
- Check if similar areas of code need changes or code can be reused from these similar areas
- In case of a longer time off / being not available, consider to finish/handover your review.
