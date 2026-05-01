# EnvelopeService

A list of all methods in the `EnvelopeService` service. Click on the method name to view detailed information about that method.

| Methods                           | Description         |
| :-------------------------------- | :------------------ |
| [createEnvelope](#createenvelope) | Create new envelope |

## createEnvelope

Create new envelope

- HTTP Method: `POST`
- Endpoint: `/envelope`

**Parameters**

| Name   | Type                                                        | Required | Description       |
| :----- | :---------------------------------------------------------- | :------- | :---------------- |
| body   | [CreateEnvelopeRequest](../models/CreateEnvelopeRequest.md) | ✅       | The request body. |
| accept | string                                                      | ✅       |                   |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { CreateEnvelopeRequest, Signplus } from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const createEnvelopeRequest: CreateEnvelopeRequest = {
    name: 'PNeiZUQ9LB9',
    legalityLevel: 'QES_ZERTES',
    expiresAt: '<integer>',
    comment: '<string>',
    sandbox: true,
  };

  const data = await signplus.envelope.createEnvelope(createEnvelopeRequest, {
    accept: 'application/json',
  });

  console.log(data);
})();
```
