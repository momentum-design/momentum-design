<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@momentum-design/common](./common.md) &gt; [Json](./common.json.md) &gt; [read](./common.json.read.md)

## Json.read() method

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.
> 

Read a file as json at the provided target path.

<b>Signature:</b>

```typescript
static read(target: string, encoding?: BufferEncoding): Promise<any>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  target | string | Path to the file to attempt to read as json. |
|  encoding | BufferEncoding | <i>(Optional)</i> Buffer encoding for the target file. |

<b>Returns:</b>

Promise&lt;any&gt;

- Promise resolving in a json object read from the target file.

