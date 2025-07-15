# SignplusService

A list of all methods in the `SignplusService` service. Click on the method name to view detailed information about that method.

| Methods                                                             | Description                                        |
| :------------------------------------------------------------------ | :------------------------------------------------- |
| [createEnvelope](#createenvelope)                                   | Create new envelope                                |
| [createEnvelopeFromTemplate](#createenvelopefromtemplate)           | Create new envelope from template                  |
| [listEnvelopes](#listenvelopes)                                     | List envelopes                                     |
| [getEnvelope](#getenvelope)                                         | Get envelope                                       |
| [deleteEnvelope](#deleteenvelope)                                   | Delete envelope                                    |
| [downloadEnvelopeSignedDocuments](#downloadenvelopesigneddocuments) | Download signed documents for an envelope          |
| [downloadEnvelopeCertificate](#downloadenvelopecertificate)         | Download certificate of completion for an envelope |
| [getEnvelopeDocument](#getenvelopedocument)                         | Get envelope document                              |
| [getEnvelopeDocuments](#getenvelopedocuments)                       | Get envelope documents                             |
| [addEnvelopeDocument](#addenvelopedocument)                         | Add envelope document                              |
| [setEnvelopeDynamicFields](#setenvelopedynamicfields)               | Set envelope dynamic fields                        |
| [addEnvelopeSigningSteps](#addenvelopesigningsteps)                 | Add envelope signing steps                         |
| [sendEnvelope](#sendenvelope)                                       | Send envelope for signature                        |
| [duplicateEnvelope](#duplicateenvelope)                             | Duplicate envelope                                 |
| [voidEnvelope](#voidenvelope)                                       | Void envelope                                      |
| [renameEnvelope](#renameenvelope)                                   | Rename envelope                                    |
| [setEnvelopeComment](#setenvelopecomment)                           | Set envelope comment                               |
| [setEnvelopeNotification](#setenvelopenotification)                 | Set envelope notification                          |
| [setEnvelopeExpirationDate](#setenvelopeexpirationdate)             | Set envelope expiration date                       |
| [setEnvelopeLegalityLevel](#setenvelopelegalitylevel)               | Set envelope legality level                        |
| [getEnvelopeAnnotations](#getenvelopeannotations)                   | Get envelope annotations                           |
| [getEnvelopeDocumentAnnotations](#getenvelopedocumentannotations)   | Get envelope document annotations                  |
| [addEnvelopeAnnotation](#addenvelopeannotation)                     | Add envelope annotation                            |
| [deleteEnvelopeAnnotation](#deleteenvelopeannotation)               | Delete envelope annotation                         |
| [createTemplate](#createtemplate)                                   | Create new template                                |
| [listTemplates](#listtemplates)                                     | List templates                                     |
| [getTemplate](#gettemplate)                                         | Get template                                       |
| [deleteTemplate](#deletetemplate)                                   | Delete template                                    |
| [duplicateTemplate](#duplicatetemplate)                             | Duplicate template                                 |
| [addTemplateDocument](#addtemplatedocument)                         | Add template document                              |
| [getTemplateDocument](#gettemplatedocument)                         | Get template document                              |
| [getTemplateDocuments](#gettemplatedocuments)                       | Get template documents                             |
| [addTemplateSigningSteps](#addtemplatesigningsteps)                 | Add template signing steps                         |
| [renameTemplate](#renametemplate)                                   | Rename template                                    |
| [setTemplateComment](#settemplatecomment)                           | Set template comment                               |
| [setTemplateNotification](#settemplatenotification)                 | Set template notification                          |
| [getTemplateAnnotations](#gettemplateannotations)                   | Get template annotations                           |
| [getDocumentTemplateAnnotations](#getdocumenttemplateannotations)   | Get document template annotations                  |
| [addTemplateAnnotation](#addtemplateannotation)                     | Add template annotation                            |
| [deleteTemplateAnnotation](#deletetemplateannotation)               | Delete template annotation                         |
| [createWebhook](#createwebhook)                                     | Create webhook                                     |
| [listWebhooks](#listwebhooks)                                       | List webhooks                                      |
| [deleteWebhook](#deletewebhook)                                     | Delete webhook                                     |

## createEnvelope

Create new envelope

- HTTP Method: `POST`
- Endpoint: `/envelope`

**Parameters**

| Name | Type                                                        | Required | Description       |
| :--- | :---------------------------------------------------------- | :------- | :---------------- |
| body | [CreateEnvelopeRequest](../models/CreateEnvelopeRequest.md) | ✅       | The request body. |

**Return Type**

`Envelope`

**Example Usage Code Snippet**

```typescript
import { CreateEnvelopeRequest, EnvelopeLegalityLevel, Signplus } from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const envelopeLegalityLevel = EnvelopeLegalityLevel.SES;

  const createEnvelopeRequest: CreateEnvelopeRequest = {
    name: 'name',
    legalityLevel: envelopeLegalityLevel,
    expiresAt: 10,
    comment: 'comment',
    sandbox: true,
  };

  const { data } = await signplus.signplus.createEnvelope(createEnvelopeRequest);

  console.log(data);
})();
```

## createEnvelopeFromTemplate

Create new envelope from template

- HTTP Method: `POST`
- Endpoint: `/envelope/from_template/{template_id}`

**Parameters**

| Name       | Type                                                                                | Required | Description       |
| :--------- | :---------------------------------------------------------------------------------- | :------- | :---------------- |
| body       | [CreateEnvelopeFromTemplateRequest](../models/CreateEnvelopeFromTemplateRequest.md) | ✅       | The request body. |
| templateId | string                                                                              | ✅       |                   |

**Return Type**

`Envelope`

**Example Usage Code Snippet**

```typescript
import { CreateEnvelopeFromTemplateRequest, Signplus } from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const createEnvelopeFromTemplateRequest: CreateEnvelopeFromTemplateRequest = {
    name: 'name',
    comment: 'comment',
    sandbox: true,
  };

  const { data } = await signplus.signplus.createEnvelopeFromTemplate('template_id', createEnvelopeFromTemplateRequest);

  console.log(data);
})();
```

## listEnvelopes

List envelopes

- HTTP Method: `POST`
- Endpoint: `/envelopes`

**Parameters**

| Name | Type                                                      | Required | Description       |
| :--- | :-------------------------------------------------------- | :------- | :---------------- |
| body | [ListEnvelopesRequest](../models/ListEnvelopesRequest.md) | ❌       | The request body. |

**Return Type**

`ListEnvelopesResponse`

**Example Usage Code Snippet**

```typescript
import { EnvelopeOrderField, EnvelopeStatus, ListEnvelopesRequest, Signplus } from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const envelopeStatus = EnvelopeStatus.DRAFT;

  const envelopeOrderField = EnvelopeOrderField.CREATION_DATE;

  const listEnvelopesRequest: ListEnvelopesRequest = {
    name: 'name',
    tags: ['tags'],
    comment: 'comment',
    ids: ['ids'],
    statuses: [envelopeStatus],
    folderIds: ['folder_ids'],
    onlyRootFolder: true,
    dateFrom: 3,
    dateTo: 10,
    uid: 'uid',
    first: 4,
    last: 6,
    after: 'after',
    before: 'before',
    orderField: envelopeOrderField,
    ascending: true,
    includeTrash: true,
  };

  const { data } = await signplus.signplus.listEnvelopes(listEnvelopesRequest);

  console.log(data);
})();
```

## getEnvelope

Get envelope

- HTTP Method: `GET`
- Endpoint: `/envelope/{envelope_id}`

**Parameters**

| Name       | Type   | Required | Description |
| :--------- | :----- | :------- | :---------- |
| envelopeId | string | ✅       |             |

**Return Type**

`Envelope`

**Example Usage Code Snippet**

```typescript
import { Signplus } from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const { data } = await signplus.signplus.getEnvelope('envelope_id');

  console.log(data);
})();
```

## deleteEnvelope

Delete envelope

- HTTP Method: `DELETE`
- Endpoint: `/envelope/{envelope_id}`

**Parameters**

| Name       | Type   | Required | Description |
| :--------- | :----- | :------- | :---------- |
| envelopeId | string | ✅       |             |

**Example Usage Code Snippet**

```typescript
import { Signplus } from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const { data } = await signplus.signplus.deleteEnvelope('envelope_id');

  console.log(data);
})();
```

## downloadEnvelopeSignedDocuments

Download signed documents for an envelope

- HTTP Method: `GET`
- Endpoint: `/envelope/{envelope_id}/signed_documents`

**Parameters**

| Name                    | Type    | Required | Description                                                             |
| :---------------------- | :------ | :------- | :---------------------------------------------------------------------- |
| envelopeId              | string  | ✅       | ID of the envelope                                                      |
| certificateOfCompletion | boolean | ❌       | Whether to include the certificate of completion in the downloaded file |

**Return Type**

`ArrayBuffer`

**Example Usage Code Snippet**

```typescript
import { Signplus } from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const { data } = await signplus.signplus.downloadEnvelopeSignedDocuments('envelope_id', {
    certificateOfCompletion: true,
  });

  console.log(data);
})();
```

## downloadEnvelopeCertificate

Download certificate of completion for an envelope

- HTTP Method: `GET`
- Endpoint: `/envelope/{envelope_id}/certificate`

**Parameters**

| Name       | Type   | Required | Description        |
| :--------- | :----- | :------- | :----------------- |
| envelopeId | string | ✅       | ID of the envelope |

**Return Type**

`ArrayBuffer`

**Example Usage Code Snippet**

```typescript
import { Signplus } from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const { data } = await signplus.signplus.downloadEnvelopeCertificate('envelope_id');

  console.log(data);
})();
```

## getEnvelopeDocument

Get envelope document

- HTTP Method: `GET`
- Endpoint: `/envelope/{envelope_id}/document/{document_id}`

**Parameters**

| Name       | Type   | Required | Description |
| :--------- | :----- | :------- | :---------- |
| envelopeId | string | ✅       |             |
| documentId | string | ✅       |             |

**Return Type**

`Document`

**Example Usage Code Snippet**

```typescript
import { Signplus } from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const { data } = await signplus.signplus.getEnvelopeDocument('envelope_id', 'document_id');

  console.log(data);
})();
```

## getEnvelopeDocuments

Get envelope documents

- HTTP Method: `GET`
- Endpoint: `/envelope/{envelope_id}/documents`

**Parameters**

| Name       | Type   | Required | Description |
| :--------- | :----- | :------- | :---------- |
| envelopeId | string | ✅       |             |

**Return Type**

`ListEnvelopeDocumentsResponse`

**Example Usage Code Snippet**

```typescript
import { Signplus } from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const { data } = await signplus.signplus.getEnvelopeDocuments('envelope_id');

  console.log(data);
})();
```

## addEnvelopeDocument

Add envelope document

- HTTP Method: `POST`
- Endpoint: `/envelope/{envelope_id}/document`

**Parameters**

| Name       | Type                                                                  | Required | Description       |
| :--------- | :-------------------------------------------------------------------- | :------- | :---------------- |
| body       | [AddEnvelopeDocumentRequest](../models/AddEnvelopeDocumentRequest.md) | ✅       | The request body. |
| envelopeId | string                                                                | ✅       |                   |

**Return Type**

`Document`

**Example Usage Code Snippet**

```typescript
import { AddEnvelopeDocumentRequest, Signplus } from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const addEnvelopeDocumentRequest: AddEnvelopeDocumentRequest = {
    file: new ArrayBuffer(0),
  };

  const { data } = await signplus.signplus.addEnvelopeDocument('envelope_id', addEnvelopeDocumentRequest);

  console.log(data);
})();
```

## setEnvelopeDynamicFields

Set envelope dynamic fields

- HTTP Method: `PUT`
- Endpoint: `/envelope/{envelope_id}/dynamic_fields`

**Parameters**

| Name       | Type                                                                            | Required | Description       |
| :--------- | :------------------------------------------------------------------------------ | :------- | :---------------- |
| body       | [SetEnvelopeDynamicFieldsRequest](../models/SetEnvelopeDynamicFieldsRequest.md) | ✅       | The request body. |
| envelopeId | string                                                                          | ✅       |                   |

**Return Type**

`Envelope`

**Example Usage Code Snippet**

```typescript
import { DynamicField, SetEnvelopeDynamicFieldsRequest, Signplus } from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const dynamicField: DynamicField = {
    name: 'name',
    value: 'value',
  };

  const setEnvelopeDynamicFieldsRequest: SetEnvelopeDynamicFieldsRequest = {
    dynamicFields: [dynamicField],
  };

  const { data } = await signplus.signplus.setEnvelopeDynamicFields('envelope_id', setEnvelopeDynamicFieldsRequest);

  console.log(data);
})();
```

## addEnvelopeSigningSteps

Add envelope signing steps

- HTTP Method: `POST`
- Endpoint: `/envelope/{envelope_id}/signing_steps`

**Parameters**

| Name       | Type                                                                          | Required | Description       |
| :--------- | :---------------------------------------------------------------------------- | :------- | :---------------- |
| body       | [AddEnvelopeSigningStepsRequest](../models/AddEnvelopeSigningStepsRequest.md) | ✅       | The request body. |
| envelopeId | string                                                                        | ✅       |                   |

**Return Type**

`Envelope`

**Example Usage Code Snippet**

```typescript
import { AddEnvelopeSigningStepsRequest, SigningStep, Signplus } from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const recipientRole = RecipientRole.SIGNER;

  const recipientVerificationType = RecipientVerificationType.SMS;

  const recipientVerification: RecipientVerification = {
    type: recipientVerificationType,
    value: 'value',
  };

  const recipient: Recipient = {
    id: 'id',
    uid: 'uid',
    name: 'name',
    email: 'email',
    role: recipientRole,
    verification: recipientVerification,
  };

  const signingStep: SigningStep = {
    recipients: [recipient],
  };

  const addEnvelopeSigningStepsRequest: AddEnvelopeSigningStepsRequest = {
    signingSteps: [signingStep],
  };

  const { data } = await signplus.signplus.addEnvelopeSigningSteps('envelope_id', addEnvelopeSigningStepsRequest);

  console.log(data);
})();
```

## sendEnvelope

Send envelope for signature

- HTTP Method: `POST`
- Endpoint: `/envelope/{envelope_id}/send`

**Parameters**

| Name       | Type   | Required | Description |
| :--------- | :----- | :------- | :---------- |
| envelopeId | string | ✅       |             |

**Return Type**

`Envelope`

**Example Usage Code Snippet**

```typescript
import { Signplus } from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const { data } = await signplus.signplus.sendEnvelope('envelope_id');

  console.log(data);
})();
```

## duplicateEnvelope

Duplicate envelope

- HTTP Method: `POST`
- Endpoint: `/envelope/{envelope_id}/duplicate`

**Parameters**

| Name       | Type   | Required | Description |
| :--------- | :----- | :------- | :---------- |
| envelopeId | string | ✅       |             |

**Return Type**

`Envelope`

**Example Usage Code Snippet**

```typescript
import { Signplus } from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const { data } = await signplus.signplus.duplicateEnvelope('envelope_id');

  console.log(data);
})();
```

## voidEnvelope

Void envelope

- HTTP Method: `PUT`
- Endpoint: `/envelope/{envelope_id}/void`

**Parameters**

| Name       | Type   | Required | Description |
| :--------- | :----- | :------- | :---------- |
| envelopeId | string | ✅       |             |

**Return Type**

`Envelope`

**Example Usage Code Snippet**

```typescript
import { Signplus } from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const { data } = await signplus.signplus.voidEnvelope('envelope_id');

  console.log(data);
})();
```

## renameEnvelope

Rename envelope

- HTTP Method: `PUT`
- Endpoint: `/envelope/{envelope_id}/rename`

**Parameters**

| Name       | Type                                                        | Required | Description       |
| :--------- | :---------------------------------------------------------- | :------- | :---------------- |
| body       | [RenameEnvelopeRequest](../models/RenameEnvelopeRequest.md) | ✅       | The request body. |
| envelopeId | string                                                      | ✅       |                   |

**Return Type**

`Envelope`

**Example Usage Code Snippet**

```typescript
import { RenameEnvelopeRequest, Signplus } from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const renameEnvelopeRequest: RenameEnvelopeRequest = {
    name: 'name',
  };

  const { data } = await signplus.signplus.renameEnvelope('envelope_id', renameEnvelopeRequest);

  console.log(data);
})();
```

## setEnvelopeComment

Set envelope comment

- HTTP Method: `PUT`
- Endpoint: `/envelope/{envelope_id}/set_comment`

**Parameters**

| Name       | Type                                                                | Required | Description       |
| :--------- | :------------------------------------------------------------------ | :------- | :---------------- |
| body       | [SetEnvelopeCommentRequest](../models/SetEnvelopeCommentRequest.md) | ✅       | The request body. |
| envelopeId | string                                                              | ✅       |                   |

**Return Type**

`Envelope`

**Example Usage Code Snippet**

```typescript
import { SetEnvelopeCommentRequest, Signplus } from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const setEnvelopeCommentRequest: SetEnvelopeCommentRequest = {
    comment: 'comment',
  };

  const { data } = await signplus.signplus.setEnvelopeComment('envelope_id', setEnvelopeCommentRequest);

  console.log(data);
})();
```

## setEnvelopeNotification

Set envelope notification

- HTTP Method: `PUT`
- Endpoint: `/envelope/{envelope_id}/set_notification`

**Parameters**

| Name       | Type                                                      | Required | Description       |
| :--------- | :-------------------------------------------------------- | :------- | :---------------- |
| body       | [EnvelopeNotification](../models/EnvelopeNotification.md) | ✅       | The request body. |
| envelopeId | string                                                    | ✅       |                   |

**Return Type**

`Envelope`

**Example Usage Code Snippet**

```typescript
import { EnvelopeNotification, Signplus } from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const envelopeNotification: EnvelopeNotification = {
    subject: 'subject',
    message: 'message',
    reminderInterval: 4,
  };

  const { data } = await signplus.signplus.setEnvelopeNotification('envelope_id', envelopeNotification);

  console.log(data);
})();
```

## setEnvelopeExpirationDate

Set envelope expiration date

- HTTP Method: `PUT`
- Endpoint: `/envelope/{envelope_id}/set_expiration_date`

**Parameters**

| Name       | Type                                                                      | Required | Description       |
| :--------- | :------------------------------------------------------------------------ | :------- | :---------------- |
| body       | [SetEnvelopeExpirationRequest](../models/SetEnvelopeExpirationRequest.md) | ✅       | The request body. |
| envelopeId | string                                                                    | ✅       |                   |

**Return Type**

`Envelope`

**Example Usage Code Snippet**

```typescript
import { SetEnvelopeExpirationRequest, Signplus } from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const setEnvelopeExpirationRequest: SetEnvelopeExpirationRequest = {
    expiresAt: 5,
  };

  const { data } = await signplus.signplus.setEnvelopeExpirationDate('envelope_id', setEnvelopeExpirationRequest);

  console.log(data);
})();
```

## setEnvelopeLegalityLevel

Set envelope legality level

- HTTP Method: `PUT`
- Endpoint: `/envelope/{envelope_id}/set_legality_level`

**Parameters**

| Name       | Type                                                                            | Required | Description       |
| :--------- | :------------------------------------------------------------------------------ | :------- | :---------------- |
| body       | [SetEnvelopeLegalityLevelRequest](../models/SetEnvelopeLegalityLevelRequest.md) | ✅       | The request body. |
| envelopeId | string                                                                          | ✅       |                   |

**Return Type**

`Envelope`

**Example Usage Code Snippet**

```typescript
import { EnvelopeLegalityLevel, SetEnvelopeLegalityLevelRequest, Signplus } from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const envelopeLegalityLevel = EnvelopeLegalityLevel.SES;

  const setEnvelopeLegalityLevelRequest: SetEnvelopeLegalityLevelRequest = {
    legalityLevel: envelopeLegalityLevel,
  };

  const { data } = await signplus.signplus.setEnvelopeLegalityLevel('envelope_id', setEnvelopeLegalityLevelRequest);

  console.log(data);
})();
```

## getEnvelopeAnnotations

Get envelope annotations

- HTTP Method: `GET`
- Endpoint: `/envelope/{envelope_id}/annotations`

**Parameters**

| Name       | Type   | Required | Description        |
| :--------- | :----- | :------- | :----------------- |
| envelopeId | string | ✅       | ID of the envelope |

**Return Type**

`Annotation[]`

**Example Usage Code Snippet**

```typescript
import { Signplus } from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const { data } = await signplus.signplus.getEnvelopeAnnotations('envelope_id');

  console.log(data);
})();
```

## getEnvelopeDocumentAnnotations

Get envelope document annotations

- HTTP Method: `GET`
- Endpoint: `/envelope/{envelope_id}/annotations/{document_id}`

**Parameters**

| Name       | Type   | Required | Description        |
| :--------- | :----- | :------- | :----------------- |
| envelopeId | string | ✅       | ID of the envelope |
| documentId | string | ✅       | ID of document     |

**Return Type**

`ListEnvelopeDocumentAnnotationsResponse`

**Example Usage Code Snippet**

```typescript
import { Signplus } from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const { data } = await signplus.signplus.getEnvelopeDocumentAnnotations('envelope_id', 'document_id');

  console.log(data);
})();
```

## addEnvelopeAnnotation

Add envelope annotation

- HTTP Method: `POST`
- Endpoint: `/envelope/{envelope_id}/annotation`

**Parameters**

| Name       | Type                                                      | Required | Description        |
| :--------- | :-------------------------------------------------------- | :------- | :----------------- |
| body       | [AddAnnotationRequest](../models/AddAnnotationRequest.md) | ✅       | The request body.  |
| envelopeId | string                                                    | ✅       | ID of the envelope |

**Return Type**

`Annotation`

**Example Usage Code Snippet**

```typescript
import {
  AddAnnotationRequest,
  AnnotationCheckbox,
  AnnotationDateTime,
  AnnotationInitials,
  AnnotationSignature,
  AnnotationText,
  AnnotationType,
  Signplus,
} from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const annotationType = AnnotationType.TEXT;

  const annotationSignature: AnnotationSignature = {
    id: 'id',
  };

  const annotationInitials: AnnotationInitials = {
    id: 'id',
  };

  const annotationFontFamily = AnnotationFontFamily.UNKNOWN;

  const annotationFont: AnnotationFont = {
    family: annotationFontFamily,
    italic: true,
    bold: true,
  };

  const annotationText: AnnotationText = {
    size: 8.54,
    color: 2.58,
    value: 'value',
    tooltip: 'tooltip',
    dynamicFieldName: 'dynamic_field_name',
    font: annotationFont,
  };

  const annotationDateTimeFormat = AnnotationDateTimeFormat.DMY_NUMERIC_SLASH;

  const annotationDateTime: AnnotationDateTime = {
    size: 7.66,
    font: annotationFont,
    color: 'color',
    autoFill: true,
    timezone: 'timezone',
    timestamp: 123,
    format: annotationDateTimeFormat,
  };

  const annotationCheckboxStyle = AnnotationCheckboxStyle.CIRCLE_CHECK;

  const annotationCheckbox: AnnotationCheckbox = {
    checked: true,
    style: annotationCheckboxStyle,
  };

  const addAnnotationRequest: AddAnnotationRequest = {
    recipientId: 'recipient_id',
    documentId: 'document_id',
    page: 10,
    x: 1.01,
    y: 5.72,
    width: 0.07,
    height: 0.94,
    required: true,
    type: annotationType,
    signature: annotationSignature,
    initials: annotationInitials,
    text: annotationText,
    datetime: annotationDateTime,
    checkbox: annotationCheckbox,
  };

  const { data } = await signplus.signplus.addEnvelopeAnnotation('envelope_id', addAnnotationRequest);

  console.log(data);
})();
```

## deleteEnvelopeAnnotation

Delete envelope annotation

- HTTP Method: `DELETE`
- Endpoint: `/envelope/{envelope_id}/annotation/{annotation_id}`

**Parameters**

| Name         | Type   | Required | Description                    |
| :----------- | :----- | :------- | :----------------------------- |
| envelopeId   | string | ✅       | ID of the envelope             |
| annotationId | string | ✅       | ID of the annotation to delete |

**Example Usage Code Snippet**

```typescript
import { Signplus } from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const { data } = await signplus.signplus.deleteEnvelopeAnnotation('envelope_id', 'annotation_id');

  console.log(data);
})();
```

## createTemplate

Create new template

- HTTP Method: `POST`
- Endpoint: `/template`

**Parameters**

| Name | Type                                                        | Required | Description       |
| :--- | :---------------------------------------------------------- | :------- | :---------------- |
| body | [CreateTemplateRequest](../models/CreateTemplateRequest.md) | ✅       | The request body. |

**Return Type**

`Template`

**Example Usage Code Snippet**

```typescript
import { CreateTemplateRequest, Signplus } from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const createTemplateRequest: CreateTemplateRequest = {
    name: 'name',
  };

  const { data } = await signplus.signplus.createTemplate(createTemplateRequest);

  console.log(data);
})();
```

## listTemplates

List templates

- HTTP Method: `POST`
- Endpoint: `/templates`

**Parameters**

| Name | Type                                                      | Required | Description       |
| :--- | :-------------------------------------------------------- | :------- | :---------------- |
| body | [ListTemplatesRequest](../models/ListTemplatesRequest.md) | ❌       | The request body. |

**Return Type**

`ListTemplatesResponse`

**Example Usage Code Snippet**

```typescript
import { ListTemplatesRequest, Signplus, TemplateOrderField } from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const templateOrderField = TemplateOrderField.TEMPLATE_ID;

  const listTemplatesRequest: ListTemplatesRequest = {
    name: 'name',
    tags: ['tags'],
    ids: ['ids'],
    first: 10,
    last: 5,
    after: 'after',
    before: 'before',
    orderField: templateOrderField,
    ascending: true,
  };

  const { data } = await signplus.signplus.listTemplates(listTemplatesRequest);

  console.log(data);
})();
```

## getTemplate

Get template

- HTTP Method: `GET`
- Endpoint: `/template/{template_id}`

**Parameters**

| Name       | Type   | Required | Description |
| :--------- | :----- | :------- | :---------- |
| templateId | string | ✅       |             |

**Return Type**

`Template`

**Example Usage Code Snippet**

```typescript
import { Signplus } from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const { data } = await signplus.signplus.getTemplate('template_id');

  console.log(data);
})();
```

## deleteTemplate

Delete template

- HTTP Method: `DELETE`
- Endpoint: `/template/{template_id}`

**Parameters**

| Name       | Type   | Required | Description |
| :--------- | :----- | :------- | :---------- |
| templateId | string | ✅       |             |

**Example Usage Code Snippet**

```typescript
import { Signplus } from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const { data } = await signplus.signplus.deleteTemplate('template_id');

  console.log(data);
})();
```

## duplicateTemplate

Duplicate template

- HTTP Method: `POST`
- Endpoint: `/template/{template_id}/duplicate`

**Parameters**

| Name       | Type   | Required | Description |
| :--------- | :----- | :------- | :---------- |
| templateId | string | ✅       |             |

**Return Type**

`Template`

**Example Usage Code Snippet**

```typescript
import { Signplus } from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const { data } = await signplus.signplus.duplicateTemplate('template_id');

  console.log(data);
})();
```

## addTemplateDocument

Add template document

- HTTP Method: `POST`
- Endpoint: `/template/{template_id}/document`

**Parameters**

| Name       | Type                                                                  | Required | Description       |
| :--------- | :-------------------------------------------------------------------- | :------- | :---------------- |
| body       | [AddTemplateDocumentRequest](../models/AddTemplateDocumentRequest.md) | ✅       | The request body. |
| templateId | string                                                                | ✅       |                   |

**Return Type**

`Document`

**Example Usage Code Snippet**

```typescript
import { AddTemplateDocumentRequest, Signplus } from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const addTemplateDocumentRequest: AddTemplateDocumentRequest = {
    file: new ArrayBuffer(0),
  };

  const { data } = await signplus.signplus.addTemplateDocument('template_id', addTemplateDocumentRequest);

  console.log(data);
})();
```

## getTemplateDocument

Get template document

- HTTP Method: `GET`
- Endpoint: `/template/{template_id}/document/{document_id}`

**Parameters**

| Name       | Type   | Required | Description |
| :--------- | :----- | :------- | :---------- |
| templateId | string | ✅       |             |
| documentId | string | ✅       |             |

**Return Type**

`Document`

**Example Usage Code Snippet**

```typescript
import { Signplus } from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const { data } = await signplus.signplus.getTemplateDocument('template_id', 'document_id');

  console.log(data);
})();
```

## getTemplateDocuments

Get template documents

- HTTP Method: `GET`
- Endpoint: `/template/{template_id}/documents`

**Parameters**

| Name       | Type   | Required | Description |
| :--------- | :----- | :------- | :---------- |
| templateId | string | ✅       |             |

**Return Type**

`ListTemplateDocumentsResponse`

**Example Usage Code Snippet**

```typescript
import { Signplus } from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const { data } = await signplus.signplus.getTemplateDocuments('template_id');

  console.log(data);
})();
```

## addTemplateSigningSteps

Add template signing steps

- HTTP Method: `POST`
- Endpoint: `/template/{template_id}/signing_steps`

**Parameters**

| Name       | Type                                                                          | Required | Description       |
| :--------- | :---------------------------------------------------------------------------- | :------- | :---------------- |
| body       | [AddTemplateSigningStepsRequest](../models/AddTemplateSigningStepsRequest.md) | ✅       | The request body. |
| templateId | string                                                                        | ✅       |                   |

**Return Type**

`Template`

**Example Usage Code Snippet**

```typescript
import { AddTemplateSigningStepsRequest, Signplus, TemplateSigningStep } from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const templateRecipientRole = TemplateRecipientRole.SIGNER;

  const templateRecipient: TemplateRecipient = {
    id: 'id',
    uid: 'uid',
    name: 'name',
    email: 'email',
    role: templateRecipientRole,
  };

  const templateSigningStep: TemplateSigningStep = {
    recipients: [templateRecipient],
  };

  const addTemplateSigningStepsRequest: AddTemplateSigningStepsRequest = {
    signingSteps: [templateSigningStep],
  };

  const { data } = await signplus.signplus.addTemplateSigningSteps('template_id', addTemplateSigningStepsRequest);

  console.log(data);
})();
```

## renameTemplate

Rename template

- HTTP Method: `PUT`
- Endpoint: `/template/{template_id}/rename`

**Parameters**

| Name       | Type                                                        | Required | Description       |
| :--------- | :---------------------------------------------------------- | :------- | :---------------- |
| body       | [RenameTemplateRequest](../models/RenameTemplateRequest.md) | ✅       | The request body. |
| templateId | string                                                      | ✅       |                   |

**Return Type**

`Template`

**Example Usage Code Snippet**

```typescript
import { RenameTemplateRequest, Signplus } from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const renameTemplateRequest: RenameTemplateRequest = {
    name: 'name',
  };

  const { data } = await signplus.signplus.renameTemplate('template_id', renameTemplateRequest);

  console.log(data);
})();
```

## setTemplateComment

Set template comment

- HTTP Method: `PUT`
- Endpoint: `/template/{template_id}/set_comment`

**Parameters**

| Name       | Type                                                                | Required | Description       |
| :--------- | :------------------------------------------------------------------ | :------- | :---------------- |
| body       | [SetTemplateCommentRequest](../models/SetTemplateCommentRequest.md) | ✅       | The request body. |
| templateId | string                                                              | ✅       |                   |

**Return Type**

`Template`

**Example Usage Code Snippet**

```typescript
import { SetTemplateCommentRequest, Signplus } from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const setTemplateCommentRequest: SetTemplateCommentRequest = {
    comment: 'comment',
  };

  const { data } = await signplus.signplus.setTemplateComment('template_id', setTemplateCommentRequest);

  console.log(data);
})();
```

## setTemplateNotification

Set template notification

- HTTP Method: `PUT`
- Endpoint: `/template/{template_id}/set_notification`

**Parameters**

| Name       | Type                                                      | Required | Description       |
| :--------- | :-------------------------------------------------------- | :------- | :---------------- |
| body       | [EnvelopeNotification](../models/EnvelopeNotification.md) | ✅       | The request body. |
| templateId | string                                                    | ✅       |                   |

**Return Type**

`Template`

**Example Usage Code Snippet**

```typescript
import { EnvelopeNotification, Signplus } from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const envelopeNotification: EnvelopeNotification = {
    subject: 'subject',
    message: 'message',
    reminderInterval: 4,
  };

  const { data } = await signplus.signplus.setTemplateNotification('template_id', envelopeNotification);

  console.log(data);
})();
```

## getTemplateAnnotations

Get template annotations

- HTTP Method: `GET`
- Endpoint: `/template/{template_id}/annotations`

**Parameters**

| Name       | Type   | Required | Description        |
| :--------- | :----- | :------- | :----------------- |
| templateId | string | ✅       | ID of the template |

**Return Type**

`ListTemplateAnnotationsResponse`

**Example Usage Code Snippet**

```typescript
import { Signplus } from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const { data } = await signplus.signplus.getTemplateAnnotations('template_id');

  console.log(data);
})();
```

## getDocumentTemplateAnnotations

Get document template annotations

- HTTP Method: `GET`
- Endpoint: `/template/{template_id}/annotations/{document_id}`

**Parameters**

| Name       | Type   | Required | Description        |
| :--------- | :----- | :------- | :----------------- |
| templateId | string | ✅       | ID of the template |
| documentId | string | ✅       | ID of document     |

**Return Type**

`ListTemplateDocumentAnnotationsResponse`

**Example Usage Code Snippet**

```typescript
import { Signplus } from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const { data } = await signplus.signplus.getDocumentTemplateAnnotations('template_id', 'document_id');

  console.log(data);
})();
```

## addTemplateAnnotation

Add template annotation

- HTTP Method: `POST`
- Endpoint: `/template/{template_id}/annotation`

**Parameters**

| Name       | Type                                                      | Required | Description        |
| :--------- | :-------------------------------------------------------- | :------- | :----------------- |
| body       | [AddAnnotationRequest](../models/AddAnnotationRequest.md) | ✅       | The request body.  |
| templateId | string                                                    | ✅       | ID of the template |

**Return Type**

`Annotation`

**Example Usage Code Snippet**

```typescript
import {
  AddAnnotationRequest,
  AnnotationCheckbox,
  AnnotationDateTime,
  AnnotationInitials,
  AnnotationSignature,
  AnnotationText,
  AnnotationType,
  Signplus,
} from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const annotationType = AnnotationType.TEXT;

  const annotationSignature: AnnotationSignature = {
    id: 'id',
  };

  const annotationInitials: AnnotationInitials = {
    id: 'id',
  };

  const annotationFontFamily = AnnotationFontFamily.UNKNOWN;

  const annotationFont: AnnotationFont = {
    family: annotationFontFamily,
    italic: true,
    bold: true,
  };

  const annotationText: AnnotationText = {
    size: 8.54,
    color: 2.58,
    value: 'value',
    tooltip: 'tooltip',
    dynamicFieldName: 'dynamic_field_name',
    font: annotationFont,
  };

  const annotationDateTimeFormat = AnnotationDateTimeFormat.DMY_NUMERIC_SLASH;

  const annotationDateTime: AnnotationDateTime = {
    size: 7.66,
    font: annotationFont,
    color: 'color',
    autoFill: true,
    timezone: 'timezone',
    timestamp: 123,
    format: annotationDateTimeFormat,
  };

  const annotationCheckboxStyle = AnnotationCheckboxStyle.CIRCLE_CHECK;

  const annotationCheckbox: AnnotationCheckbox = {
    checked: true,
    style: annotationCheckboxStyle,
  };

  const addAnnotationRequest: AddAnnotationRequest = {
    recipientId: 'recipient_id',
    documentId: 'document_id',
    page: 10,
    x: 1.01,
    y: 5.72,
    width: 0.07,
    height: 0.94,
    required: true,
    type: annotationType,
    signature: annotationSignature,
    initials: annotationInitials,
    text: annotationText,
    datetime: annotationDateTime,
    checkbox: annotationCheckbox,
  };

  const { data } = await signplus.signplus.addTemplateAnnotation('template_id', addAnnotationRequest);

  console.log(data);
})();
```

## deleteTemplateAnnotation

Delete template annotation

- HTTP Method: `DELETE`
- Endpoint: `/template/{template_id}/annotation/{annotation_id}`

**Parameters**

| Name         | Type   | Required | Description                    |
| :----------- | :----- | :------- | :----------------------------- |
| templateId   | string | ✅       | ID of the template             |
| annotationId | string | ✅       | ID of the annotation to delete |

**Example Usage Code Snippet**

```typescript
import { Signplus } from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const { data } = await signplus.signplus.deleteTemplateAnnotation('template_id', 'annotation_id');

  console.log(data);
})();
```

## createWebhook

Create webhook

- HTTP Method: `POST`
- Endpoint: `/webhook`

**Parameters**

| Name | Type                                                      | Required | Description       |
| :--- | :-------------------------------------------------------- | :------- | :---------------- |
| body | [CreateWebhookRequest](../models/CreateWebhookRequest.md) | ✅       | The request body. |

**Return Type**

`Webhook`

**Example Usage Code Snippet**

```typescript
import { CreateWebhookRequest, Signplus, WebhookEvent } from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const webhookEvent = WebhookEvent.ENVELOPE_EXPIRED;

  const createWebhookRequest: CreateWebhookRequest = {
    event: webhookEvent,
    target: 'target',
  };

  const { data } = await signplus.signplus.createWebhook(createWebhookRequest);

  console.log(data);
})();
```

## listWebhooks

List webhooks

- HTTP Method: `POST`
- Endpoint: `/webhooks`

**Parameters**

| Name | Type                                                    | Required | Description       |
| :--- | :------------------------------------------------------ | :------- | :---------------- |
| body | [ListWebhooksRequest](../models/ListWebhooksRequest.md) | ❌       | The request body. |

**Return Type**

`ListWebhooksResponse`

**Example Usage Code Snippet**

```typescript
import { ListWebhooksRequest, Signplus, WebhookEvent } from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const webhookEvent = WebhookEvent.ENVELOPE_EXPIRED;

  const listWebhooksRequest: ListWebhooksRequest = {
    webhookId: 'webhook_id',
    event: webhookEvent,
  };

  const { data } = await signplus.signplus.listWebhooks(listWebhooksRequest);

  console.log(data);
})();
```

## deleteWebhook

Delete webhook

- HTTP Method: `DELETE`
- Endpoint: `/webhook/{webhook_id}`

**Parameters**

| Name      | Type   | Required | Description |
| :-------- | :----- | :------- | :---------- |
| webhookId | string | ✅       |             |

**Example Usage Code Snippet**

```typescript
import { Signplus } from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const { data } = await signplus.signplus.deleteWebhook('webhook_id');

  console.log(data);
})();
```
