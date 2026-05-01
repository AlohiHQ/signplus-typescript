# TemplateTemplateIdDocumentService

A list of all methods in the `TemplateTemplateIdDocumentService` service. Click on the method name to view detailed information about that method.

| Methods                                     | Description           |
| :------------------------------------------ | :-------------------- |
| [addTemplateDocument](#addtemplatedocument) | Add template document |

## addTemplateDocument

Add template document

- HTTP Method: `POST`
- Endpoint: `/template/{template_id}/document`

**Parameters**

| Name       | Type                                                                  | Required | Description       |
| :--------- | :-------------------------------------------------------------------- | :------- | :---------------- |
| body       | [AddTemplateDocumentRequest](../models/AddTemplateDocumentRequest.md) | ✅       | The request body. |
| templateId | string                                                                | ✅       |                   |
| accept     | string                                                                | ✅       |                   |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { AddTemplateDocumentRequest, Signplus } from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const addTemplateDocumentRequest: AddTemplateDocumentRequest = {
    file: new ArrayBuffer(0),
  };

  const data = await signplus.templateTemplateIdDocument.addTemplateDocument(
    'template_id',
    addTemplateDocumentRequest,
    {
      accept: 'application/json',
    },
  );

  console.log(data);
})();
```
