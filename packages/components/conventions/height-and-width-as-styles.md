# Height and Width
- We prefer to use height and width for components controlled through CSS variables

## Example
```js *.styles.ts
  :host {
    --mdc-component-height: 100%;
    --mdc-component-width: 100%;
    height: var(--mdc-component-height);
    width: var(--mdc-component-width);
  }
```