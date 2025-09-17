import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
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
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
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
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
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
