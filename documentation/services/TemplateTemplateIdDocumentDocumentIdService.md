# TemplateTemplateIdDocumentDocumentIdService

A list of all methods in the `TemplateTemplateIdDocumentDocumentIdService` service. Click on the method name to view detailed information about that method.

| Methods                                     | Description           |
| :------------------------------------------ | :-------------------- |
| [getTemplateDocument](#gettemplatedocument) | Get template document |

## getTemplateDocument

Get template document

- HTTP Method: `GET`
- Endpoint: `/template/{template_id}/document/{document_id}`

**Parameters**

| Name       | Type   | Required | Description |
| :--------- | :----- | :------- | :---------- |
| templateId | string | ✅       |             |
| documentId | string | ✅       |             |
| accept     | string | ✅       |             |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { Signplus } from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const data = await signplus.templateTemplateIdDocumentDocumentId.getTemplateDocument(
    'template_id',
    'document_id',
    {
      accept: 'application/json',
    },
  );

  console.log(data);
})();
```
