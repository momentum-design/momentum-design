### Developer experience

What we would recommend:

- **Review and adjust the contribution guidelines on Harbor github**
  - These could link to the coding standards / conventions (point below)
- **Setup a common set of coding standards / conventions, like:**
  - How unit/component/e2e tests should be written?
  - How PRs should be reviewed?
    - Is it required for every reviewer to test out the changes locally or are we fine with just doing reviews based upon the Github changes?
  - Common coding standards like:
    - We need to document, which means TSDocs are recommended to write, etc.
    - Commented code should be avoided in production code
      - See related example from web client [here](https://confluence-eng-gpk2.cisco.com/conf/pages/viewpage.action?pageId=248253493)
    - Write code as defined in a Component structure
      - Could include naming of files, structuring of folders, etc.
      - See related example from web client [here](https://confluence-eng-gpk2.cisco.com/conf/display/WTWC/Cantina+Component+structure)
  - Note: Web client team has been setting up conventions for their code base like so:
    <https://confluence-eng-gpk2.cisco.com/conf/pages/viewpage.action?spaceKey=WTWC&title=Active>
- **Enable the pipeline to run on every commit and DO NOT allow merging, if the pipeline fails**
  - Advantages:
    - Every change does need to pass all tests, build & lint stages before getting merged -> which leads to a clean & tested code base over time
    - PR reviews will be easier (changed code has to pass tests etc. which means only well tested and linted code will be up for review)
  - Disadvantages:
    - If the pipeline takes long to run, waiting times till merge might appear
      - That said, choosing the right tooling could reduce the pipeline runthrough time
- **Review the existing Linting & Formatting configurations**
  - Review if the existing linting & formatting configurations are still valid, can be improved & maybe tightened more to ensure contributing to harbor is standardised.
- **Automating the pipeline**
  - Automate the releases
  - Show pipeline steps in Github to allow quicker debugging, when the pipeline fails
- **Automation by generation**
  - Generate api docs based on types and use them in docs (prop tables, etc.)
  - Generate components (folder structures and placeholder files) with the use of Plop
  - Generate dependency trees of components, like List depends on ListItem, which depends on Button, etc. (would be nice to have)