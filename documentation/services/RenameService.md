# RenameService

A list of all methods in the `RenameService` service. Click on the method name to view detailed information about that method.

| Methods                           | Description     |
| :-------------------------------- | :-------------- |
| [renameEnvelope](#renameenvelope) | Rename envelope |

## renameEnvelope

Rename envelope

- HTTP Method: `PUT`
- Endpoint: `/envelope/{envelope_id}/rename`

**Parameters**

| Name       | Type                                                        | Required | Description       |
| :--------- | :---------------------------------------------------------- | :------- | :---------------- |
| body       | [RenameEnvelopeRequest](../models/RenameEnvelopeRequest.md) | ✅       | The request body. |
| envelopeId | string                                                      | ✅       |                   |
| accept     | string                                                      | ✅       |                   |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { RenameEnvelopeRequest, Signplus } from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const renameEnvelopeRequest: RenameEnvelopeRequest = {
    name: '<string>',
  };

  const data = await signplus.rename.renameEnvelope('envelope_id', renameEnvelopeRequest, {
    accept: 'application/json',
  });

  console.log(data);
})();
```
