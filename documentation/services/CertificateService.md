# CertificateService

A list of all methods in the `CertificateService` service. Click on the method name to view detailed information about that method.

| Methods                                                     | Description                                        |
| :---------------------------------------------------------- | :------------------------------------------------- |
| [downloadEnvelopeCertificate](#downloadenvelopecertificate) | Download certificate of completion for an envelope |

## downloadEnvelopeCertificate

Download certificate of completion for an envelope

- HTTP Method: `GET`
- Endpoint: `/envelope/{envelope_id}/certificate`

**Parameters**

| Name       | Type   | Required | Description |
| :--------- | :----- | :------- | :---------- |
| envelopeId | string | ✅       |             |
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

  const data = await signplus.certificate.downloadEnvelopeCertificate('envelope_id', {
    accept: 'application/pdf',
  });

  console.log(data);
})();
```
