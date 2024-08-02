# Envelope

**Properties**

| Name          | Type                  | Required | Description                                                                                                                                                             |
| :------------ | :-------------------- | :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id            | string                | ❌       | Unique identifier of the envelope                                                                                                                                       |
| name          | string                | ❌       | Name of the envelope                                                                                                                                                    |
| comment       | string                | ❌       | Comment for the envelope                                                                                                                                                |
| pages         | number                | ❌       | Total number of pages in the envelope                                                                                                                                   |
| flowType      | EnvelopeFlowType      | ❌       | Flow type of the envelope (REQUEST_SIGNATURE is a request for signature, SIGN_MYSELF is a self-signing flow)                                                            |
| legalityLevel | EnvelopeLegalityLevel | ❌       | Legal level of the envelope (SES is Simple Electronic Signature, QES_EIDAS is Qualified Electronic Signature, QES_ZERTES is Qualified Electronic Signature with Zertes) |
| status        | EnvelopeStatus        | ❌       | Status of the envelope                                                                                                                                                  |
| createdAt     | number                | ❌       | Unix timestamp of the creation date                                                                                                                                     |
| updatedAt     | number                | ❌       | Unix timestamp of the last modification date                                                                                                                            |
| expiresAt     | number                | ❌       | Unix timestamp of the expiration date                                                                                                                                   |
| numRecipients | number                | ❌       | Number of recipients in the envelope                                                                                                                                    |
| isDuplicable  | boolean               | ❌       | Whether the envelope can be duplicated                                                                                                                                  |
| signingSteps  | SigningStep[]         | ❌       |                                                                                                                                                                         |
| documents     | Document[]            | ❌       |                                                                                                                                                                         |
| notification  | EnvelopeNotification  | ❌       |                                                                                                                                                                         |
