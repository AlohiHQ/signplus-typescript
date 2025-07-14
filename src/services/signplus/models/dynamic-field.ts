import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
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
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
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
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
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
