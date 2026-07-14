import { z } from 'zod';

/**
 * Zod schema for the DynamicField model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const dynamicField = z.lazy(() => {
  return z.object({
    name: z.string().optional(),
    value: z.string().optional(),
  });
});

/**
 *
 * @typedef  {DynamicField} dynamicField
 * @property {string} - Name of the dynamic field
 * @property {string} - Value of the dynamic field
 */
export type DynamicField = z.infer<typeof dynamicField>;

/**
 * Zod schema for mapping API responses to the DynamicField application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const dynamicFieldResponse = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      value: z.string().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      value: data['value'],
    }));
});

/**
 * Zod schema for mapping the DynamicField application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const dynamicFieldRequest = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      value: z.string().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      value: data['value'],
    }));
});
