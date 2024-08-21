# SignplusService

A list of all methods in the `SignplusService` service. Click on the method name to view detailed information about that method.

| Methods                                                                 | Description                       |
| :---------------------------------------------------------------------- | :-------------------------------- |
| [create_envelope](#create_envelope)                                     | Create new envelope               |
| [create_envelope_from_template](#create_envelope_from_template)         | Create new envelope from template |
| [list_envelopes](#list_envelopes)                                       | List envelopes                    |
| [get_envelope](#get_envelope)                                           | Get envelope                      |
| [delete_envelope](#delete_envelope)                                     | Delete envelope                   |
| [get_envelope_document](#get_envelope_document)                         | Get envelope document             |
| [get_envelope_documents](#get_envelope_documents)                       | Get envelope documents            |
| [add_envelope_document](#add_envelope_document)                         | Add envelope document             |
| [set_envelope_dynamic_fields](#set_envelope_dynamic_fields)             | Set envelope dynamic fields       |
| [add_envelope_signing_steps](#add_envelope_signing_steps)               | Add envelope signing steps        |
| [send_envelope](#send_envelope)                                         | Send envelope for signature       |
| [duplicate_envelope](#duplicate_envelope)                               | Duplicate envelope                |
| [void_envelope](#void_envelope)                                         | Void envelope                     |
| [rename_envelope](#rename_envelope)                                     | Rename envelope                   |
| [set_envelope_comment](#set_envelope_comment)                           | Set envelope comment              |
| [set_envelope_notification](#set_envelope_notification)                 | Set envelope notification         |
| [set_envelope_expiration_date](#set_envelope_expiration_date)           | Set envelope expiration date      |
| [set_envelope_legality_level](#set_envelope_legality_level)             | Set envelope legality level       |
| [get_envelope_annotations](#get_envelope_annotations)                   | Get envelope annotations          |
| [get_envelope_document_annotations](#get_envelope_document_annotations) | Get envelope document annotations |
| [add_envelope_annotation](#add_envelope_annotation)                     | Add envelope annotation           |
| [delete_envelope_annotation](#delete_envelope_annotation)               | Delete envelope annotation        |
| [create_template](#create_template)                                     | Create new template               |
| [list_templates](#list_templates)                                       | List templates                    |
| [get_template](#get_template)                                           | Get template                      |
| [delete_template](#delete_template)                                     | Delete template                   |
| [duplicate_template](#duplicate_template)                               | Duplicate template                |
| [add_template_document](#add_template_document)                         | Add template document             |
| [get_template_document](#get_template_document)                         | Get template document             |
| [get_template_documents](#get_template_documents)                       | Get template documents            |
| [add_template_signing_steps](#add_template_signing_steps)               | Add template signing steps        |
| [rename_template](#rename_template)                                     | Rename template                   |
| [set_template_comment](#set_template_comment)                           | Set template comment              |
| [set_template_notification](#set_template_notification)                 | Set template notification         |
| [get_template_annotations](#get_template_annotations)                   | Get template annotations          |
| [get_document_template_annotations](#get_document_template_annotations) | Get document template annotations |
| [add_template_annotation](#add_template_annotation)                     | Add template annotation           |
| [delete_template_annotation](#delete_template_annotation)               | Delete template annotation        |
| [create_webhook](#create_webhook)                                       | Create webhook                    |
| [list_webhooks](#list_webhooks)                                         | List webhooks                     |
| [delete_webhook](#delete_webhook)                                       | Delete webhook                    |

## create_envelope

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
    expiresAt: 8,
    comment: 'comment',
    sandbox: true,
  };

  const { data } = await signplus.signplus.createEnvelope(input);

  console.log(data);
})();
```

## create_envelope_from_template

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

  const { data } = await signplus.signplus.createEnvelopeFromTemplate('template_id', input);

  console.log(data);
})();
```

## list_envelopes

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

  const envelopeOrderField = EnvelopeOrderField.CREATIONDATE;

  const listEnvelopesRequest: ListEnvelopesRequest = {
    name: 'name',
    tags: ['tags'],
    comment: 'comment',
    ids: ['ids'],
    statuses: [envelopeStatus],
    folderIds: ['folder_ids'],
    onlyRootFolder: true,
    dateFrom: 4,
    dateTo: 7,
    uid: 'uid',
    first: 8,
    last: 9,
    after: 'after',
    before: 'before',
    orderField: envelopeOrderField,
    ascending: true,
    includeTrash: true,
  };

  const { data } = await signplus.signplus.listEnvelopes(input);

  console.log(data);
})();
```

## get_envelope

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

## delete_envelope

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

## get_envelope_document

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

## get_envelope_documents

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

## add_envelope_document

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
    file: file,
  };

  const { data } = await signplus.signplus.addEnvelopeDocument('envelope_id', input);

  console.log(data);
})();
```

## set_envelope_dynamic_fields

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

  const { data } = await signplus.signplus.setEnvelopeDynamicFields('envelope_id', input);

  console.log(data);
})();
```

## add_envelope_signing_steps

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

  const { data } = await signplus.signplus.addEnvelopeSigningSteps('envelope_id', input);

  console.log(data);
})();
```

## send_envelope

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

## duplicate_envelope

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

## void_envelope

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

## rename_envelope

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

  const { data } = await signplus.signplus.renameEnvelope('envelope_id', input);

  console.log(data);
})();
```

## set_envelope_comment

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

  const { data } = await signplus.signplus.setEnvelopeComment('envelope_id', input);

  console.log(data);
})();
```

## set_envelope_notification

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
    reminderInterval: 1,
  };

  const { data } = await signplus.signplus.setEnvelopeNotification('envelope_id', input);

  console.log(data);
})();
```

## set_envelope_expiration_date

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
    expiresAt: 6,
  };

  const { data } = await signplus.signplus.setEnvelopeExpirationDate('envelope_id', input);

  console.log(data);
})();
```

## set_envelope_legality_level

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

  const { data } = await signplus.signplus.setEnvelopeLegalityLevel('envelope_id', input);

  console.log(data);
})();
```

## get_envelope_annotations

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

## get_envelope_document_annotations

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

## add_envelope_annotation

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
    size: 0.75,
    color: 0.4,
    value: 'value',
    tooltip: 'tooltip',
    dynamicFieldName: 'dynamic_field_name',
    font: annotationFont,
  };

  const annotationDateTimeFormat = AnnotationDateTimeFormat.DMYNUMERICSLASH;

  const annotationDateTime: AnnotationDateTime = {
    size: 2.34,
    font: annotationFont,
    color: 'color',
    autoFill: true,
    timezone: 'timezone',
    timestamp: 6,
    format: annotationDateTimeFormat,
  };

  const annotationCheckboxStyle = AnnotationCheckboxStyle.CIRCLECHECK;

  const annotationCheckbox: AnnotationCheckbox = {
    checked: true,
    style: annotationCheckboxStyle,
  };

  const addAnnotationRequest: AddAnnotationRequest = {
    recipientId: 'recipient_id',
    documentId: 'document_id',
    page: 5,
    x: 2.83,
    y: 1.27,
    width: 5.18,
    height: 4.34,
    required: true,
    type: annotationType,
    signature: annotationSignature,
    initials: annotationInitials,
    text: annotationText,
    datetime: annotationDateTime,
    checkbox: annotationCheckbox,
  };

  const { data } = await signplus.signplus.addEnvelopeAnnotation('envelope_id', input);

  console.log(data);
})();
```

## delete_envelope_annotation

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

## create_template

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

  const { data } = await signplus.signplus.createTemplate(input);

  console.log(data);
})();
```

## list_templates

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

  const templateOrderField = TemplateOrderField.TEMPLATEID;

  const listTemplatesRequest: ListTemplatesRequest = {
    name: 'name',
    tags: ['tags'],
    ids: ['ids'],
    first: 2,
    last: 123,
    after: 'after',
    before: 'before',
    orderField: templateOrderField,
    ascending: true,
  };

  const { data } = await signplus.signplus.listTemplates(input);

  console.log(data);
})();
```

## get_template

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

## delete_template

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

## duplicate_template

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

## add_template_document

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
    file: file,
  };

  const { data } = await signplus.signplus.addTemplateDocument('template_id', input);

  console.log(data);
})();
```

## get_template_document

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

## get_template_documents

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

## add_template_signing_steps

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

  const { data } = await signplus.signplus.addTemplateSigningSteps('template_id', input);

  console.log(data);
})();
```

## rename_template

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

  const { data } = await signplus.signplus.renameTemplate('template_id', input);

  console.log(data);
})();
```

## set_template_comment

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

  const { data } = await signplus.signplus.setTemplateComment('template_id', input);

  console.log(data);
})();
```

## set_template_notification

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
    reminderInterval: 1,
  };

  const { data } = await signplus.signplus.setTemplateNotification('template_id', input);

  console.log(data);
})();
```

## get_template_annotations

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

## get_document_template_annotations

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

## add_template_annotation

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
    size: 0.75,
    color: 0.4,
    value: 'value',
    tooltip: 'tooltip',
    dynamicFieldName: 'dynamic_field_name',
    font: annotationFont,
  };

  const annotationDateTimeFormat = AnnotationDateTimeFormat.DMYNUMERICSLASH;

  const annotationDateTime: AnnotationDateTime = {
    size: 2.34,
    font: annotationFont,
    color: 'color',
    autoFill: true,
    timezone: 'timezone',
    timestamp: 6,
    format: annotationDateTimeFormat,
  };

  const annotationCheckboxStyle = AnnotationCheckboxStyle.CIRCLECHECK;

  const annotationCheckbox: AnnotationCheckbox = {
    checked: true,
    style: annotationCheckboxStyle,
  };

  const addAnnotationRequest: AddAnnotationRequest = {
    recipientId: 'recipient_id',
    documentId: 'document_id',
    page: 5,
    x: 2.83,
    y: 1.27,
    width: 5.18,
    height: 4.34,
    required: true,
    type: annotationType,
    signature: annotationSignature,
    initials: annotationInitials,
    text: annotationText,
    datetime: annotationDateTime,
    checkbox: annotationCheckbox,
  };

  const { data } = await signplus.signplus.addTemplateAnnotation('template_id', input);

  console.log(data);
})();
```

## delete_template_annotation

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

## create_webhook

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

  const webhookEvent = WebhookEvent.ENVELOPEEXPIRED;

  const createWebhookRequest: CreateWebhookRequest = {
    event: webhookEvent,
    target: 'target',
  };

  const { data } = await signplus.signplus.createWebhook(input);

  console.log(data);
})();
```

## list_webhooks

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

  const webhookEvent = WebhookEvent.ENVELOPEEXPIRED;

  const listWebhooksRequest: ListWebhooksRequest = {
    webhookId: 'webhook_id',
    event: webhookEvent,
  };

  const { data } = await signplus.signplus.listWebhooks(input);

  console.log(data);
})();
```

## delete_webhook

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
