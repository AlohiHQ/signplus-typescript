# TemplateTemplateIdAttachmentsSettingsService

A list of all methods in the `TemplateTemplateIdAttachmentsSettingsService` service. Click on the method name to view detailed information about that method.

| Methods                                                           | Description                      |
| :---------------------------------------------------------------- | :------------------------------- |
| [setTemplateAttachmentsSettings](#settemplateattachmentssettings) | Set template attachment settings |

## setTemplateAttachmentsSettings

Set template attachment settings

- HTTP Method: `PUT`
- Endpoint: `/template/{template_id}/attachments/settings`

**Parameters**

| Name       | Type                                                                                        | Required | Description       |
| :--------- | :------------------------------------------------------------------------------------------ | :------- | :---------------- |
| body       | [SetTemplateAttachmentsSettingsRequest](../models/SetTemplateAttachmentsSettingsRequest.md) | ✅       | The request body. |
| templateId | string                                                                                      | ✅       |                   |
| accept     | string                                                                                      | ✅       |                   |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import {
  SetTemplateAttachmentsSettingsRequest,
  SetTemplateAttachmentsSettingsRequestSettings,
  Signplus,
} from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const setTemplateAttachmentsSettingsRequestSettings: SetTemplateAttachmentsSettingsRequestSettings =
    {
      visibleToRecipients: true,
    };

  const setTemplateAttachmentsSettingsRequest: SetTemplateAttachmentsSettingsRequest = {
    settings: setTemplateAttachmentsSettingsRequestSettings,
  };

  const data = await signplus.templateTemplateIdAttachmentsSettings.setTemplateAttachmentsSettings(
    'template_id',
    setTemplateAttachmentsSettingsRequest,
    {
      accept: 'application/json',
    },
  );

  console.log(data);
})();
```
