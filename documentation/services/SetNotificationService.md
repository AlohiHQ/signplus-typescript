# SetNotificationService

A list of all methods in the `SetNotificationService` service. Click on the method name to view detailed information about that method.

| Methods                                             | Description               |
| :-------------------------------------------------- | :------------------------ |
| [setEnvelopeNotification](#setenvelopenotification) | Set envelope notification |

## setEnvelopeNotification

Set envelope notification

- HTTP Method: `PUT`
- Endpoint: `/envelope/{envelope_id}/set_notification`

**Parameters**

| Name       | Type                                                                          | Required | Description       |
| :--------- | :---------------------------------------------------------------------------- | :------- | :---------------- |
| body       | [SetEnvelopeNotificationRequest](../models/SetEnvelopeNotificationRequest.md) | ✅       | The request body. |
| envelopeId | string                                                                        | ✅       |                   |
| accept     | string                                                                        | ✅       |                   |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { SetEnvelopeNotificationRequest, Signplus } from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const setEnvelopeNotificationRequest: SetEnvelopeNotificationRequest = {
    subject: 'string',
    message: 'string',
    reminderInterval: 4732,
  };

  const data = await signplus.setNotification.setEnvelopeNotification(
    'envelope_id',
    setEnvelopeNotificationRequest,
    {
      accept: 'application/json',
    },
  );

  console.log(data);
})();
```
