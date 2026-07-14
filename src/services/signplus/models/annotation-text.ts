import { z } from 'zod';
import {
  AnnotationFont,
  annotationFont,
  annotationFontRequest,
  annotationFontResponse,
} from './annotation-font';

/**
 * Zod schema for the AnnotationText model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
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
 * Zod schema for mapping API responses to the AnnotationText application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
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
 * Zod schema for mapping the AnnotationText application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
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
