# TemplatesService

A list of all methods in the `TemplatesService` service. Click on the method name to view detailed information about that method.

| Methods                         | Description    |
| :------------------------------ | :------------- |
| [listTemplates](#listtemplates) | List templates |

## listTemplates

List templates

- HTTP Method: `POST`
- Endpoint: `/templates`

**Parameters**

| Name   | Type                                                      | Required | Description       |
| :----- | :-------------------------------------------------------- | :------- | :---------------- |
| body   | [ListTemplatesRequest](../models/ListTemplatesRequest.md) | ✅       | The request body. |
| accept | string                                                    | ✅       |                   |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { ListTemplatesRequest, Signplus } from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const listTemplatesRequest: ListTemplatesRequest = {
    name: '<string>',
    tags: ['<string>'],
    ids: ['<string>'],
    first: '<integer>',
    last: '<integer>',
    after: '<string>',
    before: '<string>',
    orderField: 'TEMPLATE_CREATION_DATE',
    ascending: '<boolean>',
  };

  const data = await signplus.templates.listTemplates(listTemplatesRequest, {
    accept: 'application/json',
  });

  console.log(data);
})();
```
