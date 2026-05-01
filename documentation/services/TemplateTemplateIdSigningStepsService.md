# TemplateTemplateIdSigningStepsService

A list of all methods in the `TemplateTemplateIdSigningStepsService` service. Click on the method name to view detailed information about that method.

| Methods                                             | Description                |
| :-------------------------------------------------- | :------------------------- |
| [addTemplateSigningSteps](#addtemplatesigningsteps) | Add template signing steps |

## addTemplateSigningSteps

Add template signing steps

- HTTP Method: `POST`
- Endpoint: `/template/{template_id}/signing_steps`

**Parameters**

| Name       | Type                                                                          | Required | Description       |
| :--------- | :---------------------------------------------------------------------------- | :------- | :---------------- |
| body       | [AddTemplateSigningStepsRequest](../models/AddTemplateSigningStepsRequest.md) | ✅       | The request body. |
| templateId | string                                                                        | ✅       |                   |
| accept     | string                                                                        | ✅       |                   |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import {
  AddTemplateSigningStepsRequest,
  AddTemplateSigningStepsRequestSigningSteps,
  SigningStepsRecipients2,
  Signplus,
} from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const signingStepsRecipients2: SigningStepsRecipients2 = {
    id: 'string',
    uid: 'string',
    name: 'string',
    email: 'string',
    role: 'RECEIVES_COPY',
  };

  const addTemplateSigningStepsRequestSigningSteps: AddTemplateSigningStepsRequestSigningSteps = {
    recipients: [signingStepsRecipients2],
  };

  const addTemplateSigningStepsRequest: AddTemplateSigningStepsRequest = {
    signingSteps: [addTemplateSigningStepsRequestSigningSteps],
  };

  const data = await signplus.templateTemplateIdSigningSteps.addTemplateSigningSteps(
    'template_id',
    addTemplateSigningStepsRequest,
    {
      accept: 'application/json',
    },
  );

  console.log(data);
})();
```
