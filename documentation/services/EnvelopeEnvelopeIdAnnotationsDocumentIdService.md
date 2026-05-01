# EnvelopeEnvelopeIdAnnotationsDocumentIdService

A list of all methods in the `EnvelopeEnvelopeIdAnnotationsDocumentIdService` service. Click on the method name to view detailed information about that method.

| Methods                                                           | Description                       |
| :---------------------------------------------------------------- | :-------------------------------- |
| [getEnvelopeDocumentAnnotations](#getenvelopedocumentannotations) | Get envelope document annotations |

## getEnvelopeDocumentAnnotations

Get envelope document annotations

- HTTP Method: `GET`
- Endpoint: `/envelope/{envelope_id}/annotations/{document_id}`

**Parameters**

| Name       | Type   | Required | Description |
| :--------- | :----- | :------- | :---------- |
| envelopeId | string | ✅       |             |
| documentId | string | ✅       |             |
| accept     | string | ✅       |             |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { Signplus } from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const data =
    await signplus.envelopeEnvelopeIdAnnotationsDocumentId.getEnvelopeDocumentAnnotations(
      'envelope_id',
      'document_id',
      {
        accept: 'application/json',
      },
    );

  console.log(data);
})();
```
