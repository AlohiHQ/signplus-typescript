import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const listEnvelopesRequest = z.lazy(() => {
  return z.object({
    name: z.string().optional(),
    tags: z.array(z.string()).optional(),
    comment: z.string().optional(),
    ids: z.array(z.string()).optional(),
    statuses: z.array(z.string()).optional(),
    folderIds: z.array(z.string()).optional(),
    onlyRootFolder: z.boolean().optional(),
    dateFrom: z.number().optional(),
    dateTo: z.number().optional(),
    uid: z.string().optional(),
    first: z.number().optional(),
    last: z.number().optional(),
    after: z.string().optional(),
    before: z.string().optional(),
    orderField: z.string().optional(),
    ascending: z.boolean().optional(),
    includeTrash: z.boolean().optional(),
  });
});

/**
 *
 * @typedef  {ListEnvelopesRequest} listEnvelopesRequest
 * @property {string} - Name of the envelope
 * @property {string[]} - List of tags
 * @property {string} - Comment of the envelope
 * @property {string[]} - List of envelope IDs
 * @property {EnvelopeStatus[]} - List of envelope statuses
 * @property {string[]} - List of folder IDs
 * @property {boolean} - Whether to only list envelopes in the root folder
 * @property {number} - Unix timestamp of the start date
 * @property {number} - Unix timestamp of the end date
 * @property {string} - Unique identifier of the user
 * @property {number}
 * @property {number}
 * @property {string}
 * @property {string}
 * @property {EnvelopeOrderField} - Field to order envelopes by
 * @property {boolean} - Whether to order envelopes in ascending order
 * @property {boolean} - Whether to include envelopes in the trash
 */
export type ListEnvelopesRequest = z.infer<typeof listEnvelopesRequest>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const listEnvelopesRequestResponse = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      tags: z.array(z.string()).optional(),
      comment: z.string().optional(),
      ids: z.array(z.string()).optional(),
      statuses: z.array(z.string()).optional(),
      folder_ids: z.array(z.string()).optional(),
      only_root_folder: z.boolean().optional(),
      date_from: z.number().optional(),
      date_to: z.number().optional(),
      uid: z.string().optional(),
      first: z.number().optional(),
      last: z.number().optional(),
      after: z.string().optional(),
      before: z.string().optional(),
      order_field: z.string().optional(),
      ascending: z.boolean().optional(),
      include_trash: z.boolean().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      tags: data['tags'],
      comment: data['comment'],
      ids: data['ids'],
      statuses: data['statuses'],
      folderIds: data['folder_ids'],
      onlyRootFolder: data['only_root_folder'],
      dateFrom: data['date_from'],
      dateTo: data['date_to'],
      uid: data['uid'],
      first: data['first'],
      last: data['last'],
      after: data['after'],
      before: data['before'],
      orderField: data['order_field'],
      ascending: data['ascending'],
      includeTrash: data['include_trash'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const listEnvelopesRequestRequest = z.lazy(() => {
  return z
    .object({
      name: z.string().nullish(),
      tags: z.array(z.string()).nullish(),
      comment: z.string().nullish(),
      ids: z.array(z.string()).nullish(),
      statuses: z.array(z.string()).nullish(),
      folderIds: z.array(z.string()).nullish(),
      onlyRootFolder: z.boolean().nullish(),
      dateFrom: z.number().nullish(),
      dateTo: z.number().nullish(),
      uid: z.string().nullish(),
      first: z.number().nullish(),
      last: z.number().nullish(),
      after: z.string().nullish(),
      before: z.string().nullish(),
      orderField: z.string().nullish(),
      ascending: z.boolean().nullish(),
      includeTrash: z.boolean().nullish(),
    })
    .transform((data) => ({
      name: data['name'],
      tags: data['tags'],
      comment: data['comment'],
      ids: data['ids'],
      statuses: data['statuses'],
      folder_ids: data['folderIds'],
      only_root_folder: data['onlyRootFolder'],
      date_from: data['dateFrom'],
      date_to: data['dateTo'],
      uid: data['uid'],
      first: data['first'],
      last: data['last'],
      after: data['after'],
      before: data['before'],
      order_field: data['orderField'],
      ascending: data['ascending'],
      include_trash: data['includeTrash'],
    }));
});
