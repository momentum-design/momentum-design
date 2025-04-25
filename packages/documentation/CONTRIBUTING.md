# @momentum-design/docs - Contributing Guide

## Contributing

### Steps to start the docs locally:

- To start the documentation package, build these 3 package libraries first:
```
    yarn brand-visuals build
    yarn illustrations build
    yarn icons build
```

- Before you build these packages, please build the dependencies of the 3 packages.
- Later, build the docs package and preview it.
```
    yarn docs build && yarn docs preview
```
> Note: When you deal with assets, you need to execute this above command for every single change.
- To perform hot reloading on the docs package, please run
```
    yarn docs dev
```

This component package was generated with a script, please report any issues.
