# FileIdService

A list of all methods in the `FileIdService` service. Click on the method name to view detailed information about that method.

| Methods                                 | Description                  |
| :-------------------------------------- | :--------------------------- |
| [getAttachmentFile](#getattachmentfile) | Get envelope attachment file |

## getAttachmentFile

Get envelope attachment file

- HTTP Method: `GET`
- Endpoint: `/envelope/{envelope_id}/attachments/{file_id}`

**Parameters**

| Name       | Type   | Required | Description |
| :--------- | :----- | :------- | :---------- |
| envelopeId | string | ✅       |             |
| fileId     | string | ✅       |             |
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

  const data = await signplus.fileId.getAttachmentFile('envelope_id', 'file_id', {
    accept: 'application/octet-stream',
  });

  console.log(data);
})();
```
