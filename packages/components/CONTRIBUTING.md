# @momentum-design/components - Contributing Guide

## Contributing

### Create a new component

To create a new component folder, you can use the following script:

```sh
yarn components generate:component
```

This will scaffold the folder with the expected file naming, etc. Please stick
to the file naming / structuring for consistency.

### Local setup

Make sure to follow the steps mentioned in the
[first time setup](https://github.com/momentum-design/momentum-design/blob/main/CONTRIBUTING.md#first-time-setup)
before running the script.

After setting up, you can build all the dependencies by running the following
commands:

```sh
yarn build
```

To **start storybook and develop components**, run the following command:

```sh
yarn components dev
```

## Development

### Conventions

Our
[Conventions](https://github.com/momentum-design/momentum-design/tree/main/packages/components/conventions)
should be followed whenever any changes to the Components package are made.
Those Conventions will also be checked during PR reviews - for faster turn
around make sure to follow accordingly while development.

### Local linking, using yalc

[yalc](https://github.com/wclr/yalc) can be used to make changes locally to
momentum-design/components and test the changes in a consuming package.

Therefore install yalc globally or in your consuming package. There is already a
publish script which has to be used for proper publishing of the package to
local yalc artifactory:

```sh
# Run in root of momentum-design:

yarn components:yalc:publish
```
