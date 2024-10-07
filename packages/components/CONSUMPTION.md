# Consumption Guide for Global web Library

This consumption guide for the Global Library, `@momentum-design/components` provides detailed instructions on how to effectively access and utilize these components in your web applications, specifically focusing on Web Components and React.

## Installation

To install the library, add the following NPM dependency to your `package.json` with the required version number:

* [**@momentum-design/components**](https://github.com/momentum-design/momentum-design/tree/main/packages/components) - Components Package. [NPMJS Package](https://www.npmjs.com/package/@momentum-design/components)

In order to execute, run the following command:

```bash
npm install @momentum-design/components
``` 
or

```bash
yarn add @momentum-design/components
``` 

## Compatibility

* Webpack 4 (refer to [**Best Practices**](https://lit.dev/docs/releases/upgrade/#using-lit-3-with-webpack-4))

* TypeScript > 4.7

## PreRequisites 

```bash
import '@momentum-design/fonts/dist/css/fonts.css';
import '@momentum-design/tokens/dist/css/theme/webex/dark-stable.css';
import '@momentum-design/tokens/dist/css/theme/webex/light-stable.css';
``` 

## Usage 

Note: 
All code examples below can work with TypeScript versions lower than 4.7 by adding dist into the import path.
For detailed information about each component, refer to the [**Components Docs**](https://momentum-design.github.io/momentum-design/en/components/)

### Top-level Import

Import the browser bundle on the top of the app:

index.html
```bash
<script src="@momentum-design/components/browser/index.js"></script>
<mdc-avatar></mdc-avatar>
``` 

### Component Import

#### Web Components

```bash
import '@momentum-design/components/components/avatar';
<mdc-avatar></mdc-avatar>
``` 

#### React

```bash
import { Avatar } '@momentum-design/components/react';
<Avatar />
``` 