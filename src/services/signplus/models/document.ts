import { z } from 'zod';
import { Page, page, pageRequest, pageResponse } from './page';

/**
 * Zod schema for the Document model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
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
 * Zod schema for mapping API responses to the Document application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
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
 * Zod schema for mapping the Document application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const documentRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      filename: z.string().optional(),
      pageCount: z.number().optional(),
      pages: z.array(pageRequest).optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      filename: data['filename'],
      page_count: data['pageCount'],
      pages: data['pages'],
    }));
});
