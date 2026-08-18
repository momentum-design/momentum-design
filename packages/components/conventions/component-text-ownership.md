# Component text ownership

## Principle

Components own structure, behavior, and presentation. Consumers own every
human-readable string, including visible copy and text exposed only to assistive
technologies.

This convention applies to text rendered by a component or assigned to an
accessibility API. It does not apply to standards-defined tokens that are not
human-language copy, such as roles, ARIA state values, event names, or IDs.

## Consumer inputs

Expose every piece of text through the component's public API:

- Use a slot when consumers may need markup, icons, or other structured content.
- Use a property or attribute when the component must place a plain string in a
  specific location, such as an input placeholder, an accessible label, an
  accessible description, or a live-region announcement.
- Reuse consumer-provided visible text for an accessible name or description
  when it has the same meaning. Do not require consumers to provide the same
  copy twice.
- Keep raw values used for component state separate from their display strings.
  Consumers must translate and format dates, times, numbers, currencies,
  plurals, and other locale-sensitive values before passing display text to a
  component.

Document accessibility-critical text inputs as required and cover them in tests.
If a consumer omits one, do not substitute built-in English copy.

## Prohibited component behavior

Do not:

- hard-code labels, instructions, placeholders, validation messages, empty
  states, loading states, action names, or announcements;
- provide fallback copy for an omitted property, attribute, or slot;
- translate text or select a language inside a component;
- call `Intl` or another locale-sensitive formatter in a component
  implementation or component-specific helper to produce visible or
  accessibility-only text;
- assemble sentences from fixed fragments and consumer values.

For consumer-side translation, formatting, bidirectionality, and text-expansion
guidance, follow
[Internationalization](../../../knowledge-base/internationalization.md). For
writing example copy in stories or documentation, follow
[Content guidelines](../../../knowledge-base/content-guidelines.md).

## Example

### Don't

```typescript
render() {
  return html`
    <button aria-label="Close"></button>
    ${this.items.length === 0 ? html`<p>No results</p>` : this.renderItems()}
  `;
}
```

### Do

```typescript
@property({ type: String, attribute: 'close-aria-label' })
closeAriaLabel = '';

render() {
  return html`
    <button aria-label=${this.closeAriaLabel}></button>
    ${this.items.length === 0 ? html`<slot name="empty-state"></slot>` : this.renderItems()}
  `;
}
```

The consumer supplies both strings:

```html
<mdc-example close-aria-label="Close">
  <span slot="empty-state">No results</span>
</mdc-example>
```

Stories and tests must provide representative consumer copy. Verify that the
component renders or announces that copy through its public API and does not
introduce fallback text when an optional input is absent.
