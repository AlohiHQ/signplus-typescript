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
    id: 'string',
  };

  const addEnvelopeAnnotationRequestInitials: AddEnvelopeAnnotationRequestInitials = {
    id: 'string',
  };

  const textFont1: TextFont1 = {
    family: 'SANS',
    italic: true,
    bold: true,
  };

  const addEnvelopeAnnotationRequestText: AddEnvelopeAnnotationRequestText = {
    size: 6190.822136605691,
    color: 6489.781325519173,
    value: 'string',
    tooltip: 'string',
    dynamicFieldName: 'string',
    font: textFont1,
  };

  const datetimeFont1: DatetimeFont1 = {
    family: 'SERIF',
    italic: true,
    bold: true,
  };

  const addEnvelopeAnnotationRequestDatetime: AddEnvelopeAnnotationRequestDatetime = {
    size: 3773.1065479576364,
    font: datetimeFont1,
    color: 'string',
    autoFill: true,
    timezone: 'string',
    timestamp: 6868,
    format: 'MDY_TEXT_SPACE_SHORT',
  };

  const addEnvelopeAnnotationRequestCheckbox: AddEnvelopeAnnotationRequestCheckbox = {
    checked: true,
    style: 'SQUARE_CHECK',
  };

  const addEnvelopeAnnotationRequest: AddEnvelopeAnnotationRequest = {
    documentId: 'string',
    page: 6387,
    x: 4410.13346533615,
    y: 5148.888749329143,
    width: 3756.0248729763225,
    height: 4178.76189579703,
    type: 'INITIALS',
    recipientId: 'string',
    required: true,
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
