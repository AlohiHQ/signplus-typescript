import { z } from 'zod';
import {
  DatetimeFont2,
  datetimeFont2,
  datetimeFont2Request,
  datetimeFont2Response,
} from './datetime-font-2';

/**
 * Zod schema for the AddTemplateAnnotationRequestDatetime model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const addTemplateAnnotationRequestDatetime = z.lazy(() => {
  return z.object({
    size: z.string().optional().nullable(),
    font: datetimeFont2.optional().nullable(),
    color: z.string().optional().nullable(),
    autoFill: z.string().optional().nullable(),
    timezone: z.string().optional().nullable(),
    timestamp: z.string().optional().nullable(),
    format: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {AddTemplateAnnotationRequestDatetime} addTemplateAnnotationRequestDatetime
 * @property {string}
 * @property {DatetimeFont2}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 */
export type AddTemplateAnnotationRequestDatetime = z.infer<
  typeof addTemplateAnnotationRequestDatetime
>;

/**
 * Zod schema for mapping API responses to the AddTemplateAnnotationRequestDatetime application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const addTemplateAnnotationRequestDatetimeResponse = z.lazy(() => {
  return z
    .object({
      size: z.string().optional().nullable(),
      font: datetimeFont2Response.optional().nullable(),
      color: z.string().optional().nullable(),
      auto_fill: z.string().optional().nullable(),
      timezone: z.string().optional().nullable(),
      timestamp: z.string().optional().nullable(),
      format: z.string().optional().nullable(),
    })
    .transform((data) => ({
      size: data['size'],
      font: data['font'],
      color: data['color'],
      autoFill: data['auto_fill'],
      timezone: data['timezone'],
      timestamp: data['timestamp'],
      format: data['format'],
    }));
});

/**
 * Zod schema for mapping the AddTemplateAnnotationRequestDatetime application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const addTemplateAnnotationRequestDatetimeRequest = z.lazy(() => {
  return z
    .object({
      size: z.string().optional().nullable(),
      font: datetimeFont2Request.optional().nullable(),
      color: z.string().optional().nullable(),
      autoFill: z.string().optional().nullable(),
      timezone: z.string().optional().nullable(),
      timestamp: z.string().optional().nullable(),
      format: z.string().optional().nullable(),
    })
    .transform((data) => ({
      size: data['size'],
      font: data['font'],
      color: data['color'],
      auto_fill: data['autoFill'],
      timezone: data['timezone'],
      timestamp: data['timestamp'],
      format: data['format'],
    }));
});
