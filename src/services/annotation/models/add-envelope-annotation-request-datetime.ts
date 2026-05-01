import { z } from 'zod';
import {
  DatetimeFont1,
  datetimeFont1,
  datetimeFont1Request,
  datetimeFont1Response,
} from './datetime-font-1';

/**
 * Zod schema for the AddEnvelopeAnnotationRequestDatetime model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const addEnvelopeAnnotationRequestDatetime = z.lazy(() => {
  return z.object({
    size: z.number().optional().nullable(),
    font: datetimeFont1.optional().nullable(),
    color: z.string().optional().nullable(),
    autoFill: z.boolean().optional().nullable(),
    timezone: z.string().optional().nullable(),
    timestamp: z.number().optional().nullable(),
    format: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {AddEnvelopeAnnotationRequestDatetime} addEnvelopeAnnotationRequestDatetime
 * @property {number}
 * @property {DatetimeFont1}
 * @property {string}
 * @property {boolean}
 * @property {string}
 * @property {number}
 * @property {string}
 */
export type AddEnvelopeAnnotationRequestDatetime = z.infer<
  typeof addEnvelopeAnnotationRequestDatetime
>;

/**
 * Zod schema for mapping API responses to the AddEnvelopeAnnotationRequestDatetime application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const addEnvelopeAnnotationRequestDatetimeResponse = z.lazy(() => {
  return z
    .object({
      size: z.number().optional().nullable(),
      font: datetimeFont1Response.optional().nullable(),
      color: z.string().optional().nullable(),
      auto_fill: z.boolean().optional().nullable(),
      timezone: z.string().optional().nullable(),
      timestamp: z.number().optional().nullable(),
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
 * Zod schema for mapping the AddEnvelopeAnnotationRequestDatetime application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const addEnvelopeAnnotationRequestDatetimeRequest = z.lazy(() => {
  return z
    .object({
      size: z.number().optional().nullable(),
      font: datetimeFont1Request.optional().nullable(),
      color: z.string().optional().nullable(),
      autoFill: z.boolean().optional().nullable(),
      timezone: z.string().optional().nullable(),
      timestamp: z.number().optional().nullable(),
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
