import { z } from 'zod';

/**
 * Zod schema for the ListEnvelopesRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const listEnvelopesRequest = z.lazy(() => {
  return z.object({
    name: z.string().optional().nullable(),
    tags: z.array(z.string()).optional().nullable(),
    comment: z.string().optional().nullable(),
    ids: z.array(z.string()).optional().nullable(),
    statuses: z.array(z.string()).optional().nullable(),
    folderIds: z.array(z.string()).optional().nullable(),
    onlyRootFolder: z.string().optional().nullable(),
    dateFrom: z.string().optional().nullable(),
    dateTo: z.string().optional().nullable(),
    uid: z.string().optional().nullable(),
    first: z.string().optional().nullable(),
    last: z.string().optional().nullable(),
    after: z.string().optional().nullable(),
    before: z.string().optional().nullable(),
    orderField: z.string().optional().nullable(),
    ascending: z.string().optional().nullable(),
    includeTrash: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {ListEnvelopesRequest} listEnvelopesRequest
 * @property {string}
 * @property {string[]}
 * @property {string}
 * @property {string[]}
 * @property {string[]}
 * @property {string[]}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 */
export type ListEnvelopesRequest = z.infer<typeof listEnvelopesRequest>;

/**
 * Zod schema for mapping API responses to the ListEnvelopesRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const listEnvelopesRequestResponse = z.lazy(() => {
  return z
    .object({
      name: z.string().optional().nullable(),
      tags: z.array(z.string()).optional().nullable(),
      comment: z.string().optional().nullable(),
      ids: z.array(z.string()).optional().nullable(),
      statuses: z.array(z.string()).optional().nullable(),
      folder_ids: z.array(z.string()).optional().nullable(),
      only_root_folder: z.string().optional().nullable(),
      date_from: z.string().optional().nullable(),
      date_to: z.string().optional().nullable(),
      uid: z.string().optional().nullable(),
      first: z.string().optional().nullable(),
      last: z.string().optional().nullable(),
      after: z.string().optional().nullable(),
      before: z.string().optional().nullable(),
      order_field: z.string().optional().nullable(),
      ascending: z.string().optional().nullable(),
      include_trash: z.string().optional().nullable(),
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
 * Zod schema for mapping the ListEnvelopesRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const listEnvelopesRequestRequest = z.lazy(() => {
  return z
    .object({
      name: z.string().optional().nullable(),
      tags: z.array(z.string()).optional().nullable(),
      comment: z.string().optional().nullable(),
      ids: z.array(z.string()).optional().nullable(),
      statuses: z.array(z.string()).optional().nullable(),
      folderIds: z.array(z.string()).optional().nullable(),
      onlyRootFolder: z.string().optional().nullable(),
      dateFrom: z.string().optional().nullable(),
      dateTo: z.string().optional().nullable(),
      uid: z.string().optional().nullable(),
      first: z.string().optional().nullable(),
      last: z.string().optional().nullable(),
      after: z.string().optional().nullable(),
      before: z.string().optional().nullable(),
      orderField: z.string().optional().nullable(),
      ascending: z.string().optional().nullable(),
      includeTrash: z.string().optional().nullable(),
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
