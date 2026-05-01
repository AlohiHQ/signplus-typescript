# TemplateTemplateIdAnnotationsService

A list of all methods in the `TemplateTemplateIdAnnotationsService` service. Click on the method name to view detailed information about that method.

| Methods                                           | Description              |
| :------------------------------------------------ | :----------------------- |
| [getTemplateAnnotations](#gettemplateannotations) | Get template annotations |

## getTemplateAnnotations

Get template annotations

- HTTP Method: `GET`
- Endpoint: `/template/{template_id}/annotations`

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

  const data = await signplus.templateTemplateIdAnnotations.getTemplateAnnotations('template_id', {
    accept: 'application/json',
  });

  console.log(data);
})();
```
