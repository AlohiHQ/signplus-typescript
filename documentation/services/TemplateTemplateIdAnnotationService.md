# TemplateTemplateIdAnnotationService

A list of all methods in the `TemplateTemplateIdAnnotationService` service. Click on the method name to view detailed information about that method.

| Methods                                         | Description             |
| :---------------------------------------------- | :---------------------- |
| [addTemplateAnnotation](#addtemplateannotation) | Add template annotation |

## addTemplateAnnotation

Add template annotation

- HTTP Method: `POST`
- Endpoint: `/template/{template_id}/annotation`

**Parameters**

| Name       | Type                                                                      | Required | Description       |
| :--------- | :------------------------------------------------------------------------ | :------- | :---------------- |
| body       | [AddTemplateAnnotationRequest](../models/AddTemplateAnnotationRequest.md) | ✅       | The request body. |
| templateId | string                                                                    | ✅       |                   |
| accept     | string                                                                    | ✅       |                   |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import {
  AddTemplateAnnotationRequest,
  AddTemplateAnnotationRequestCheckbox,
  AddTemplateAnnotationRequestDatetime,
  AddTemplateAnnotationRequestInitials,
  AddTemplateAnnotationRequestSignature,
  AddTemplateAnnotationRequestText,
  DatetimeFont2,
  Signplus,
  TextFont2,
} from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const addTemplateAnnotationRequestSignature: AddTemplateAnnotationRequestSignature = {
    id: 'string',
  };

  const addTemplateAnnotationRequestInitials: AddTemplateAnnotationRequestInitials = {
    id: 'string',
  };

  const textFont2: TextFont2 = {
    family: 'SANS',
    italic: true,
    bold: true,
  };

  const addTemplateAnnotationRequestText: AddTemplateAnnotationRequestText = {
    size: 6190.822136605691,
    color: 6489.781325519173,
    value: 'string',
    tooltip: 'string',
    dynamicFieldName: 'string',
    font: textFont2,
  };

  const datetimeFont2: DatetimeFont2 = {
    family: 'SERIF',
    italic: true,
    bold: true,
  };

  const addTemplateAnnotationRequestDatetime: AddTemplateAnnotationRequestDatetime = {
    size: 3773.1065479576364,
    font: datetimeFont2,
    color: 'string',
    autoFill: true,
    timezone: 'string',
    timestamp: 6868,
    format: 'MDY_TEXT_SPACE_SHORT',
  };

  const addTemplateAnnotationRequestCheckbox: AddTemplateAnnotationRequestCheckbox = {
    checked: true,
    style: 'SQUARE_CHECK',
  };

  const addTemplateAnnotationRequest: AddTemplateAnnotationRequest = {
    documentId: 'string',
    page: 6387,
    x: 4410.13346533615,
    y: 5148.888749329143,
    width: 3756.0248729763225,
    height: 4178.76189579703,
    type: 'INITIALS',
    recipientId: 'string',
    required: true,
    signature: addTemplateAnnotationRequestSignature,
    initials: addTemplateAnnotationRequestInitials,
    text: addTemplateAnnotationRequestText,
    datetime: addTemplateAnnotationRequestDatetime,
    checkbox: addTemplateAnnotationRequestCheckbox,
  };

  const data = await signplus.templateTemplateIdAnnotation.addTemplateAnnotation(
    'template_id',
    addTemplateAnnotationRequest,
    {
      accept: 'application/json',
    },
  );

  console.log(data);
})();
```
