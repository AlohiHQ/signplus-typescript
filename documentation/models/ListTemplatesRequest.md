# ListTemplatesRequest

**Properties**

| Name       | Type                                        | Required | Description                                   |
| :--------- | :------------------------------------------ | :------- | :-------------------------------------------- |
| name       | string                                      | ❌       | Name of the template                          |
| tags       | string[]                                    | ❌       | List of tag templates                         |
| ids        | string[]                                    | ❌       | List of templates IDs                         |
| first      | number                                      | ❌       |                                               |
| last       | number                                      | ❌       |                                               |
| after      | string                                      | ❌       |                                               |
| before     | string                                      | ❌       |                                               |
| orderField | [TemplateOrderField](TemplateOrderField.md) | ❌       | Field to order templates by                   |
| ascending  | boolean                                     | ❌       | Whether to order templates in ascending order |
