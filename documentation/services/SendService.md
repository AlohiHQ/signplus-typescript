# SendService

A list of all methods in the `SendService` service. Click on the method name to view detailed information about that method.

| Methods                       | Description                 |
| :---------------------------- | :-------------------------- |
| [sendEnvelope](#sendenvelope) | Send envelope for signature |

## sendEnvelope

Send envelope for signature

- HTTP Method: `POST`
- Endpoint: `/envelope/{envelope_id}/send`

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

  const data = await signplus.send.sendEnvelope('envelope_id', {
    accept: 'application/json',
  });

  console.log(data);
})();
```
