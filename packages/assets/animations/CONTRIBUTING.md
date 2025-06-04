# Contribution Guide

In order to add animations to this package, the new animations Lottie files must be added to the `src` folder. Once it is approved by one of our team members, it will be published.

See our [main contributing guide](https://github.com/momentum-design/momentum-design/blob/main/CONTRIBUTING.md) for more information.

## SVG animations

Exported SVG files might contain some unnecessary metadata. To remove it, you can use [SVGO](https://github.com/svg/svgo) or [SVGOMG](https://jakearchibald.github.io/svgomg/)

Make sure the result works in all major browsers, including Safari and Firefox.


The default settings is Ok, except the following options should be disabled:

- `Remove hidden elements`
- `Collpase useless groups`
