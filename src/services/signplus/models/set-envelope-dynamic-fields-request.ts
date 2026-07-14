import { z } from 'zod';
import {
  DynamicField,
  dynamicField,
  dynamicFieldRequest,
  dynamicFieldResponse,
} from './dynamic-field';

/**
 * Zod schema for the SetEnvelopeDynamicFieldsRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
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
 * Zod schema for mapping API responses to the SetEnvelopeDynamicFieldsRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
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
 * Zod schema for mapping the SetEnvelopeDynamicFieldsRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const setEnvelopeDynamicFieldsRequestRequest = z.lazy(() => {
  return z
    .object({
      dynamicFields: z.array(dynamicFieldRequest),
    })
    .transform((data) => ({
      dynamic_fields: data['dynamicFields'],
    }));
});
