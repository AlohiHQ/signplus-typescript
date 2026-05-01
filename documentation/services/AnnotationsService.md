# AnnotationsService

A list of all methods in the `AnnotationsService` service. Click on the method name to view detailed information about that method.

| Methods                                           | Description              |
| :------------------------------------------------ | :----------------------- |
| [getEnvelopeAnnotations](#getenvelopeannotations) | Get envelope annotations |

## getEnvelopeAnnotations

Get envelope annotations

- HTTP Method: `GET`
- Endpoint: `/envelope/{envelope_id}/annotations`

**Parameters**

| Name       | Type   | Required | Description |
| :--------- | :----- | :------- | :---------- |
| envelopeId | string | ✅       |             |
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

  const data = await signplus.annotations.getEnvelopeAnnotations('envelope_id', {
    accept: 'application/json',
  });

  console.log(data);
})();
```
