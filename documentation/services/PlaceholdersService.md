# PlaceholdersService

A list of all methods in the `PlaceholdersService` service. Click on the method name to view detailed information about that method.

| Methods                                                                   | Description                                                     |
| :------------------------------------------------------------------------ | :-------------------------------------------------------------- |
| [setEnvelopeAttachmentsPlaceholders](#setenvelopeattachmentsplaceholders) | Placeholders to be set, completely replacing the existing ones. |

## setEnvelopeAttachmentsPlaceholders

Placeholders to be set, completely replacing the existing ones.

- HTTP Method: `PUT`
- Endpoint: `/envelope/{envelope_id}/attachments/placeholders`

**Parameters**

| Name       | Type                                                                                                | Required | Description       |
| :--------- | :-------------------------------------------------------------------------------------------------- | :------- | :---------------- |
| body       | [SetEnvelopeAttachmentsPlaceholdersRequest](../models/SetEnvelopeAttachmentsPlaceholdersRequest.md) | ✅       | The request body. |
| envelopeId | string                                                                                              | ✅       |                   |
| accept     | string                                                                                              | ✅       |                   |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import {
  SetEnvelopeAttachmentsPlaceholdersRequest,
  SetEnvelopeAttachmentsPlaceholdersRequestPlaceholders,
  Signplus,
} from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const setEnvelopeAttachmentsPlaceholdersRequestPlaceholders: SetEnvelopeAttachmentsPlaceholdersRequestPlaceholders =
    {
      recipientId: 'string',
      name: 'string',
      required: true,
      multiple: true,
      id: 'string',
      hint: 'string',
    };

  const setEnvelopeAttachmentsPlaceholdersRequest: SetEnvelopeAttachmentsPlaceholdersRequest = {
    placeholders: [setEnvelopeAttachmentsPlaceholdersRequestPlaceholders],
  };

  const data = await signplus.placeholders.setEnvelopeAttachmentsPlaceholders(
    'envelope_id',
    setEnvelopeAttachmentsPlaceholdersRequest,
    {
      accept: 'application/json',
    },
  );

  console.log(data);
})();
```
