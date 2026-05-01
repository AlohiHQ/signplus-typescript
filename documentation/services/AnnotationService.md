# AnnotationService

A list of all methods in the `AnnotationService` service. Click on the method name to view detailed information about that method.

| Methods                                         | Description             |
| :---------------------------------------------- | :---------------------- |
| [addEnvelopeAnnotation](#addenvelopeannotation) | Add envelope annotation |

## addEnvelopeAnnotation

Add envelope annotation

- HTTP Method: `POST`
- Endpoint: `/envelope/{envelope_id}/annotation`

**Parameters**

| Name       | Type                                                                      | Required | Description       |
| :--------- | :------------------------------------------------------------------------ | :------- | :---------------- |
| body       | [AddEnvelopeAnnotationRequest](../models/AddEnvelopeAnnotationRequest.md) | ✅       | The request body. |
| envelopeId | string                                                                    | ✅       |                   |
| accept     | string                                                                    | ✅       |                   |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import {
  AddEnvelopeAnnotationRequest,
  AddEnvelopeAnnotationRequestCheckbox,
  AddEnvelopeAnnotationRequestDatetime,
  AddEnvelopeAnnotationRequestInitials,
  AddEnvelopeAnnotationRequestSignature,
  AddEnvelopeAnnotationRequestText,
  DatetimeFont1,
  Signplus,
  TextFont1,
} from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const addEnvelopeAnnotationRequestSignature: AddEnvelopeAnnotationRequestSignature = {
    id: '<string>',
  };

  const addEnvelopeAnnotationRequestInitials: AddEnvelopeAnnotationRequestInitials = {
    id: '<string>',
  };

  const textFont1: TextFont1 = {
    family: 'SANS',
    italic: '<boolean>',
    bold: '<boolean>',
  };

  const addEnvelopeAnnotationRequestText: AddEnvelopeAnnotationRequestText = {
    size: '<number>',
    color: '<number>',
    value: '<string>',
    tooltip: '<string>',
    dynamicFieldName: '<string>',
    font: textFont1,
  };

  const datetimeFont1: DatetimeFont1 = {
    family: 'UNKNOWN',
    italic: '<boolean>',
    bold: '<boolean>',
  };

  const addEnvelopeAnnotationRequestDatetime: AddEnvelopeAnnotationRequestDatetime = {
    size: '<number>',
    font: datetimeFont1,
    color: '<string>',
    autoFill: '<boolean>',
    timezone: '<string>',
    timestamp: '<integer>',
    format: 'YMD_NUMERIC_SLASH',
  };

  const addEnvelopeAnnotationRequestCheckbox: AddEnvelopeAnnotationRequestCheckbox = {
    checked: '<boolean>',
    style: 'TIMES_SQUARE',
  };

  const addEnvelopeAnnotationRequest: AddEnvelopeAnnotationRequest = {
    documentId: '<string>',
    page: '<integer>',
    x: '<float>',
    y: '<float>',
    width: '<float>',
    height: '<float>',
    type: 'INITIALS',
    recipientId: '<string>',
    required: '<boolean>',
    signature: addEnvelopeAnnotationRequestSignature,
    initials: addEnvelopeAnnotationRequestInitials,
    text: addEnvelopeAnnotationRequestText,
    datetime: addEnvelopeAnnotationRequestDatetime,
    checkbox: addEnvelopeAnnotationRequestCheckbox,
  };

  const data = await signplus.annotation.addEnvelopeAnnotation(
    'envelope_id',
    addEnvelopeAnnotationRequest,
    {
      accept: 'application/json',
    },
  );

  console.log(data);
})();
```
