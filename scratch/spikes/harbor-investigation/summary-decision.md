# Harbor investigation

Harbor repository: <https://github3.cisco.com/dna-platform-ui/harbor-elements>
Harbor storybook: <http://harbor.cisco.com/?path=/docs/home--page&nav=0>
New Harbor docs page: <http://harbor.cisco.com:30021/docs>

## Part of the investigation

- Investigation of the harbor code base and current state of development
- Investigation of what changes need to be made to allow adding Momentum specific components to Harbor
- Clarification on how working together with Harbor team would look like
- Clarification on open issues within harbor code base

## Harbor - current state of development

- Harbor is currently in Beta, aiming for a v1 release soon
- Existing components are not WCAG AA compliant
  - Discovered accessibility issues in existing components (added issues on Github)
  - No a11y audit has been done so far
- 30 of approx 70 unit tests are currently failing
- E2E tests are not working
- No automation pipeline / gating in place
- On the last 100 PRs in total 31 comments on Github
  - Could be a good or bad sign, just for comparison:
    Momentum React v2, last 25 PRs: total 120 comments

## Possible Paths we can take

1. **Use Harbor**
    1.a. Add everything we need to the existing Harbor repository
    - We would need to tell our consumers to use Harbor with the Momentum theme
    - Current state of development in harbor isn't made for external contributions
      - A lot of work necessary to bring Harbor to a proper state in terms of devex, testing, accessibility

    1.b. Adjust the existing harbor components to our needs & build a Momentum component library on top
    - Current state of development in harbor isn't made for external contributions
    - 2 repositories to maintain at the same time (e.g. atoms in Harbor, molecules & widgets in Momentum)
    - Duplication of work, since Stencil doesn't allow for inheritance, only composition (mapping of props & methods necessary)

2. **Start from scratch**

- A lot more work
- No guarantee that we can deliver something
- Potentially ending up in "hunger games" with Harbor & other design systems / component libraries
- Freedom in structure & developer experience

## Decision

Decision was made on the 16th November, 2022 by the whole Momentum engineering team to go with:
**PATH 1.A. - Add everything we need to the existing Harbor repository**

The decision was made with everyone giving "thumbs to the side", which means everyone is fine sticking to the decision as a group even though there might be caveats and issues along the way.
