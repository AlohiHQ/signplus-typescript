import { z } from 'zod';

/**
 * Zod schema for the AttachmentPlaceholderFile model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const attachmentPlaceholderFile = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    size: z.number().optional(),
    mimetype: z.string().optional(),
  });
});

/**
 *
 * @typedef  {AttachmentPlaceholderFile} attachmentPlaceholderFile
 * @property {string} - ID of the file
 * @property {string} - Name of the file
 * @property {number} - Size of the file in bytes
 * @property {string} - MIME type of the file
 */
export type AttachmentPlaceholderFile = z.infer<typeof attachmentPlaceholderFile>;

/**
 * Zod schema for mapping API responses to the AttachmentPlaceholderFile application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const attachmentPlaceholderFileResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      size: z.number().optional(),
      mimetype: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      size: data['size'],
      mimetype: data['mimetype'],
    }));
});

/**
 * Zod schema for mapping the AttachmentPlaceholderFile application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const attachmentPlaceholderFileRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      size: z.number().optional(),
      mimetype: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      size: data['size'],
      mimetype: data['mimetype'],
    }));
});
