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
    id: '<string>',
  };

  const addTemplateAnnotationRequestInitials: AddTemplateAnnotationRequestInitials = {
    id: '<string>',
  };

  const textFont2: TextFont2 = {
    family: 'SANS',
    italic: '<boolean>',
    bold: '<boolean>',
  };

  const addTemplateAnnotationRequestText: AddTemplateAnnotationRequestText = {
    size: '<number>',
    color: '<number>',
    value: '<string>',
    tooltip: '<string>',
    dynamicFieldName: '<string>',
    font: textFont2,
  };

  const datetimeFont2: DatetimeFont2 = {
    family: 'UNKNOWN',
    italic: '<boolean>',
    bold: '<boolean>',
  };

  const addTemplateAnnotationRequestDatetime: AddTemplateAnnotationRequestDatetime = {
    size: '<number>',
    font: datetimeFont2,
    color: '<string>',
    autoFill: '<boolean>',
    timezone: '<string>',
    timestamp: '<integer>',
    format: 'YMD_NUMERIC_SLASH',
  };

  const addTemplateAnnotationRequestCheckbox: AddTemplateAnnotationRequestCheckbox = {
    checked: '<boolean>',
    style: 'TIMES_SQUARE',
  };

  const addTemplateAnnotationRequest: AddTemplateAnnotationRequest = {
    documentId: '<string>',
    page: '<integer>',
    x: '<float>',
    y: '<float>',
    width: '<float>',
    height: '<float>',
    type: 'INITIALS',
    recipientId: '<string>',
    required: '<boolean>',
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
