# DocumentsService

A list of all methods in the `DocumentsService` service. Click on the method name to view detailed information about that method.

| Methods                                       | Description            |
| :-------------------------------------------- | :--------------------- |
| [getEnvelopeDocuments](#getenvelopedocuments) | Get envelope documents |

## getEnvelopeDocuments

Get envelope documents

- HTTP Method: `GET`
- Endpoint: `/envelope/{envelope_id}/documents`

**Parameters**

| Name       | Type   | Required | Description |
| :--------- | :----- | :------- | :---------- |
| envelopeId | string | ✅       |             |
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

  const data = await signplus.documents.getEnvelopeDocuments('envelope_id', {
    accept: 'application/json',
  });

  console.log(data);
})();
```
