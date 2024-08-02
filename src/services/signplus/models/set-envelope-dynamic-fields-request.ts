import { z } from 'zod';
import { dynamicField, dynamicFieldRequest, dynamicFieldResponse } from './dynamic-field';

/**
 * The shape of the model inside the application code - what the users use
 */
export const setEnvelopeDynamicFieldsRequest = z.lazy(() => {
  return z.object({
    dynamicFields: z.array(dynamicField),
  });
});

/**
 *
 * @typedef  {SetEnvelopeDynamicFieldsRequest} setEnvelopeDynamicFieldsRequest
 * @property {DynamicField[]} - List of dynamic fields
 */
export type SetEnvelopeDynamicFieldsRequest = z.infer<typeof setEnvelopeDynamicFieldsRequest>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const setEnvelopeDynamicFieldsRequestResponse = z.lazy(() => {
  return z
    .object({
      dynamic_fields: z.array(dynamicFieldResponse),
    })
    .transform((data) => ({
      dynamicFields: data['dynamic_fields'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const setEnvelopeDynamicFieldsRequestRequest = z.lazy(() => {
  return z.object({ dynamicFields: z.array(dynamicFieldRequest).nullish() }).transform((data) => ({
    dynamic_fields: data['dynamicFields'],
  }));
});
