# TSDoc per Component

## Background

To allow ease of consumption and export proper documentation per component, we aim to document every component following certain rules defined below.

## Main TSDoc block

### Description

Describes the component in detail, if it has to be wrapped in providers, if it works together with other components etc.

### @tagname

Describes the tagname of the component, has to be the same as in the `component.constants.ts` file.
Usage: only once

### @slot

Describes the slots of the component.
Usage: can be multiple

### @cssproperty

Describes the CSS Properties of the component, which can be used by consumers to override styling of the component.
Usage: can be multiple

Example:

```javascript
/**
 * Component description...
 *
 * @tagname mdc-componentname
 *
 * @slot slotname - Description of slot
 * @slot ...
 * 
 * @cssproperty --mdc-componentname-attribute - Description of css property
 * @cssproperty ...
 * 
 */
class Component {
    ...
```

## Attributes / Properties / Methods block

Every **public attribute / property / method** needs to be documented, directly above the definition in the class (i.e. above the decorator).
Default values should be documented if appplicable.

Example:

```javascript
/**
 * Description
 *
 * Default: Value
 */
@property({ type: String })
attribute: string = DEFAULTS.ATTRIBUTE;
```

**Private or internal attributes / properties / methods** can be documented with the `@internal` tag.

Example:

```javascript
/**
 * Description
 * 
 * @internal
 */
@state()
private internalState?: string;
```
