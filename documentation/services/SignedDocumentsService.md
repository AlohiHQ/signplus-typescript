# SignedDocumentsService

A list of all methods in the `SignedDocumentsService` service. Click on the method name to view detailed information about that method.

| Methods                                                             | Description                               |
| :------------------------------------------------------------------ | :---------------------------------------- |
| [downloadEnvelopeSignedDocuments](#downloadenvelopesigneddocuments) | Download signed documents for an envelope |

## downloadEnvelopeSignedDocuments

Download signed documents for an envelope

- HTTP Method: `GET`
- Endpoint: `/envelope/{envelope_id}/signed_documents`

**Parameters**

| Name                    | Type   | Required | Description                                                             |
| :---------------------- | :----- | :------- | :---------------------------------------------------------------------- |
| envelopeId              | string | ✅       |                                                                         |
| accept                  | string | ✅       |                                                                         |
| certificateOfCompletion | string | ❌       | Whether to include the certificate of completion in the downloaded file |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { Signplus } from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const data = await signplus.signedDocuments.downloadEnvelopeSignedDocuments('envelope_id', {
    certificateOfCompletion: 'true',
    accept: 'application/pdf',
  });

  console.log(data);
})();
```
