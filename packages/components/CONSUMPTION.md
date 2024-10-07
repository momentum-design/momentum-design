# Consumption Guide for Global web Library

This consumption guide for the Global Library, `@momentum-design/components` provides detailed instructions on how to effectively access and utilize these components in your web applications, specifically focusing on Web Components and React.

## Installation

To install the library for use, consume below package by adding the NPM dependency to `package.json` with the version number required:

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

To ensure compatibility with lit 3 and Webpack 4, follow these recommendations:

Please refer [**Best Practices**](https://lit.dev/docs/releases/upgrade/#using-lit-3-with-webpack-4)

## Usage 

To use the components in a web application:

1. Import the component in your JavaScript file. For example, import avatar component.

### Web Components

```bash
import '@momentum-design/components/components/avatar';
``` 

### React

```bash
import '@momentum-design/components/react/avatar';
``` 

2. Add the components to your HTML file.

```bash
<mdc-avatar src="" scale="" type=""></mdc-avatar>
``` 
In order to understand properties and attributes of the component in detail, Please refer [**Components Docs**](https://momentum-design.github.io/momentum-design/en/components/)