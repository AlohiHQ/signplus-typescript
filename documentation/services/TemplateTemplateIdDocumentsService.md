# TemplateTemplateIdDocumentsService

A list of all methods in the `TemplateTemplateIdDocumentsService` service. Click on the method name to view detailed information about that method.

| Methods                                       | Description            |
| :-------------------------------------------- | :--------------------- |
| [getTemplateDocuments](#gettemplatedocuments) | Get template documents |

## getTemplateDocuments

Get template documents

- HTTP Method: `GET`
- Endpoint: `/template/{template_id}/documents`

**Parameters**

| Name       | Type   | Required | Description |
| :--------- | :----- | :------- | :---------- |
| templateId | string | ✅       |             |
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

  const data = await signplus.templateTemplateIdDocuments.getTemplateDocuments('template_id', {
    accept: 'application/json',
  });

  console.log(data);
})();
```
