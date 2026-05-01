import { z } from 'zod';

/**
 * Zod schema for the DynamicFields model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const dynamicFields = z.lazy(() => {
  return z.object({
    name: z.string().optional().nullable(),
    value: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {DynamicFields} dynamicFields
 * @property {string}
 * @property {string}
 */
export type DynamicFields = z.infer<typeof dynamicFields>;

/**
 * Zod schema for mapping API responses to the DynamicFields application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const dynamicFieldsResponse = z.lazy(() => {
  return z
    .object({
      name: z.string().optional().nullable(),
      value: z.string().optional().nullable(),
    })
    .transform((data) => ({
      name: data['name'],
      value: data['value'],
    }));
});

/**
 * Zod schema for mapping the DynamicFields application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const dynamicFieldsRequest = z.lazy(() => {
  return z
    .object({
      name: z.string().optional().nullable(),
      value: z.string().optional().nullable(),
    })
    .transform((data) => ({
      name: data['name'],
      value: data['value'],
    }));
});
