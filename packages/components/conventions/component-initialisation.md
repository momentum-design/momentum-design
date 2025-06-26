# Component attribute initialisation

## Background

HTML specs require the custom element constructors to be bound to the following
[rules](https://html.spec.whatwg.org/multipage/custom-elements.html#custom-element-conformance).
In particular those 2 bullet points are important:

- The element must not gain any attributes or children, as this violates the
  expectations of consumers who use the createElement or createElementNS
  methods.
- In general, work should be deferred to connectedCallback as much as
  possible—especially work involving fetching resources or rendering. However,
  note that connectedCallback can be called more than once, so any
  initialization work that is truly one-time will need a guard to prevent it
  from running twice.

Angular and how it does attribute tracking relies on this, thus we have to make
sure that whenever we do initialisation of attributes, we should not initialise
them in the constructor.

If we are not following this, web components are not working properly in
Angular.

## Implementation

### Don't

```javascript
constructor() {
    super();
    this.role = "button";
    this.myAttribute = "xyz";
}
```

### Do

```javascript
override connectedCallback() {
    super.connectedCallback();
    this.role = "button";
    this.myAttribute = "xyz";
}
```

### Notes

Properties, which are **not**
[reactive properties](https://lit.dev/docs/components/properties/) (attached to
a attribute) can still be initialised in the constructor. Anything which does
change the attributes / DOM should be done in the connectedCallback.

## Summary

Any initialisations which are DOM related (setting an attribute, etc) should
always be done in the `connectedCallback`, instead of the `constructor`.
