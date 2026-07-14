import { z } from 'zod';

/**
 * Zod schema for the AddTemplateDocumentRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const addTemplateDocumentRequest = z.lazy(() => {
  return z.object({
    file: z.instanceof(ArrayBuffer),
  });
});

/**
 *
 * @typedef  {AddTemplateDocumentRequest} addTemplateDocumentRequest
 * @property {ArrayBuffer} - File to upload in binary format
 */
export type AddTemplateDocumentRequest = z.infer<typeof addTemplateDocumentRequest>;

/**
 * Zod schema for mapping API responses to the AddTemplateDocumentRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const addTemplateDocumentRequestResponse = z.lazy(() => {
  return z
    .object({
      file: z.instanceof(ArrayBuffer),
    })
    .transform((data) => ({
      file: data['file'],
    }));
});

/**
 * Zod schema for mapping the AddTemplateDocumentRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const addTemplateDocumentRequestRequest = z.lazy(() => {
  return z
    .object({
      file: z.instanceof(ArrayBuffer),
    })
    .transform((data) => ({
      file: data['file'],
    }));
});
