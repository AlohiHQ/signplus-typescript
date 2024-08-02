# Template

**Properties**

| Name            | Type                  | Required | Description                                                                                                                                                             |
| :-------------- | :-------------------- | :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id              | string                | ❌       | Unique identifier of the template                                                                                                                                       |
| name            | string                | ❌       | Name of the template                                                                                                                                                    |
| comment         | string                | ❌       | Comment for the template                                                                                                                                                |
| pages           | number                | ❌       | Total number of pages in the template                                                                                                                                   |
| legalityLevel   | EnvelopeLegalityLevel | ❌       | Legal level of the envelope (SES is Simple Electronic Signature, QES_EIDAS is Qualified Electronic Signature, QES_ZERTES is Qualified Electronic Signature with Zertes) |
| createdAt       | number                | ❌       | Unix timestamp of the creation date                                                                                                                                     |
| updatedAt       | number                | ❌       | Unix timestamp of the last modification date                                                                                                                            |
| expirationDelay | number                | ❌       | Expiration delay added to the current time when an envelope is created from this template                                                                               |
| numRecipients   | number                | ❌       | Number of recipients in the envelope                                                                                                                                    |
| signingSteps    | TemplateSigningStep[] | ❌       |                                                                                                                                                                         |
| documents       | Document[]            | ❌       |                                                                                                                                                                         |
| notification    | EnvelopeNotification  | ❌       |                                                                                                                                                                         |
| dynamicFields   | string[]              | ❌       | List of dynamic fields                                                                                                                                                  |
