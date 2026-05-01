# SigningStepsService

A list of all methods in the `SigningStepsService` service. Click on the method name to view detailed information about that method.

| Methods                                             | Description                |
| :-------------------------------------------------- | :------------------------- |
| [addEnvelopeSigningSteps](#addenvelopesigningsteps) | Add envelope signing steps |

## addEnvelopeSigningSteps

Add envelope signing steps

- HTTP Method: `POST`
- Endpoint: `/envelope/{envelope_id}/signing_steps`

**Parameters**

| Name       | Type                                                                          | Required | Description       |
| :--------- | :---------------------------------------------------------------------------- | :------- | :---------------- |
| body       | [AddEnvelopeSigningStepsRequest](../models/AddEnvelopeSigningStepsRequest.md) | ✅       | The request body. |
| envelopeId | string                                                                        | ✅       |                   |
| accept     | string                                                                        | ✅       |                   |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import {
  AddEnvelopeSigningStepsRequest,
  AddEnvelopeSigningStepsRequestSigningSteps,
  SigningStepsRecipients1,
  Signplus,
  Verification,
} from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const verification: Verification = {
    type: 'SMS',
    value: 'string',
  };

  const signingStepsRecipients1: SigningStepsRecipients1 = {
    name: 'string',
    email: 'string',
    role: 'IN_PERSON_SIGNER',
    id: 'string',
    uid: 'string',
    verification: verification,
  };

  const addEnvelopeSigningStepsRequestSigningSteps: AddEnvelopeSigningStepsRequestSigningSteps = {
    recipients: [signingStepsRecipients1],
  };

  const addEnvelopeSigningStepsRequest: AddEnvelopeSigningStepsRequest = {
    signingSteps: [addEnvelopeSigningStepsRequestSigningSteps],
  };

  const data = await signplus.signingSteps.addEnvelopeSigningSteps(
    'envelope_id',
    addEnvelopeSigningStepsRequest,
    {
      accept: 'application/json',
    },
  );

  console.log(data);
})();
```
