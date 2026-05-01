# SettingsService

A list of all methods in the `SettingsService` service. Click on the method name to view detailed information about that method.

| Methods                                                           | Description                      |
| :---------------------------------------------------------------- | :------------------------------- |
| [setEnvelopeAttachmentsSettings](#setenvelopeattachmentssettings) | Set envelope attachment settings |

## setEnvelopeAttachmentsSettings

Set envelope attachment settings

- HTTP Method: `PUT`
- Endpoint: `/envelope/{envelope_id}/attachments/settings`

**Parameters**

| Name       | Type                                                                                        | Required | Description       |
| :--------- | :------------------------------------------------------------------------------------------ | :------- | :---------------- |
| body       | [SetEnvelopeAttachmentsSettingsRequest](../models/SetEnvelopeAttachmentsSettingsRequest.md) | ✅       | The request body. |
| envelopeId | string                                                                                      | ✅       |                   |
| accept     | string                                                                                      | ✅       |                   |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import {
  SetEnvelopeAttachmentsSettingsRequest,
  SetEnvelopeAttachmentsSettingsRequestSettings,
  Signplus,
} from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const setEnvelopeAttachmentsSettingsRequestSettings: SetEnvelopeAttachmentsSettingsRequestSettings =
    {
      visibleToRecipients: true,
    };

  const setEnvelopeAttachmentsSettingsRequest: SetEnvelopeAttachmentsSettingsRequest = {
    settings: setEnvelopeAttachmentsSettingsRequestSettings,
  };

  const data = await signplus.settings.setEnvelopeAttachmentsSettings(
    'envelope_id',
    setEnvelopeAttachmentsSettingsRequest,
    {
      accept: 'application/json',
    },
  );

  console.log(data);
})();
```
