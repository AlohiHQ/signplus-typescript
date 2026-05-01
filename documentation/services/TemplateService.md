# TemplateService

A list of all methods in the `TemplateService` service. Click on the method name to view detailed information about that method.

| Methods                           | Description         |
| :-------------------------------- | :------------------ |
| [createTemplate](#createtemplate) | Create new template |

## createTemplate

Create new template

- HTTP Method: `POST`
- Endpoint: `/template`

**Parameters**

| Name   | Type                                                        | Required | Description       |
| :----- | :---------------------------------------------------------- | :------- | :---------------- |
| body   | [CreateTemplateRequest](../models/CreateTemplateRequest.md) | ✅       | The request body. |
| accept | string                                                      | ✅       |                   |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { CreateTemplateRequest, Signplus } from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const createTemplateRequest: CreateTemplateRequest = {
    name: '9AF5Q5BuJY8',
  };

  const data = await signplus.template.createTemplate(createTemplateRequest, {
    accept: 'application/json',
  });

  console.log(data);
})();
```
