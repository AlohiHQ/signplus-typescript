import { z } from 'zod';
import { AnnotationFont, annotationFont, annotationFontRequest, annotationFontResponse } from './annotation-font';

/**
 * The shape of the model inside the application code - what the users use
 */
export const annotationText = z.lazy(() => {
  return z.object({
    size: z.number().optional(),
    color: z.number().optional(),
    value: z.string().optional(),
    tooltip: z.string().optional(),
    dynamicFieldName: z.string().optional(),
    font: annotationFont.optional(),
  });
});

/**
 * Text annotation (null if annotation is not a text)
 * @typedef  {AnnotationText} annotationText - Text annotation (null if annotation is not a text) - Text annotation (null if annotation is not a text)
 * @property {number} - Font size of the text in pt
 * @property {number} - Text color in 32bit representation
 * @property {string} - Text content of the annotation
 * @property {string} - Tooltip of the annotation
 * @property {string} - Name of the dynamic field
 * @property {AnnotationFont}
 */
export type AnnotationText = z.infer<typeof annotationText>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const annotationTextResponse = z.lazy(() => {
  return z
    .object({
      size: z.number().optional(),
      color: z.number().optional(),
      value: z.string().optional(),
      tooltip: z.string().optional(),
      dynamic_field_name: z.string().optional(),
      font: annotationFontResponse.optional(),
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
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const annotationTextRequest = z.lazy(() => {
  return z
    .object({
      size: z.number().optional(),
      color: z.number().optional(),
      value: z.string().optional(),
      tooltip: z.string().optional(),
      dynamicFieldName: z.string().optional(),
      font: annotationFontRequest.optional(),
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
