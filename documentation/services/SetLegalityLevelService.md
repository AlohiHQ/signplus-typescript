# SetLegalityLevelService

A list of all methods in the `SetLegalityLevelService` service. Click on the method name to view detailed information about that method.

| Methods                                               | Description                 |
| :---------------------------------------------------- | :-------------------------- |
| [setEnvelopeLegalityLevel](#setenvelopelegalitylevel) | Set envelope legality level |

## setEnvelopeLegalityLevel

Set envelope legality level

- HTTP Method: `PUT`
- Endpoint: `/envelope/{envelope_id}/set_legality_level`

**Parameters**

| Name       | Type                                                                            | Required | Description       |
| :--------- | :------------------------------------------------------------------------------ | :------- | :---------------- |
| body       | [SetEnvelopeLegalityLevelRequest](../models/SetEnvelopeLegalityLevelRequest.md) | ✅       | The request body. |
| envelopeId | string                                                                          | ✅       |                   |
| accept     | string                                                                          | ✅       |                   |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { SetEnvelopeLegalityLevelRequest, Signplus } from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const setEnvelopeLegalityLevelRequest: SetEnvelopeLegalityLevelRequest = {
    legalityLevel: 'SES',
  };

  const data = await signplus.setLegalityLevel.setEnvelopeLegalityLevel(
    'envelope_id',
    setEnvelopeLegalityLevelRequest,
    {
      accept: 'application/json',
    },
  );

  console.log(data);
})();
```
