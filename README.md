# Signplus TypeScript SDK 3.0.0

Welcome to the Signplus SDK documentation. This guide will help you get started with integrating and using the Signplus SDK in your project.

## Versions

- API version: `2.5.0`
- SDK version: `3.0.0`

## About the API

Integrate legally-binding electronic signature to your workflow

Contact Support:
Name: Sign.Plus
Email: support@alohi.com

## Table of Contents

- [Setup & Configuration](#setup--configuration)
  - [Supported Language Versions](#supported-language-versions)
  - [Installation](#installation)
- [Authentication](#authentication)
  - [Access Token Authentication](#access-token-authentication)
- [Setting a Custom Timeout](#setting-a-custom-timeout)
- [Sample Usage](#sample-usage)
- [Services](#services)
- [Models](#models)
- [License](#license)

# Setup & Configuration

## Supported Language Versions

This SDK is compatible with the following versions: `TypeScript >= 4.8.4`

## Installation

To get started with the SDK, we recommend installing using `npm` or `yarn`:

```bash
npm install @alohi/signplus-typescript
```

or

```bash
yarn add @alohi/signplus-typescript
```

## Authentication

### Access Token Authentication

The Signplus API uses an Access Token for authentication.

This token must be provided to authenticate your requests to the API.

#### Setting the Access Token

When you initialize the SDK, you can set the access token as follows:

```ts
const sdk = new Signplus({ token: 'YOUR_TOKEN' });
```

If you need to set or update the access token after initializing the SDK, you can use:

```ts
const sdk = new Signplus();
sdk.token = 'YOUR_TOKEN';
```

## Setting a Custom Timeout

You can set a custom timeout for the SDK's HTTP requests as follows:

```ts
const signplus = new Signplus({ timeout: 10000 });
```

# Sample Usage

Below is a comprehensive example demonstrating how to authenticate and call a simple endpoint:

```ts
import { Signplus } from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const data = await signplus.envelopeId.deleteEnvelope('envelope_id');

  console.log(data);
})();
```

## Services

The SDK provides various services to interact with the API.

<details>
<summary>Below is a list of all available services with links to their detailed documentation:</summary>

| Name                                                                                                                           |
| :----------------------------------------------------------------------------------------------------------------------------- |
| [TemplateIdService](documentation/services/TemplateIdService.md)                                                               |
| [SignedDocumentsService](documentation/services/SignedDocumentsService.md)                                                     |
| [CertificateService](documentation/services/CertificateService.md)                                                             |
| [DocumentIdService](documentation/services/DocumentIdService.md)                                                               |
| [DocumentService](documentation/services/DocumentService.md)                                                                   |
| [DocumentsService](documentation/services/DocumentsService.md)                                                                 |
| [DynamicFieldsService](documentation/services/DynamicFieldsService.md)                                                         |
| [SigningStepsService](documentation/services/SigningStepsService.md)                                                           |
| [SettingsService](documentation/services/SettingsService.md)                                                                   |
| [PlaceholdersService](documentation/services/PlaceholdersService.md)                                                           |
| [FileIdService](documentation/services/FileIdService.md)                                                                       |
| [SendService](documentation/services/SendService.md)                                                                           |
| [DuplicateService](documentation/services/DuplicateService.md)                                                                 |
| [Void_Service](documentation/services/Void_Service.md)                                                                         |
| [RenameService](documentation/services/RenameService.md)                                                                       |
| [SetCommentService](documentation/services/SetCommentService.md)                                                               |
| [SetNotificationService](documentation/services/SetNotificationService.md)                                                     |
| [SetExpirationDateService](documentation/services/SetExpirationDateService.md)                                                 |
| [SetLegalityLevelService](documentation/services/SetLegalityLevelService.md)                                                   |
| [EnvelopeEnvelopeIdAnnotationsDocumentIdService](documentation/services/EnvelopeEnvelopeIdAnnotationsDocumentIdService.md)     |
| [AnnotationsService](documentation/services/AnnotationsService.md)                                                             |
| [AnnotationIdService](documentation/services/AnnotationIdService.md)                                                           |
| [AnnotationService](documentation/services/AnnotationService.md)                                                               |
| [EnvelopeIdService](documentation/services/EnvelopeIdService.md)                                                               |
| [EnvelopeService](documentation/services/EnvelopeService.md)                                                                   |
| [EnvelopesService](documentation/services/EnvelopesService.md)                                                                 |
| [TemplateTemplateIdDuplicateService](documentation/services/TemplateTemplateIdDuplicateService.md)                             |
| [TemplateTemplateIdDocumentDocumentIdService](documentation/services/TemplateTemplateIdDocumentDocumentIdService.md)           |
| [TemplateTemplateIdDocumentService](documentation/services/TemplateTemplateIdDocumentService.md)                               |
| [TemplateTemplateIdDocumentsService](documentation/services/TemplateTemplateIdDocumentsService.md)                             |
| [TemplateTemplateIdSigningStepsService](documentation/services/TemplateTemplateIdSigningStepsService.md)                       |
| [TemplateTemplateIdRenameService](documentation/services/TemplateTemplateIdRenameService.md)                                   |
| [TemplateTemplateIdSetCommentService](documentation/services/TemplateTemplateIdSetCommentService.md)                           |
| [TemplateTemplateIdSetNotificationService](documentation/services/TemplateTemplateIdSetNotificationService.md)                 |
| [TemplateTemplateIdAnnotationsDocumentIdService](documentation/services/TemplateTemplateIdAnnotationsDocumentIdService.md)     |
| [TemplateTemplateIdAnnotationsService](documentation/services/TemplateTemplateIdAnnotationsService.md)                         |
| [TemplateTemplateIdAnnotationAnnotationIdService](documentation/services/TemplateTemplateIdAnnotationAnnotationIdService.md)   |
| [TemplateTemplateIdAnnotationService](documentation/services/TemplateTemplateIdAnnotationService.md)                           |
| [TemplateTemplateIdAttachmentsSettingsService](documentation/services/TemplateTemplateIdAttachmentsSettingsService.md)         |
| [TemplateTemplateIdAttachmentsPlaceholdersService](documentation/services/TemplateTemplateIdAttachmentsPlaceholdersService.md) |
| [TemplateTemplateIdService](documentation/services/TemplateTemplateIdService.md)                                               |
| [TemplateService](documentation/services/TemplateService.md)                                                                   |
| [TemplatesService](documentation/services/TemplatesService.md)                                                                 |
| [WebhookIdService](documentation/services/WebhookIdService.md)                                                                 |
| [WebhookService](documentation/services/WebhookService.md)                                                                     |
| [WebhooksService](documentation/services/WebhooksService.md)                                                                   |

</details>

## Models

The SDK includes several models that represent the data structures used in API requests and responses. These models help in organizing and managing the data efficiently.

<details>
<summary>Below is a list of all available models with links to their detailed documentation:</summary>

| Name                                                                                                                                   | Description |
| :------------------------------------------------------------------------------------------------------------------------------------- | :---------- |
| [CreateEnvelopeFromTemplateRequest](documentation/models/CreateEnvelopeFromTemplateRequest.md)                                         |             |
| [AddEnvelopeDocumentRequest](documentation/models/AddEnvelopeDocumentRequest.md)                                                       |             |
| [SetEnvelopeDynamicFieldsRequest](documentation/models/SetEnvelopeDynamicFieldsRequest.md)                                             |             |
| [DynamicFields](documentation/models/DynamicFields.md)                                                                                 |             |
| [AddEnvelopeSigningStepsRequest](documentation/models/AddEnvelopeSigningStepsRequest.md)                                               |             |
| [AddEnvelopeSigningStepsRequestSigningSteps](documentation/models/AddEnvelopeSigningStepsRequestSigningSteps.md)                       |             |
| [SigningStepsRecipients1](documentation/models/SigningStepsRecipients1.md)                                                             |             |
| [Verification](documentation/models/Verification.md)                                                                                   |             |
| [SetEnvelopeAttachmentsSettingsRequest](documentation/models/SetEnvelopeAttachmentsSettingsRequest.md)                                 |             |
| [SetEnvelopeAttachmentsSettingsRequestSettings](documentation/models/SetEnvelopeAttachmentsSettingsRequestSettings.md)                 |             |
| [SetEnvelopeAttachmentsPlaceholdersRequest](documentation/models/SetEnvelopeAttachmentsPlaceholdersRequest.md)                         |             |
| [SetEnvelopeAttachmentsPlaceholdersRequestPlaceholders](documentation/models/SetEnvelopeAttachmentsPlaceholdersRequestPlaceholders.md) |             |
| [RenameEnvelopeRequest](documentation/models/RenameEnvelopeRequest.md)                                                                 |             |
| [SetEnvelopeCommentRequest](documentation/models/SetEnvelopeCommentRequest.md)                                                         |             |
| [SetEnvelopeNotificationRequest](documentation/models/SetEnvelopeNotificationRequest.md)                                               |             |
| [SetEnvelopeExpirationDateRequest](documentation/models/SetEnvelopeExpirationDateRequest.md)                                           |             |
| [SetEnvelopeLegalityLevelRequest](documentation/models/SetEnvelopeLegalityLevelRequest.md)                                             |             |
| [AddEnvelopeAnnotationRequest](documentation/models/AddEnvelopeAnnotationRequest.md)                                                   |             |
| [AddEnvelopeAnnotationRequestSignature](documentation/models/AddEnvelopeAnnotationRequestSignature.md)                                 |             |
| [AddEnvelopeAnnotationRequestInitials](documentation/models/AddEnvelopeAnnotationRequestInitials.md)                                   |             |
| [AddEnvelopeAnnotationRequestText](documentation/models/AddEnvelopeAnnotationRequestText.md)                                           |             |
| [TextFont1](documentation/models/TextFont1.md)                                                                                         |             |
| [AddEnvelopeAnnotationRequestDatetime](documentation/models/AddEnvelopeAnnotationRequestDatetime.md)                                   |             |
| [DatetimeFont1](documentation/models/DatetimeFont1.md)                                                                                 |             |
| [AddEnvelopeAnnotationRequestCheckbox](documentation/models/AddEnvelopeAnnotationRequestCheckbox.md)                                   |             |
| [CreateEnvelopeRequest](documentation/models/CreateEnvelopeRequest.md)                                                                 |             |
| [ListEnvelopesRequest](documentation/models/ListEnvelopesRequest.md)                                                                   |             |
| [AddTemplateDocumentRequest](documentation/models/AddTemplateDocumentRequest.md)                                                       |             |
| [AddTemplateSigningStepsRequest](documentation/models/AddTemplateSigningStepsRequest.md)                                               |             |
| [AddTemplateSigningStepsRequestSigningSteps](documentation/models/AddTemplateSigningStepsRequestSigningSteps.md)                       |             |
| [SigningStepsRecipients2](documentation/models/SigningStepsRecipients2.md)                                                             |             |
| [RenameTemplateRequest](documentation/models/RenameTemplateRequest.md)                                                                 |             |
| [SetTemplateCommentRequest](documentation/models/SetTemplateCommentRequest.md)                                                         |             |
| [SetTemplateNotificationRequest](documentation/models/SetTemplateNotificationRequest.md)                                               |             |
| [AddTemplateAnnotationRequest](documentation/models/AddTemplateAnnotationRequest.md)                                                   |             |
| [AddTemplateAnnotationRequestSignature](documentation/models/AddTemplateAnnotationRequestSignature.md)                                 |             |
| [AddTemplateAnnotationRequestInitials](documentation/models/AddTemplateAnnotationRequestInitials.md)                                   |             |
| [AddTemplateAnnotationRequestText](documentation/models/AddTemplateAnnotationRequestText.md)                                           |             |
| [TextFont2](documentation/models/TextFont2.md)                                                                                         |             |
| [AddTemplateAnnotationRequestDatetime](documentation/models/AddTemplateAnnotationRequestDatetime.md)                                   |             |
| [DatetimeFont2](documentation/models/DatetimeFont2.md)                                                                                 |             |
| [AddTemplateAnnotationRequestCheckbox](documentation/models/AddTemplateAnnotationRequestCheckbox.md)                                   |             |
| [SetTemplateAttachmentsSettingsRequest](documentation/models/SetTemplateAttachmentsSettingsRequest.md)                                 |             |
| [SetTemplateAttachmentsSettingsRequestSettings](documentation/models/SetTemplateAttachmentsSettingsRequestSettings.md)                 |             |
| [SetTemplateAttachmentsPlaceholdersRequest](documentation/models/SetTemplateAttachmentsPlaceholdersRequest.md)                         |             |
| [SetTemplateAttachmentsPlaceholdersRequestPlaceholders](documentation/models/SetTemplateAttachmentsPlaceholdersRequestPlaceholders.md) |             |
| [CreateTemplateRequest](documentation/models/CreateTemplateRequest.md)                                                                 |             |
| [ListTemplatesRequest](documentation/models/ListTemplatesRequest.md)                                                                   |             |
| [CreateWebhookRequest](documentation/models/CreateWebhookRequest.md)                                                                   |             |
| [ListWebhooksRequest](documentation/models/ListWebhooksRequest.md)                                                                     |             |

</details>

## License

This SDK is licensed under the MIT License.

See the [LICENSE](LICENSE) file for more details.
