# TemplateTemplateIdAttachmentsPlaceholdersService

A list of all methods in the `TemplateTemplateIdAttachmentsPlaceholdersService` service. Click on the method name to view detailed information about that method.

| Methods                                                                   | Description                                                     |
| :------------------------------------------------------------------------ | :-------------------------------------------------------------- |
| [setTemplateAttachmentsPlaceholders](#settemplateattachmentsplaceholders) | Placeholders to be set, completely replacing the existing ones. |

## setTemplateAttachmentsPlaceholders

Placeholders to be set, completely replacing the existing ones.

- HTTP Method: `PUT`
- Endpoint: `/template/{template_id}/attachments/placeholders`

**Parameters**

| Name       | Type                                                                                                | Required | Description       |
| :--------- | :-------------------------------------------------------------------------------------------------- | :------- | :---------------- |
| body       | [SetTemplateAttachmentsPlaceholdersRequest](../models/SetTemplateAttachmentsPlaceholdersRequest.md) | ✅       | The request body. |
| templateId | string                                                                                              | ✅       |                   |
| accept     | string                                                                                              | ✅       |                   |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import {
  SetTemplateAttachmentsPlaceholdersRequest,
  SetTemplateAttachmentsPlaceholdersRequestPlaceholders,
  Signplus,
} from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const setTemplateAttachmentsPlaceholdersRequestPlaceholders: SetTemplateAttachmentsPlaceholdersRequestPlaceholders =
    {
      recipientId: '<string>',
      name: '<string>',
      required: '<boolean>',
      multiple: '<boolean>',
      id: '<string>',
      hint: '<string>',
    };

  const setTemplateAttachmentsPlaceholdersRequest: SetTemplateAttachmentsPlaceholdersRequest = {
    placeholders: [setTemplateAttachmentsPlaceholdersRequestPlaceholders],
  };

  const data =
    await signplus.templateTemplateIdAttachmentsPlaceholders.setTemplateAttachmentsPlaceholders(
      'template_id',
      setTemplateAttachmentsPlaceholdersRequest,
      {
        accept: 'application/json',
      },
    );

  console.log(data);
})();
```
