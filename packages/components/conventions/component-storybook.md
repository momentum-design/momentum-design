# Writing proper stories in Storybook

## Example story per Component in Storybook

Having a consistent structure in Storybook will help consumers to navigate through our Storybook more easily. To allow for that, this convention outlines how and which default story should be used for each component by default.

### Guidelines

- Always have `Example` as your default / top level story per component. To allow for that, make sure that the Example story is exported as your first named export:

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
- If you want to show other flows, variants etc., create new stories below the Example story for them (see code snippet above).

## Tagging and releasing of components

To release a component / change its status, its advised to use the storybook parameter `badges` and the `title` attribute to move it into the right Story folder and tag it with the "stable" badge.

To release a component, the following 2 actions have to be done:

- Change the `title` from `Work In Progress/*` to `Components/*`
- Change the `badges` parameter from `wip` to `stable`

Work in progress component:

```javascript
const meta: Meta = {
  title: 'Work In Progress/component',
  tags: ['autodocs'],
  component: 'mdc-component',
  render,
  parameters: {
    badges: ['wip'],
  },
  ...
```

Stable / released component:

```javascript
const meta: Meta = {
  title: 'Components/component',
  tags: ['autodocs'],
  component: 'mdc-component',
  render,
  parameters: {
    badges: ['stable'],
  },
  ...
```
