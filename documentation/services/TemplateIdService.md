# TemplateIdService

A list of all methods in the `TemplateIdService` service. Click on the method name to view detailed information about that method.

| Methods                                                   | Description                       |
| :-------------------------------------------------------- | :-------------------------------- |
| [createEnvelopeFromTemplate](#createenvelopefromtemplate) | Create new envelope from template |

## createEnvelopeFromTemplate

Create new envelope from template

- HTTP Method: `POST`
- Endpoint: `/envelope/from_template/{template_id}`

**Parameters**

| Name       | Type                                                                                | Required | Description       |
| :--------- | :---------------------------------------------------------------------------------- | :------- | :---------------- |
| body       | [CreateEnvelopeFromTemplateRequest](../models/CreateEnvelopeFromTemplateRequest.md) | ✅       | The request body. |
| templateId | string                                                                              | ✅       |                   |
| accept     | string                                                                              | ✅       |                   |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { CreateEnvelopeFromTemplateRequest, Signplus } from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const createEnvelopeFromTemplateRequest: CreateEnvelopeFromTemplateRequest = {
    name: 'fND',
    comment: '<string>',
    sandbox: true,
  };

  const data = await signplus.templateId.createEnvelopeFromTemplate(
    'template_id',
    createEnvelopeFromTemplateRequest,
    {
      accept: 'application/json',
    },
  );

  console.log(data);
})();
```
