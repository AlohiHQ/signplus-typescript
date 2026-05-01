# DynamicFieldsService

A list of all methods in the `DynamicFieldsService` service. Click on the method name to view detailed information about that method.

| Methods                                               | Description                 |
| :---------------------------------------------------- | :-------------------------- |
| [setEnvelopeDynamicFields](#setenvelopedynamicfields) | Set envelope dynamic fields |

## setEnvelopeDynamicFields

Set envelope dynamic fields

- HTTP Method: `PUT`
- Endpoint: `/envelope/{envelope_id}/dynamic_fields`

**Parameters**

| Name       | Type                                                                            | Required | Description       |
| :--------- | :------------------------------------------------------------------------------ | :------- | :---------------- |
| body       | [SetEnvelopeDynamicFieldsRequest](../models/SetEnvelopeDynamicFieldsRequest.md) | ✅       | The request body. |
| envelopeId | string                                                                          | ✅       |                   |
| accept     | string                                                                          | ✅       |                   |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import {
  DynamicFields,
  SetEnvelopeDynamicFieldsRequest,
  Signplus,
} from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const dynamicFields: DynamicFields = {
    name: 'string',
    value: 'string',
  };

  const setEnvelopeDynamicFieldsRequest: SetEnvelopeDynamicFieldsRequest = {
    dynamicFields: [dynamicFields],
  };

  const data = await signplus.dynamicFields.setEnvelopeDynamicFields(
    'envelope_id',
    setEnvelopeDynamicFieldsRequest,
    {
      accept: 'application/json',
    },
  );

  console.log(data);
})();
```
