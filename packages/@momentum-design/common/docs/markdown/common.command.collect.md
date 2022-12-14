<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@momentum-design/common](./common.md) &gt; [Command](./common.command.md) &gt; [collect](./common.command.collect.md)

## Command.collect() method

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.
> 

Collect all CLI arguments as parameters.

<b>Signature:</b>

```typescript
protected collect(): Params;
```
<b>Returns:</b>

[Params](./common.commandparams.md)

- A Record of parameters provided via the CLI execution.

## Remarks

When providing a CLI execution string to a Command, the arguments must be seperated from the rest of the CLI execution command via the appropriate separator string, wrapped in one empty space on each side.

