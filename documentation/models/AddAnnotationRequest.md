# AddAnnotationRequest

**Properties**

| Name        | Type                | Required | Description                                                                                     |
| :---------- | :------------------ | :------- | :---------------------------------------------------------------------------------------------- |
| documentId  | string              | ✅       | ID of the document                                                                              |
| page        | number              | ✅       | Page number where the annotation is placed                                                      |
| x           | number              | ✅       | X coordinate of the annotation (in % of the page width from 0 to 100) from the top left corner  |
| y           | number              | ✅       | Y coordinate of the annotation (in % of the page height from 0 to 100) from the top left corner |
| width       | number              | ✅       | Width of the annotation (in % of the page width from 0 to 100)                                  |
| height      | number              | ✅       | Height of the annotation (in % of the page height from 0 to 100)                                |
| type        | AnnotationType      | ✅       | Type of the annotation                                                                          |
| recipientId | string              | ❌       | ID of the recipient                                                                             |
| required    | boolean             | ❌       |                                                                                                 |
| signature   | AnnotationSignature | ❌       | Signature annotation (null if annotation is not a signature)                                    |
| initials    | AnnotationInitials  | ❌       | Initials annotation (null if annotation is not initials)                                        |
| text        | AnnotationText      | ❌       | Text annotation (null if annotation is not a text)                                              |
| datetime    | AnnotationDateTime  | ❌       | Date annotation (null if annotation is not a date)                                              |
| checkbox    | AnnotationCheckbox  | ❌       | Checkbox annotation (null if annotation is not a checkbox)                                      |
