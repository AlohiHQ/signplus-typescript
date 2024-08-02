import { z } from 'zod';
import { annotationFont, annotationFontRequest, annotationFontResponse } from './annotation-font';

/**
 * The shape of the model inside the application code - what the users use
 */
export const annotationDateTime = z.lazy(() => {
  return z.object({
    size: z.number().optional(),
    font: annotationFont.optional(),
    color: z.string().optional(),
    autoFill: z.boolean().optional(),
    timezone: z.string().optional(),
    timestamp: z.number().optional(),
    format: z.string().optional(),
  });
});

/**
 * Date annotation (null if annotation is not a date)
 * @typedef  {AnnotationDateTime} annotationDateTime - Date annotation (null if annotation is not a date) - Date annotation (null if annotation is not a date)
 * @property {number} - Font size of the text in pt
 * @property {AnnotationFont}
 * @property {string} - Color of the text in hex format
 * @property {boolean} - Whether the date should be automatically filled
 * @property {string} - Timezone of the date
 * @property {number} - Unix timestamp of the date
 * @property {AnnotationDateTimeFormat} - Format of the date time (DMY_NUMERIC_SLASH is day/month/year with slashes, MDY_NUMERIC_SLASH is month/day/year with slashes, YMD_NUMERIC_SLASH is year/month/day with slashes, DMY_NUMERIC_DASH_SHORT is day/month/year with dashes, DMY_NUMERIC_DASH is day/month/year with dashes, YMD_NUMERIC_DASH is year/month/day with dashes, MDY_TEXT_DASH_SHORT is month/day/year with dashes, MDY_TEXT_SPACE_SHORT is month/day/year with spaces, MDY_TEXT_SPACE is month/day/year with spaces)
 */
export type AnnotationDateTime = z.infer<typeof annotationDateTime>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const annotationDateTimeResponse = z.lazy(() => {
  return z
    .object({
      size: z.number().optional(),
      font: annotationFontResponse.optional(),
      color: z.string().optional(),
      auto_fill: z.boolean().optional(),
      timezone: z.string().optional(),
      timestamp: z.number().optional(),
      format: z.string().optional(),
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
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const annotationDateTimeRequest = z.lazy(() => {
  return z
    .object({
      size: z.number().nullish(),
      font: annotationFontRequest.nullish(),
      color: z.string().nullish(),
      autoFill: z.boolean().nullish(),
      timezone: z.string().nullish(),
      timestamp: z.number().nullish(),
      format: z.string().nullish(),
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
