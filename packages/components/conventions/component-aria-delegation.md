# Aria Delegation vs Host Aria per Component

## Background

To be able to build components according to WCAG standards and to make them work
with Screenreaders, there are different methods necessary when constructing
components.

More information on this and feedback from the Material team in this Discord
thread: <https://discord.com/channels/1012791295170859069/1157427170508013608>

## Implementation

For each component we develop, we will think about which strategy we will choose
in terms of rendering and setting aria attributes. The 2 strategies are:

### Delegating Aria

Example:

```javascript
<mdc-button>
  <button>...</button>
</mdc-button>
```

Delegating Aria can run into several issues with screen readers that expect
related aria roles to be in the light dom, like radio/radiogroup and
listbox/option. In the long run, this should be fixed and easier with the AOM
idref spec (like
[elementInternals.ariaLabelledByElements](https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals)).

Delegating aria is the only option for components that need to represent
multiple aria roles, like select (combobox/listbox menu).

### Host Aria

Example:

```javascript
<mdc-button role="button">...</mdc-button>
```

Host Aria fixes many screen reader issues and enables more control over the
element from users. For example, with host aria a user can make
`<mdc-button role="radio">` and represent a set of buttons that behave like
radio buttons.

However, the downside is it requires a lot more effort for things like
coordinating focusability. You have to hydrate a tabindex="0" on the element,
which gets complicated when others control the tabindex, like list and menu. So
far though, these downsides seem worth the benefit with screen reader support.

## Summary

We will discuss per component during the breakdown process which way we will
choose. We will not limit ourselves to one or the other option, but will work
with both methods to build the component the best way possible to meet all
accessibility requirements.
