# TemplateTemplateIdRenameService

A list of all methods in the `TemplateTemplateIdRenameService` service. Click on the method name to view detailed information about that method.

| Methods                           | Description     |
| :-------------------------------- | :-------------- |
| [renameTemplate](#renametemplate) | Rename template |

## renameTemplate

Rename template

- HTTP Method: `PUT`
- Endpoint: `/template/{template_id}/rename`

**Parameters**

| Name       | Type                                                        | Required | Description       |
| :--------- | :---------------------------------------------------------- | :------- | :---------------- |
| body       | [RenameTemplateRequest](../models/RenameTemplateRequest.md) | ✅       | The request body. |
| templateId | string                                                      | ✅       |                   |
| accept     | string                                                      | ✅       |                   |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { RenameTemplateRequest, Signplus } from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const renameTemplateRequest: RenameTemplateRequest = {
    name: '<string>',
  };

  const data = await signplus.templateTemplateIdRename.renameTemplate(
    'template_id',
    renameTemplateRequest,
    {
      accept: 'application/json',
    },
  );

  console.log(data);
})();
```
