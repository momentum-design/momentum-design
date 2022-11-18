### A11y features / fixes

- Manual testing of existing harbor elements on A11y issues
- Fixing all manual discovered A11y issues in harbor elements (based on priority):
  - Some of which are:
    <https://github3.cisco.com/dna-platform-ui/harbor-elements/issues/1195>
    <https://github3.cisco.com/dna-platform-ui/harbor-elements/issues/1196>
    <https://github3.cisco.com/dna-platform-ui/harbor-elements/issues/1197>
    <https://github3.cisco.com/dna-platform-ui/harbor-elements/issues/1199>
    <https://github3.cisco.com/dna-platform-ui/harbor-elements/issues/1200>
    <https://github3.cisco.com/dna-platform-ui/harbor-elements/issues/1211>
- Asking the Cisco A11y team to do a A11y audit
  - Either while developing Momentum components or once Momentum components are in Harbor
  - Once done, fix the issue based on priority

### Automated A11y testing

- Investigate if [jest-axe](https://github.com/nickcolley/jest-axe) can be used in combination with `@stencil/core/testing`
  - If applicable, add `jest-axe` as part of unit tests
- Investigate if lint plugins like [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y) can be used in combination with stencil
  - If applicable, add `eslint-plugin-jsx-a11y` as part of linting
- If E2E testing is enabled & working, accessibility testing could also be done there
  - Possible tools, depending on E2E testing framework:
    - <https://playwright.dev/docs/accessibility-testing>
    - <https://github.com/component-driven/cypress-axe>
    - Stencil E2E testing is built upon Puppeteer - something like [this](https://www.npmjs.com/package/@axe-core/puppeteer) could be used.

### A11y documentation

- Having documentation around Accessibility requirements like "Keyboard interactions" etc. would be highly recommended - like here:
<https://www.radix-ui.com/docs/primitives/components/dialog#accessibility>
<https://design.wonderflow.ai/get-started/components/actions/button#accessibility>
