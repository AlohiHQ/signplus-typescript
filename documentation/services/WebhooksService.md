# WebhooksService

A list of all methods in the `WebhooksService` service. Click on the method name to view detailed information about that method.

| Methods                       | Description   |
| :---------------------------- | :------------ |
| [listWebhooks](#listwebhooks) | List webhooks |

## listWebhooks

List webhooks

- HTTP Method: `POST`
- Endpoint: `/webhooks`

**Parameters**

| Name   | Type                                                    | Required | Description       |
| :----- | :------------------------------------------------------ | :------- | :---------------- |
| body   | [ListWebhooksRequest](../models/ListWebhooksRequest.md) | ✅       | The request body. |
| accept | string                                                  | ✅       |                   |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { ListWebhooksRequest, Signplus } from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const listWebhooksRequest: ListWebhooksRequest = {
    webhookId: '<string>',
    event: 'ENVELOPE_COMPLETED',
  };

  const data = await signplus.webhooks.listWebhooks(listWebhooksRequest, {
    accept: 'application/json',
  });

  console.log(data);
})();
```
