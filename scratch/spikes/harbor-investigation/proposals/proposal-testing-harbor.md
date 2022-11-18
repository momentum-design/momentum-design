### Testing proposal

#### Testing layers

The following table is ordered from high level / usability tests (top) to atomic/granular tests (bottom). Same applies for the magnitude of quantity of tests - low quantity (top) to high quantity of tests (bottom).
| Name of layer | Description | What should be tested? | Tooling proposals |
|---|---|---|---|
| E2E tests | These tests should test the usability of components in production, in different browsers | Individual components, mounted in a real DOM environment in a browser | [Playwright](https://playwright.dev/) (see reasoning behind using it from Web client team comparison of Testing frameworks [here](https://confluence-eng-gpk2.cisco.com/conf/display/WTWC/E2E+Testing+Framework)). Can do a specific comparison matrix of tooling for e2e testing Harbor web components. |
| Visual regression tests | These tests should test the visual integrity of components in production. For example style changes could ultimately result in breaking layouts for consumers - having visual regression tests will make sure components do not change their layout unintentionally. | Individual components, mounted in a real DOM environment in a browser | [Playwright](https://playwright.dev/) could be used for visual regression tests, as well as the stencil built in "Screenshot Visual diff" (experimental) - see [here](https://stenciljs.com/docs/screenshot-visual-diff). Can do a specific comparison matrix of tooling for visual regression testing Harbor web components. |
| Component / Integration tests | These tests should test user behaviour & functionality of components in isolation | Individual components, either mounted in a real DOM environment or in JS-DOM | Stencil out of the box "Unit testing" framework allows writing those: <https://stenciljs.com/docs/unit-testing> |
| Accessibility tests | These tests should test basic accessibility requirements of HTML elements | Individual components, either mounted in a real DOM environment or in JS-DOM | See more details in Accessibility proposal. |
| Unit tests | These tests should test the class methods & props in isolation. Additional utitilies should be covered by these tests as well. | The JS class & its logic, created for each component, additional utilities necessary for the component | Jest out-of-the-box Javascript testing capabilities - see an example here: <https://stenciljs.com/docs/unit-testing> (bottom, "Testing Component Class Logic") |

#### Testing structure

From the above table the proposal would be having 2 test files for each component (both located ideally next to the component source code):

- `ComponentName.test.tsx`
  - Includes `Component / Integration tests`, `Accessibility tests` & `Unit tests`
- `ComponentName.e2e.tsx`
  - Includes `E2E tests` & `Visual regression tests` (using Playwright would allow writing the E2E test and visual regression snapshot within the same test)

Note: accessibility testing could be done in either E2E tests or component tests.

#### Validating test coverage

One way of measuring test coverage is by using something like [Istanbul](https://istanbul.js.org/). The tools mentioned in the table above all support measuring test coverage out of the box, using Istanbul underneath the hood:

- Playwright: <https://playwright.dev/docs/api/class-coverage>
- Jest: <https://jestjs.io/docs/cli#--coverageboolean>
  - Stencil testing should theoretically be covered by Jest coverage (needs spike)

Additional tools like [jest-it-up](https://www.npmjs.com/package/jest-it-up) could help to automatically bump up global Jest coverage thresholds, which could enforce writing tests for every new line of code, which has been added.

This way of measuring test coverage only provides insights and gating based on coverage on lines of code, but not if the tests make sense and are providing confidence.

##### The recommendation from our side would be to have both

- **Validating test coverage and bumping thresholds** makes sure tests are written for added/modified code
- **Coding conventions and testing guidelines** are recommended to provide a common standard on how tests should be written, what should be tested and how tests can improve confidence of added/modified code (ties directly into the topic of Harbor contribution model)

#### Provide Testing strategies for consumers

- Like what tools can be used to test Harbor components?
- What would we recommend to test when using Harbor components, etc.?