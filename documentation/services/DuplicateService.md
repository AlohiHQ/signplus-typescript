# DuplicateService

A list of all methods in the `DuplicateService` service. Click on the method name to view detailed information about that method.

| Methods                                 | Description        |
| :-------------------------------------- | :----------------- |
| [duplicateEnvelope](#duplicateenvelope) | Duplicate envelope |

## duplicateEnvelope

Duplicate envelope

- HTTP Method: `POST`
- Endpoint: `/envelope/{envelope_id}/duplicate`

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

  const data = await signplus.duplicate.duplicateEnvelope('envelope_id', {
    accept: 'application/json',
  });

  console.log(data);
})();
```
