# ListEnvelopesRequest

**Properties**

| Name           | Type               | Required | Description                                       |
| :------------- | :----------------- | :------- | :------------------------------------------------ |
| name           | string             | ❌       | Name of the envelope                              |
| tags           | string[]           | ❌       | List of tags                                      |
| comment        | string             | ❌       | Comment of the envelope                           |
| ids            | string[]           | ❌       | List of envelope IDs                              |
| statuses       | EnvelopeStatus[]   | ❌       | List of envelope statuses                         |
| folderIds      | string[]           | ❌       | List of folder IDs                                |
| onlyRootFolder | boolean            | ❌       | Whether to only list envelopes in the root folder |
| dateFrom       | number             | ❌       | Unix timestamp of the start date                  |
| dateTo         | number             | ❌       | Unix timestamp of the end date                    |
| uid            | string             | ❌       | Unique identifier of the user                     |
| first          | number             | ❌       |                                                   |
| last           | number             | ❌       |                                                   |
| after          | string             | ❌       |                                                   |
| before         | string             | ❌       |                                                   |
| orderField     | EnvelopeOrderField | ❌       | Field to order envelopes by                       |
| ascending      | boolean            | ❌       | Whether to order envelopes in ascending order     |
| includeTrash   | boolean            | ❌       | Whether to include envelopes in the trash         |
