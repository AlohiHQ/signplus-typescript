import { z } from 'zod';
import { TextFont2, textFont2, textFont2Request, textFont2Response } from './text-font-2';

/**
 * Zod schema for the AddTemplateAnnotationRequestText model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const addTemplateAnnotationRequestText = z.lazy(() => {
  return z.object({
    size: z.number().optional().nullable(),
    color: z.number().optional().nullable(),
    value: z.string().optional().nullable(),
    tooltip: z.string().optional().nullable(),
    dynamicFieldName: z.string().optional().nullable(),
    font: textFont2.optional().nullable(),
  });
});

/**
 *
 * @typedef  {AddTemplateAnnotationRequestText} addTemplateAnnotationRequestText
 * @property {number}
 * @property {number}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {TextFont2}
 */
export type AddTemplateAnnotationRequestText = z.infer<typeof addTemplateAnnotationRequestText>;

/**
 * Zod schema for mapping API responses to the AddTemplateAnnotationRequestText application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const addTemplateAnnotationRequestTextResponse = z.lazy(() => {
  return z
    .object({
      size: z.number().optional().nullable(),
      color: z.number().optional().nullable(),
      value: z.string().optional().nullable(),
      tooltip: z.string().optional().nullable(),
      dynamic_field_name: z.string().optional().nullable(),
      font: textFont2Response.optional().nullable(),
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
 * Zod schema for mapping the AddTemplateAnnotationRequestText application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const addTemplateAnnotationRequestTextRequest = z.lazy(() => {
  return z
    .object({
      size: z.number().optional().nullable(),
      color: z.number().optional().nullable(),
      value: z.string().optional().nullable(),
      tooltip: z.string().optional().nullable(),
      dynamicFieldName: z.string().optional().nullable(),
      font: textFont2Request.optional().nullable(),
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
