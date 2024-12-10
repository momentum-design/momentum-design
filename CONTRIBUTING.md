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
2. Create a new branch and make your changes.
3. Commit your changes, using [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#summary).
4. Push your branch to the origin remote
5. Create a PR against base repository / main branch on Github
6. **Important: Add a proper description and title to the PR - it should be formatted, human-readable and also not include the description template text anymore.**
7. Set the *validated* label on the PR to kick off the pipeline if you have the access rights for it.

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
