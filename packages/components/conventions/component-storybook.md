# Writing proper stories in Storybook

## Example story per Component in Storybook

Having a consistent structure in Storybook will help consumers to navigate
through our Storybook more easily. To allow for that, this convention outlines
how and which default story should be used for each component by default.

### Guidelines

- Always have `Example` as your default / top level story per component. To
  allow for that, make sure that the Example story is exported as your first
  named export:

```javascript
// component.stories.ts
...

export default meta;

export const Example: StoryObj = {
  args: {
    // args for Example story
  },
};

export const Variant1: StoryObj = {
  args: {
    // args for Variant1 story
  },
};
...
```

- Do not delete the Example story or rename it! It has to stay `Example`.
- If you want to show other flows, variants etc., create new stories below the
  Example story for them (see code snippet above).
- Do not manually add internal, derived, or read-only state to `argTypes`. When
  the custom-elements manifest exposes a non-consumer field, use
  [`hideControls`](../config/storybook/utils.ts) to remove it from Storybook.
- Do not create a story solely to demonstrate RTL. Use Storybook's global
  direction toggle instead. Add a direction-specific story only when the global
  toggle cannot express the consumer scenario, such as mixed-direction content
  or an intentional per-element `dir` override.

## Tagging and releasing of components

To release a component or widget / change its status, use the `title` attribute
to move it into the right Story folder.

To release it, change the `title` from `Work In Progress/*` to `Components/*` or
`Widgets/*`, depending on its classification.

Work in progress component:

```javascript
const meta: Meta = {
  title: 'Work In Progress/component',
  tags: ['autodocs'],
  component: 'mdc-component',
  render,
  ...
```

Stable / released component:

```javascript
const meta: Meta = {
  title: 'Components/component',
  tags: ['autodocs'],
  component: 'mdc-component',
  render,
  ...
```

For a stable / released widget, use `Widgets/widget` as the title.
