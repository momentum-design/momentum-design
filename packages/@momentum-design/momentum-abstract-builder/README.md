---
package: @momentum-design/momentum-abstract-builder
---

# MomentumAbstractBuilder

## Overview

This package is used to pull momentum design elements from momentum-abstract. 

## How to use it?

### 1. build typescript 

```yarn workspace @momentum-design/momentum-abstract-builder init-build```

### 2. sync data 

```yarn workspace @momentum-design/momentum-abstract-builder sync```

when momentum-abstract's version is less than the lastest online version, this script will update momentum-abstract's version and export the lastest data into our dest fold.

#### local version in package.json

```
  "dependencies": {
    "momentum-abstract": "^1.0.34",
```

#### dest path

+ icon packages/@momentum-design/icons

+ illustrations packages/@momentum-design/illustrations

### 3. commit

  We have a feature to submit commit in Github Action. Please check ```.github/workflows/sync-momentum-abstract.yml```

## Test

  ```yarn test```

  We use jest to test this package. The dest path of test will be under ```dist/_test```

## Contact Information

yulhuang@cisco.com
