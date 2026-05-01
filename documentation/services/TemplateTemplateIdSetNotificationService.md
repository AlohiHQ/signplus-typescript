# TemplateTemplateIdSetNotificationService

A list of all methods in the `TemplateTemplateIdSetNotificationService` service. Click on the method name to view detailed information about that method.

| Methods                                             | Description               |
| :-------------------------------------------------- | :------------------------ |
| [setTemplateNotification](#settemplatenotification) | Set template notification |

## setTemplateNotification

Set template notification

- HTTP Method: `PUT`
- Endpoint: `/template/{template_id}/set_notification`

**Parameters**

| Name       | Type                                                                          | Required | Description       |
| :--------- | :---------------------------------------------------------------------------- | :------- | :---------------- |
| body       | [SetTemplateNotificationRequest](../models/SetTemplateNotificationRequest.md) | ✅       | The request body. |
| templateId | string                                                                        | ✅       |                   |
| accept     | string                                                                        | ✅       |                   |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { SetTemplateNotificationRequest, Signplus } from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const setTemplateNotificationRequest: SetTemplateNotificationRequest = {
    subject: '<string>',
    message: '<string>',
    reminderInterval: '<integer>',
  };

  const data = await signplus.templateTemplateIdSetNotification.setTemplateNotification(
    'template_id',
    setTemplateNotificationRequest,
    {
      accept: 'application/json',
    },
  );

  console.log(data);
})();
```
