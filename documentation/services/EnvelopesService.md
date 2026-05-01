# EnvelopesService

A list of all methods in the `EnvelopesService` service. Click on the method name to view detailed information about that method.

| Methods                         | Description    |
| :------------------------------ | :------------- |
| [listEnvelopes](#listenvelopes) | List envelopes |

## listEnvelopes

List envelopes

- HTTP Method: `POST`
- Endpoint: `/envelopes`

**Parameters**

| Name   | Type                                                      | Required | Description       |
| :----- | :-------------------------------------------------------- | :------- | :---------------- |
| body   | [ListEnvelopesRequest](../models/ListEnvelopesRequest.md) | ✅       | The request body. |
| accept | string                                                    | ✅       |                   |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { ListEnvelopesRequest, Signplus } from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const listEnvelopesRequest: ListEnvelopesRequest = {
    name: 'string',
    tags: ['string'],
    comment: 'string',
    ids: ['string'],
    statuses: ['DRAFT'],
    folderIds: ['string'],
    onlyRootFolder: true,
    dateFrom: 6508,
    dateTo: 690,
    uid: 'string',
    first: 6875,
    last: 4384,
    after: 'string',
    before: 'string',
    orderField: 'LAST_DOCUMENT_CHANGE',
    ascending: true,
    includeTrash: true,
  };

  const data = await signplus.envelopes.listEnvelopes(listEnvelopesRequest, {
    accept: 'application/json',
  });

  console.log(data);
})();
```
