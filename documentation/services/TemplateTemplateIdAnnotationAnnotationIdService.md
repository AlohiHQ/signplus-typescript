# TemplateTemplateIdAnnotationAnnotationIdService

A list of all methods in the `TemplateTemplateIdAnnotationAnnotationIdService` service. Click on the method name to view detailed information about that method.

| Methods                                               | Description                |
| :---------------------------------------------------- | :------------------------- |
| [deleteTemplateAnnotation](#deletetemplateannotation) | Delete template annotation |

## deleteTemplateAnnotation

Delete template annotation

- HTTP Method: `DELETE`
- Endpoint: `/template/{template_id}/annotation/{annotation_id}`

**Parameters**

| Name         | Type   | Required | Description |
| :----------- | :----- | :------- | :---------- |
| templateId   | string | ✅       |             |
| annotationId | string | ✅       |             |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { Signplus } from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const data = await signplus.templateTemplateIdAnnotationAnnotationId.deleteTemplateAnnotation(
    'template_id',
    'annotation_id',
  );

  console.log(data);
})();
```
