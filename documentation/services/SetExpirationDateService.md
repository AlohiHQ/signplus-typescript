# SetExpirationDateService

A list of all methods in the `SetExpirationDateService` service. Click on the method name to view detailed information about that method.

| Methods                                                 | Description                  |
| :------------------------------------------------------ | :--------------------------- |
| [setEnvelopeExpirationDate](#setenvelopeexpirationdate) | Set envelope expiration date |

## setEnvelopeExpirationDate

Set envelope expiration date

- HTTP Method: `PUT`
- Endpoint: `/envelope/{envelope_id}/set_expiration_date`

**Parameters**

| Name       | Type                                                                              | Required | Description       |
| :--------- | :-------------------------------------------------------------------------------- | :------- | :---------------- |
| body       | [SetEnvelopeExpirationDateRequest](../models/SetEnvelopeExpirationDateRequest.md) | ✅       | The request body. |
| envelopeId | string                                                                            | ✅       |                   |
| accept     | string                                                                            | ✅       |                   |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { SetEnvelopeExpirationDateRequest, Signplus } from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const setEnvelopeExpirationDateRequest: SetEnvelopeExpirationDateRequest = {
    expiresAt: 5958,
  };

  const data = await signplus.setExpirationDate.setEnvelopeExpirationDate(
    'envelope_id',
    setEnvelopeExpirationDateRequest,
    {
      accept: 'application/json',
    },
  );

  console.log(data);
})();
```
