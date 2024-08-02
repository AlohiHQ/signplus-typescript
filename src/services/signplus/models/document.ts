import { z } from 'zod';
import { page, pageRequest, pageResponse } from './page';

/**
 * The shape of the model inside the application code - what the users use
 */
export const document = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    filename: z.string().optional(),
    pageCount: z.number().optional(),
    pages: z.array(page).optional(),
  });
});

/**
 *
 * @typedef  {Document} document
 * @property {string} - Unique identifier of the document
 * @property {string} - Name of the document
 * @property {string} - Filename of the document
 * @property {number} - Number of pages in the document
 * @property {Page[]} - List of pages in the document
 */
export type Document = z.infer<typeof document>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const documentResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      filename: z.string().optional(),
      page_count: z.number().optional(),
      pages: z.array(pageResponse).optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      filename: data['filename'],
      pageCount: data['page_count'],
      pages: data['pages'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const documentRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().nullish(),
      name: z.string().nullish(),
      filename: z.string().nullish(),
      pageCount: z.number().nullish(),
      pages: z.array(pageRequest).nullish(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      filename: data['filename'],
      page_count: data['pageCount'],
      pages: data['pages'],
    }));
});
