# AnnotationIdService

A list of all methods in the `AnnotationIdService` service. Click on the method name to view detailed information about that method.

| Methods                                               | Description                |
| :---------------------------------------------------- | :------------------------- |
| [deleteEnvelopeAnnotation](#deleteenvelopeannotation) | Delete envelope annotation |

## deleteEnvelopeAnnotation

Delete envelope annotation

- HTTP Method: `DELETE`
- Endpoint: `/envelope/{envelope_id}/annotation/{annotation_id}`

**Parameters**

| Name         | Type   | Required | Description |
| :----------- | :----- | :------- | :---------- |
| envelopeId   | string | ✅       |             |
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

  const data = await signplus.annotationId.deleteEnvelopeAnnotation('envelope_id', 'annotation_id');

  console.log(data);
})();
```
