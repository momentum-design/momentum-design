# General Consumption Guide

Consumption can vary by package - the information below is for general consumption.

## with NPM

Consume each individual package by adding the NPM dependency to `package.json` with the version number required:

* [**@momentum-design/animations**](https://github.com/momentum-design/momentum-design/tree/main/packages/%40momentum-design/animations) - Animation assets. [NPMJS Package](https://www.npmjs.com/package/@momentum-design/animations)
* [**@momentum-design/icons**](https://github.com/momentum-design/momentum-design/tree/main/packages/assets/icons) - Icon assets. [NPMJS Package](https://www.npmjs.com/package/@momentum-design/icons)
* [**@momentum-design/illustrations**](https://github.com/momentum-design/momentum-design/tree/main/packages/%40momentum-design/illustrations) - Illustration assets. [NPMJS Package](https://www.npmjs.com/package/@momentum-design/illustrations)
* [**@momentum-design/tokens**](https://github.com/momentum-design/momentum-design/tree/main/packages/%40momentum-design/tokens) - Token assets. [NPMJS Package](https://www.npmjs.com/package/@momentum-design/tokens)
* [**@momentum-design/brand-visuals**](https://github.com/momentum-design/momentum-design/tree/main/packages/%40momentum-design/brand-visuals) - Brand Visual assets. [NPMJS Package](https://www.npmjs.com/package/@momentum-design/brand-visuals)

## without NPM

Assets can be collected directly from `unpkg`, which is a layer on top of npmjs that serves the files in a raw format. To consume these files, a GET request can be made to the files path:

```
# dark-stable theme as json
https://unpkg.com/@momentum-design/tokens/dist/json/theme/webex/dark-stable.json

# light-stable theme as json
https://unpkg.com/@momentum-design/tokens/dist/json/theme/webex/light-stable.json 
```

If a team would like to consume the full package [all assets delivered within the scope of @momentum-design/tokens i.e.], the tar.gz can be acquired by using `curl` and `tar` commands (both available on Mac and [latest Windows](https://learn.microsoft.com/en-us/virtualization/community/team-blog/2017/20171219-tar-and-curl-come-to-windows)).

The snippet example below will download the version of the defined package as a `.tgz` and extract its content (`tokens` as an example, replace accordingly to your needs).

```bash
curl https://registry.npmjs.org/@momentum-design/tokens/-/tokens-0.0.46.tgz --output tokens.tgz
tar -xf tokens.tgz
```
