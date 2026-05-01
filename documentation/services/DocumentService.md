# DocumentService

A list of all methods in the `DocumentService` service. Click on the method name to view detailed information about that method.

| Methods                                     | Description           |
| :------------------------------------------ | :-------------------- |
| [addEnvelopeDocument](#addenvelopedocument) | Add envelope document |

## addEnvelopeDocument

Add envelope document

- HTTP Method: `POST`
- Endpoint: `/envelope/{envelope_id}/document`

**Parameters**

| Name       | Type                                                                  | Required | Description       |
| :--------- | :-------------------------------------------------------------------- | :------- | :---------------- |
| body       | [AddEnvelopeDocumentRequest](../models/AddEnvelopeDocumentRequest.md) | ✅       | The request body. |
| envelopeId | string                                                                | ✅       |                   |
| accept     | string                                                                | ✅       |                   |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { AddEnvelopeDocumentRequest, Signplus } from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const addEnvelopeDocumentRequest: AddEnvelopeDocumentRequest = {
    file: new ArrayBuffer(0),
  };

  const data = await signplus.document.addEnvelopeDocument(
    'envelope_id',
    addEnvelopeDocumentRequest,
    {
      accept: 'application/json',
    },
  );

  console.log(data);
})();
```
