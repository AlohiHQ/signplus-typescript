# TemplateTemplateIdSetCommentService

A list of all methods in the `TemplateTemplateIdSetCommentService` service. Click on the method name to view detailed information about that method.

| Methods                                   | Description          |
| :---------------------------------------- | :------------------- |
| [setTemplateComment](#settemplatecomment) | Set template comment |

## setTemplateComment

Set template comment

- HTTP Method: `PUT`
- Endpoint: `/template/{template_id}/set_comment`

**Parameters**

| Name       | Type                                                                | Required | Description       |
| :--------- | :------------------------------------------------------------------ | :------- | :---------------- |
| body       | [SetTemplateCommentRequest](../models/SetTemplateCommentRequest.md) | ✅       | The request body. |
| templateId | string                                                              | ✅       |                   |
| accept     | string                                                              | ✅       |                   |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { SetTemplateCommentRequest, Signplus } from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const setTemplateCommentRequest: SetTemplateCommentRequest = {
    comment: 'string',
  };

  const data = await signplus.templateTemplateIdSetComment.setTemplateComment(
    'template_id',
    setTemplateCommentRequest,
    {
      accept: 'application/json',
    },
  );

  console.log(data);
})();
```
