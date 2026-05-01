# TemplateTemplateIdAnnotationsDocumentIdService

A list of all methods in the `TemplateTemplateIdAnnotationsDocumentIdService` service. Click on the method name to view detailed information about that method.

| Methods                                                           | Description                       |
| :---------------------------------------------------------------- | :-------------------------------- |
| [getDocumentTemplateAnnotations](#getdocumenttemplateannotations) | Get document template annotations |

## getDocumentTemplateAnnotations

Get document template annotations

- HTTP Method: `GET`
- Endpoint: `/template/{template_id}/annotations/{document_id}`

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

  const data =
    await signplus.templateTemplateIdAnnotationsDocumentId.getDocumentTemplateAnnotations(
      'template_id',
      'document_id',
      {
        accept: 'application/json',
      },
    );

  console.log(data);
})();
```
