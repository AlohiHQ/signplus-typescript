# WebhookService

A list of all methods in the `WebhookService` service. Click on the method name to view detailed information about that method.

| Methods                         | Description    |
| :------------------------------ | :------------- |
| [createWebhook](#createwebhook) | Create webhook |

## createWebhook

Create webhook

- HTTP Method: `POST`
- Endpoint: `/webhook`

**Parameters**

| Name   | Type                                                      | Required | Description       |
| :----- | :-------------------------------------------------------- | :------- | :---------------- |
| body   | [CreateWebhookRequest](../models/CreateWebhookRequest.md) | ✅       | The request body. |
| accept | string                                                    | ✅       |                   |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { CreateWebhookRequest, Signplus } from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const createWebhookRequest: CreateWebhookRequest = {
    event: 'ENVELOPE_AUDIT_TRAIL',
    target: 'string',
  };

  const data = await signplus.webhook.createWebhook(createWebhookRequest, {
    accept: 'application/json',
  });

  console.log(data);
})();
```
