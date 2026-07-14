# Annotation

**Properties**

| Name        | Type                                          | Required | Description                                                                                     |
| :---------- | :-------------------------------------------- | :------- | :---------------------------------------------------------------------------------------------- |
| id          | string                                        | ❌       | Unique identifier of the annotation                                                             |
| recipientId | string                                        | ❌       | ID of the recipient                                                                             |
| documentId  | string                                        | ❌       | ID of the document                                                                              |
| page        | number                                        | ❌       | Page number where the annotation is placed                                                      |
| x           | number                                        | ❌       | X coordinate of the annotation (in % of the page width from 0 to 100) from the top left corner  |
| y           | number                                        | ❌       | Y coordinate of the annotation (in % of the page height from 0 to 100) from the top left corner |
| width       | number                                        | ❌       | Width of the annotation (in % of the page width from 0 to 100)                                  |
| height      | number                                        | ❌       | Height of the annotation (in % of the page height from 0 to 100)                                |
| required    | boolean                                       | ❌       | Whether the annotation is required                                                              |
| type        | [AnnotationType](AnnotationType.md)           | ❌       | Type of the annotation                                                                          |
| signature   | [AnnotationSignature](AnnotationSignature.md) | ❌       | Signature annotation (null if annotation is not a signature)                                    |
| initials    | [AnnotationInitials](AnnotationInitials.md)   | ❌       | Initials annotation (null if annotation is not initials)                                        |
| text        | [AnnotationText](AnnotationText.md)           | ❌       | Text annotation (null if annotation is not a text)                                              |
| datetime    | [AnnotationDateTime](AnnotationDateTime.md)   | ❌       | Date annotation (null if annotation is not a date)                                              |
| checkbox    | [AnnotationCheckbox](AnnotationCheckbox.md)   | ❌       | Checkbox annotation (null if annotation is not a checkbox)                                      |
