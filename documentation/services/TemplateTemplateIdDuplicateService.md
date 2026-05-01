# TemplateTemplateIdDuplicateService

A list of all methods in the `TemplateTemplateIdDuplicateService` service. Click on the method name to view detailed information about that method.

| Methods                                 | Description        |
| :-------------------------------------- | :----------------- |
| [duplicateTemplate](#duplicatetemplate) | Duplicate template |

## duplicateTemplate

Duplicate template

- HTTP Method: `POST`
- Endpoint: `/template/{template_id}/duplicate`

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

  const data = await signplus.templateTemplateIdDuplicate.duplicateTemplate('template_id', {
    accept: 'application/json',
  });

  console.log(data);
})();
```
