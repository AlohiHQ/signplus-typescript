# SetCommentService

A list of all methods in the `SetCommentService` service. Click on the method name to view detailed information about that method.

| Methods                                   | Description          |
| :---------------------------------------- | :------------------- |
| [setEnvelopeComment](#setenvelopecomment) | Set envelope comment |

## setEnvelopeComment

Set envelope comment

- HTTP Method: `PUT`
- Endpoint: `/envelope/{envelope_id}/set_comment`

**Parameters**

| Name       | Type                                                                | Required | Description       |
| :--------- | :------------------------------------------------------------------ | :------- | :---------------- |
| body       | [SetEnvelopeCommentRequest](../models/SetEnvelopeCommentRequest.md) | ✅       | The request body. |
| envelopeId | string                                                              | ✅       |                   |
| accept     | string                                                              | ✅       |                   |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { SetEnvelopeCommentRequest, Signplus } from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const setEnvelopeCommentRequest: SetEnvelopeCommentRequest = {
    comment: 'string',
  };

  const data = await signplus.setComment.setEnvelopeComment(
    'envelope_id',
    setEnvelopeCommentRequest,
    {
      accept: 'application/json',
    },
  );

  console.log(data);
})();
```
