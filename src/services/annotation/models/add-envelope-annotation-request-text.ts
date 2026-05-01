import { z } from 'zod';
import { TextFont1, textFont1, textFont1Request, textFont1Response } from './text-font-1';

/**
 * Zod schema for the AddEnvelopeAnnotationRequestText model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const addEnvelopeAnnotationRequestText = z.lazy(() => {
  return z.object({
    size: z.number().optional().nullable(),
    color: z.number().optional().nullable(),
    value: z.string().optional().nullable(),
    tooltip: z.string().optional().nullable(),
    dynamicFieldName: z.string().optional().nullable(),
    font: textFont1.optional().nullable(),
  });
});

/**
 *
 * @typedef  {AddEnvelopeAnnotationRequestText} addEnvelopeAnnotationRequestText
 * @property {number}
 * @property {number}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {TextFont1}
 */
export type AddEnvelopeAnnotationRequestText = z.infer<typeof addEnvelopeAnnotationRequestText>;

/**
 * Zod schema for mapping API responses to the AddEnvelopeAnnotationRequestText application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const addEnvelopeAnnotationRequestTextResponse = z.lazy(() => {
  return z
    .object({
      size: z.number().optional().nullable(),
      color: z.number().optional().nullable(),
      value: z.string().optional().nullable(),
      tooltip: z.string().optional().nullable(),
      dynamic_field_name: z.string().optional().nullable(),
      font: textFont1Response.optional().nullable(),
    })
    .transform((data) => ({
      size: data['size'],
      color: data['color'],
      value: data['value'],
      tooltip: data['tooltip'],
      dynamicFieldName: data['dynamic_field_name'],
      font: data['font'],
    }));
});

/**
 * Zod schema for mapping the AddEnvelopeAnnotationRequestText application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const addEnvelopeAnnotationRequestTextRequest = z.lazy(() => {
  return z
    .object({
      size: z.number().optional().nullable(),
      color: z.number().optional().nullable(),
      value: z.string().optional().nullable(),
      tooltip: z.string().optional().nullable(),
      dynamicFieldName: z.string().optional().nullable(),
      font: textFont1Request.optional().nullable(),
    })
    .transform((data) => ({
      size: data['size'],
      color: data['color'],
      value: data['value'],
      tooltip: data['tooltip'],
      dynamic_field_name: data['dynamicFieldName'],
      font: data['font'],
    }));
});
