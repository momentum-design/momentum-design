# No relative workspace imports

## Introduction

Importing modules or assets from other workspaces within the momentum-design monorepo should always be done by using the fully qualified workspace (package) name, not through relative imports

## Guidelines

### Don't

```javascript
import something from '../../../../assets/otherPackage/src/file';
```

### Do

```javascript
import something from '@momentum-design/otherPackage/dist/file';
```

## Benefits

- Future folder changes or refactores are not causing issues, less updates needed
- Easier to read and understand where the file gets imported from.

## Conclusion

By not using relative path imports when importing from other packages / workspaces within the monorepo future maintenance work will be reduced.
