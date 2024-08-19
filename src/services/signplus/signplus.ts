import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, RequestConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { CreateEnvelopeRequest, createEnvelopeRequestRequest } from './models/create-envelope-request';
import { Envelope, envelopeResponse } from './models/envelope';
import {
  CreateEnvelopeFromTemplateRequest,
  createEnvelopeFromTemplateRequestRequest,
} from './models/create-envelope-from-template-request';
import { ListEnvelopesRequest, listEnvelopesRequestRequest } from './models/list-envelopes-request';
import { ListEnvelopesResponse, listEnvelopesResponseResponse } from './models/list-envelopes-response';
import { Document, documentResponse } from './models/document';
import {
  ListEnvelopeDocumentsResponse,
  listEnvelopeDocumentsResponseResponse,
} from './models/list-envelope-documents-response';
import { AddEnvelopeDocumentRequest, addEnvelopeDocumentRequestRequest } from './models/add-envelope-document-request';
import {
  SetEnvelopeDynamicFieldsRequest,
  setEnvelopeDynamicFieldsRequestRequest,
} from './models/set-envelope-dynamic-fields-request';
import {
  AddEnvelopeSigningStepsRequest,
  addEnvelopeSigningStepsRequestRequest,
} from './models/add-envelope-signing-steps-request';
import { RenameEnvelopeRequest, renameEnvelopeRequestRequest } from './models/rename-envelope-request';
import { SetEnvelopeCommentRequest, setEnvelopeCommentRequestRequest } from './models/set-envelope-comment-request';
import { EnvelopeNotification, envelopeNotificationRequest } from './models/envelope-notification';
import {
  SetEnvelopeExpirationRequest,
  setEnvelopeExpirationRequestRequest,
} from './models/set-envelope-expiration-request';
import {
  SetEnvelopeLegalityLevelRequest,
  setEnvelopeLegalityLevelRequestRequest,
} from './models/set-envelope-legality-level-request';
import { Annotation, annotationResponse } from './models/annotation';
import {
  ListEnvelopeDocumentAnnotationsResponse,
  listEnvelopeDocumentAnnotationsResponseResponse,
} from './models/list-envelope-document-annotations-response';
import { AddAnnotationRequest, addAnnotationRequestRequest } from './models/add-annotation-request';
import { CreateTemplateRequest, createTemplateRequestRequest } from './models/create-template-request';
import { Template, templateResponse } from './models/template';
import { ListTemplatesRequest, listTemplatesRequestRequest } from './models/list-templates-request';
import { ListTemplatesResponse, listTemplatesResponseResponse } from './models/list-templates-response';
import { AddTemplateDocumentRequest, addTemplateDocumentRequestRequest } from './models/add-template-document-request';
import {
  ListTemplateDocumentsResponse,
  listTemplateDocumentsResponseResponse,
} from './models/list-template-documents-response';
import {
  AddTemplateSigningStepsRequest,
  addTemplateSigningStepsRequestRequest,
} from './models/add-template-signing-steps-request';
import { RenameTemplateRequest, renameTemplateRequestRequest } from './models/rename-template-request';
import { SetTemplateCommentRequest, setTemplateCommentRequestRequest } from './models/set-template-comment-request';
import {
  ListTemplateAnnotationsResponse,
  listTemplateAnnotationsResponseResponse,
} from './models/list-template-annotations-response';
import {
  ListTemplateDocumentAnnotationsResponse,
  listTemplateDocumentAnnotationsResponseResponse,
} from './models/list-template-document-annotations-response';
import { CreateWebhookRequest, createWebhookRequestRequest } from './models/create-webhook-request';
import { Webhook, webhookResponse } from './models/webhook';
import { ListWebhooksRequest, listWebhooksRequestRequest } from './models/list-webhooks-request';
import { ListWebhooksResponse, listWebhooksResponseResponse } from './models/list-webhooks-response';

export class SignplusService extends BaseService {
  /**
   * Create new envelope
   * @returns {Promise<HttpResponse<Envelope>>} Envelope created successfully
   */
  async createEnvelope(body: CreateEnvelopeRequest, requestConfig?: RequestConfig): Promise<HttpResponse<Envelope>> {
    const request = new RequestBuilder<Envelope>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('POST')
      .setPath('/envelope')
      .setRequestSchema(createEnvelopeRequestRequest)
      .setResponseSchema(envelopeResponse)
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.call<Envelope>(request);
  }

  /**
   * Create new envelope from template
   * @param {string} templateId -
   * @returns {Promise<HttpResponse<Envelope>>} Envelope created successfully
   */
  async createEnvelopeFromTemplate(
    templateId: string,
    body: CreateEnvelopeFromTemplateRequest,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Envelope>> {
    const request = new RequestBuilder<Envelope>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('POST')
      .setPath('/envelope/from_template/{template_id}')
      .setRequestSchema(createEnvelopeFromTemplateRequestRequest)
      .setResponseSchema(envelopeResponse)
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'template_id',
        value: templateId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.call<Envelope>(request);
  }

  /**
   * List envelopes
   * @returns {Promise<HttpResponse<ListEnvelopesResponse>>} List of envelopes retrieved successfully
   */
  async listEnvelopes(
    body: ListEnvelopesRequest,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ListEnvelopesResponse>> {
    const request = new RequestBuilder<ListEnvelopesResponse>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('POST')
      .setPath('/envelopes')
      .setRequestSchema(listEnvelopesRequestRequest)
      .setResponseSchema(listEnvelopesResponseResponse)
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.call<ListEnvelopesResponse>(request);
  }

  /**
   * Get envelope
   * @param {string} envelopeId -
   * @returns {Promise<HttpResponse<Envelope>>} Envelope details retrieved successfully
   */
  async getEnvelope(envelopeId: string, requestConfig?: RequestConfig): Promise<HttpResponse<Envelope>> {
    const request = new RequestBuilder<Envelope>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('GET')
      .setPath('/envelope/{envelope_id}')
      .setRequestSchema(z.any())
      .setResponseSchema(envelopeResponse)
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'envelope_id',
        value: envelopeId,
      })
      .build();
    return this.client.call<Envelope>(request);
  }

  /**
   * Delete envelope
   * @param {string} envelopeId -
   * @returns {Promise<HttpResponse<any>>} Envelope deleted successfully
   */
  async deleteEnvelope(envelopeId: string, requestConfig?: RequestConfig): Promise<HttpResponse<undefined>> {
    const request = new RequestBuilder<undefined>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('DELETE')
      .setPath('/envelope/{envelope_id}')
      .setRequestSchema(z.any())
      .setResponseSchema(z.undefined())
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'envelope_id',
        value: envelopeId,
      })
      .build();
    return this.client.call<undefined>(request);
  }

  /**
   * Get envelope document
   * @param {string} envelopeId -
   * @param {string} documentId -
   * @returns {Promise<HttpResponse<Document>>} Document details retrieved successfully
   */
  async getEnvelopeDocument(
    envelopeId: string,
    documentId: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Document>> {
    const request = new RequestBuilder<Document>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('GET')
      .setPath('/envelope/{envelope_id}/document/{document_id}')
      .setRequestSchema(z.any())
      .setResponseSchema(documentResponse)
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'envelope_id',
        value: envelopeId,
      })
      .addPathParam({
        key: 'document_id',
        value: documentId,
      })
      .build();
    return this.client.call<Document>(request);
  }

  /**
   * Get envelope documents
   * @param {string} envelopeId -
   * @returns {Promise<HttpResponse<ListEnvelopeDocumentsResponse>>} Documents of envelope retrieved successfully
   */
  async getEnvelopeDocuments(
    envelopeId: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ListEnvelopeDocumentsResponse>> {
    const request = new RequestBuilder<ListEnvelopeDocumentsResponse>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('GET')
      .setPath('/envelope/{envelope_id}/documents')
      .setRequestSchema(z.any())
      .setResponseSchema(listEnvelopeDocumentsResponseResponse)
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'envelope_id',
        value: envelopeId,
      })
      .build();
    return this.client.call<ListEnvelopeDocumentsResponse>(request);
  }

  /**
   * Add envelope document
   * @param {string} envelopeId -
   * @returns {Promise<HttpResponse<Document>>} Document added to envelope successfully
   */
  async addEnvelopeDocument(
    envelopeId: string,
    body: AddEnvelopeDocumentRequest,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Document>> {
    const request = new RequestBuilder<Document>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('POST')
      .setPath('/envelope/{envelope_id}/document')
      .setRequestSchema(addEnvelopeDocumentRequestRequest)
      .setResponseSchema(documentResponse)
      .setRequestContentType(ContentType.MultipartFormData)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'envelope_id',
        value: envelopeId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'multipart/form-data' })
      .addBody(body)
      .build();
    return this.client.call<Document>(request);
  }

  /**
   * Set envelope dynamic fields
   * @param {string} envelopeId -
   * @returns {Promise<HttpResponse<Envelope>>} Dynamic fields added successfully
   */
  async setEnvelopeDynamicFields(
    envelopeId: string,
    body: SetEnvelopeDynamicFieldsRequest,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Envelope>> {
    const request = new RequestBuilder<Envelope>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('PUT')
      .setPath('/envelope/{envelope_id}/dynamic_fields')
      .setRequestSchema(setEnvelopeDynamicFieldsRequestRequest)
      .setResponseSchema(envelopeResponse)
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'envelope_id',
        value: envelopeId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.call<Envelope>(request);
  }

  /**
   * Add envelope signing steps
   * @param {string} envelopeId -
   * @returns {Promise<HttpResponse<Envelope>>} Signing steps added successfully
   */
  async addEnvelopeSigningSteps(
    envelopeId: string,
    body: AddEnvelopeSigningStepsRequest,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Envelope>> {
    const request = new RequestBuilder<Envelope>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('POST')
      .setPath('/envelope/{envelope_id}/signing_steps')
      .setRequestSchema(addEnvelopeSigningStepsRequestRequest)
      .setResponseSchema(envelopeResponse)
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'envelope_id',
        value: envelopeId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.call<Envelope>(request);
  }

  /**
   * Send envelope for signature
   * @param {string} envelopeId -
   * @returns {Promise<HttpResponse<Envelope>>} Envelope sent successfully
   */
  async sendEnvelope(envelopeId: string, requestConfig?: RequestConfig): Promise<HttpResponse<Envelope>> {
    const request = new RequestBuilder<Envelope>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('POST')
      .setPath('/envelope/{envelope_id}/send')
      .setRequestSchema(z.any())
      .setResponseSchema(envelopeResponse)
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'envelope_id',
        value: envelopeId,
      })
      .build();
    return this.client.call<Envelope>(request);
  }

  /**
   * Duplicate envelope
   * @param {string} envelopeId -
   * @returns {Promise<HttpResponse<Envelope>>} Envelope duplicated successfully
   */
  async duplicateEnvelope(envelopeId: string, requestConfig?: RequestConfig): Promise<HttpResponse<Envelope>> {
    const request = new RequestBuilder<Envelope>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('POST')
      .setPath('/envelope/{envelope_id}/duplicate')
      .setRequestSchema(z.any())
      .setResponseSchema(envelopeResponse)
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'envelope_id',
        value: envelopeId,
      })
      .build();
    return this.client.call<Envelope>(request);
  }

  /**
   * Void envelope
   * @param {string} envelopeId -
   * @returns {Promise<HttpResponse<Envelope>>} Envelope voided successfully
   */
  async voidEnvelope(envelopeId: string, requestConfig?: RequestConfig): Promise<HttpResponse<Envelope>> {
    const request = new RequestBuilder<Envelope>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('PUT')
      .setPath('/envelope/{envelope_id}/void')
      .setRequestSchema(z.any())
      .setResponseSchema(envelopeResponse)
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'envelope_id',
        value: envelopeId,
      })
      .build();
    return this.client.call<Envelope>(request);
  }

  /**
   * Rename envelope
   * @param {string} envelopeId -
   * @returns {Promise<HttpResponse<Envelope>>} Envelope renamed successfully
   */
  async renameEnvelope(
    envelopeId: string,
    body: RenameEnvelopeRequest,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Envelope>> {
    const request = new RequestBuilder<Envelope>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('PUT')
      .setPath('/envelope/{envelope_id}/rename')
      .setRequestSchema(renameEnvelopeRequestRequest)
      .setResponseSchema(envelopeResponse)
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'envelope_id',
        value: envelopeId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.call<Envelope>(request);
  }

  /**
   * Set envelope comment
   * @param {string} envelopeId -
   * @returns {Promise<HttpResponse<Envelope>>} Envelope comment changed successfully
   */
  async setEnvelopeComment(
    envelopeId: string,
    body: SetEnvelopeCommentRequest,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Envelope>> {
    const request = new RequestBuilder<Envelope>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('PUT')
      .setPath('/envelope/{envelope_id}/set_comment')
      .setRequestSchema(setEnvelopeCommentRequestRequest)
      .setResponseSchema(envelopeResponse)
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'envelope_id',
        value: envelopeId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.call<Envelope>(request);
  }

  /**
   * Set envelope notification
   * @param {string} envelopeId -
   * @returns {Promise<HttpResponse<Envelope>>} Envelope notification changed successfully
   */
  async setEnvelopeNotification(
    envelopeId: string,
    body: EnvelopeNotification,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Envelope>> {
    const request = new RequestBuilder<Envelope>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('PUT')
      .setPath('/envelope/{envelope_id}/set_notification')
      .setRequestSchema(envelopeNotificationRequest)
      .setResponseSchema(envelopeResponse)
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'envelope_id',
        value: envelopeId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.call<Envelope>(request);
  }

  /**
   * Set envelope expiration date
   * @param {string} envelopeId -
   * @returns {Promise<HttpResponse<Envelope>>} Envelope expiration date changed successfully
   */
  async setEnvelopeExpirationDate(
    envelopeId: string,
    body: SetEnvelopeExpirationRequest,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Envelope>> {
    const request = new RequestBuilder<Envelope>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('PUT')
      .setPath('/envelope/{envelope_id}/set_expiration_date')
      .setRequestSchema(setEnvelopeExpirationRequestRequest)
      .setResponseSchema(envelopeResponse)
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'envelope_id',
        value: envelopeId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.call<Envelope>(request);
  }

  /**
   * Set envelope legality level
   * @param {string} envelopeId -
   * @returns {Promise<HttpResponse<Envelope>>} Envelope legality level changed successfully
   */
  async setEnvelopeLegalityLevel(
    envelopeId: string,
    body: SetEnvelopeLegalityLevelRequest,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Envelope>> {
    const request = new RequestBuilder<Envelope>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('PUT')
      .setPath('/envelope/{envelope_id}/set_legality_level')
      .setRequestSchema(setEnvelopeLegalityLevelRequestRequest)
      .setResponseSchema(envelopeResponse)
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'envelope_id',
        value: envelopeId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.call<Envelope>(request);
  }

  /**
   * Get envelope annotations
   * @param {string} envelopeId - ID of the envelope
   * @returns {Promise<HttpResponse<Annotation[]>>} List of annotations retrieved successfully
   */
  async getEnvelopeAnnotations(envelopeId: string, requestConfig?: RequestConfig): Promise<HttpResponse<Annotation[]>> {
    const request = new RequestBuilder<Annotation[]>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('GET')
      .setPath('/envelope/{envelope_id}/annotations')
      .setRequestSchema(z.any())
      .setResponseSchema(z.array(annotationResponse))
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'envelope_id',
        value: envelopeId,
      })
      .build();
    return this.client.call<Annotation[]>(request);
  }

  /**
   * Get envelope document annotations
   * @param {string} envelopeId - ID of the envelope
   * @param {string} documentId - ID of document
   * @returns {Promise<HttpResponse<ListEnvelopeDocumentAnnotationsResponse>>} List of document annotations retrieved successfully
   */
  async getEnvelopeDocumentAnnotations(
    envelopeId: string,
    documentId: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ListEnvelopeDocumentAnnotationsResponse>> {
    const request = new RequestBuilder<ListEnvelopeDocumentAnnotationsResponse>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('GET')
      .setPath('/envelope/{envelope_id}/annotations/{document_id}')
      .setRequestSchema(z.any())
      .setResponseSchema(listEnvelopeDocumentAnnotationsResponseResponse)
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'envelope_id',
        value: envelopeId,
      })
      .addPathParam({
        key: 'document_id',
        value: documentId,
      })
      .build();
    return this.client.call<ListEnvelopeDocumentAnnotationsResponse>(request);
  }

  /**
   * Add envelope annotation
   * @param {string} envelopeId - ID of the envelope
   * @returns {Promise<HttpResponse<Annotation>>} Annotation added successfully
   */
  async addEnvelopeAnnotation(
    envelopeId: string,
    body: AddAnnotationRequest,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Annotation>> {
    const request = new RequestBuilder<Annotation>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('POST')
      .setPath('/envelope/{envelope_id}/annotation')
      .setRequestSchema(addAnnotationRequestRequest)
      .setResponseSchema(annotationResponse)
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'envelope_id',
        value: envelopeId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.call<Annotation>(request);
  }

  /**
   * Delete envelope annotation
   * @param {string} envelopeId - ID of the envelope
   * @param {string} annotationId - ID of the annotation to delete
   * @returns {Promise<HttpResponse<any>>} Annotation deleted successfully
   */
  async deleteEnvelopeAnnotation(
    envelopeId: string,
    annotationId: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<undefined>> {
    const request = new RequestBuilder<undefined>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('DELETE')
      .setPath('/envelope/{envelope_id}/annotation/{annotation_id}')
      .setRequestSchema(z.any())
      .setResponseSchema(z.undefined())
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'envelope_id',
        value: envelopeId,
      })
      .addPathParam({
        key: 'annotation_id',
        value: annotationId,
      })
      .build();
    return this.client.call<undefined>(request);
  }

  /**
   * Create new template
   * @returns {Promise<HttpResponse<Template>>} Envelope created successfully
   */
  async createTemplate(body: CreateTemplateRequest, requestConfig?: RequestConfig): Promise<HttpResponse<Template>> {
    const request = new RequestBuilder<Template>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('POST')
      .setPath('/template')
      .setRequestSchema(createTemplateRequestRequest)
      .setResponseSchema(templateResponse)
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.call<Template>(request);
  }

  /**
   * List templates
   * @returns {Promise<HttpResponse<ListTemplatesResponse>>} List of templates retrieved successfully
   */
  async listTemplates(
    body: ListTemplatesRequest,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ListTemplatesResponse>> {
    const request = new RequestBuilder<ListTemplatesResponse>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('POST')
      .setPath('/templates')
      .setRequestSchema(listTemplatesRequestRequest)
      .setResponseSchema(listTemplatesResponseResponse)
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.call<ListTemplatesResponse>(request);
  }

  /**
   * Get template
   * @param {string} templateId -
   * @returns {Promise<HttpResponse<Template>>} Template details retrieved successfully
   */
  async getTemplate(templateId: string, requestConfig?: RequestConfig): Promise<HttpResponse<Template>> {
    const request = new RequestBuilder<Template>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('GET')
      .setPath('/template/{template_id}')
      .setRequestSchema(z.any())
      .setResponseSchema(templateResponse)
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'template_id',
        value: templateId,
      })
      .build();
    return this.client.call<Template>(request);
  }

  /**
   * Delete template
   * @param {string} templateId -
   * @returns {Promise<HttpResponse<any>>} Template deleted successfully
   */
  async deleteTemplate(templateId: string, requestConfig?: RequestConfig): Promise<HttpResponse<undefined>> {
    const request = new RequestBuilder<undefined>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('DELETE')
      .setPath('/template/{template_id}')
      .setRequestSchema(z.any())
      .setResponseSchema(z.undefined())
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'template_id',
        value: templateId,
      })
      .build();
    return this.client.call<undefined>(request);
  }

  /**
   * Duplicate template
   * @param {string} templateId -
   * @returns {Promise<HttpResponse<Template>>} Template duplicated successfully
   */
  async duplicateTemplate(templateId: string, requestConfig?: RequestConfig): Promise<HttpResponse<Template>> {
    const request = new RequestBuilder<Template>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('POST')
      .setPath('/template/{template_id}/duplicate')
      .setRequestSchema(z.any())
      .setResponseSchema(templateResponse)
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'template_id',
        value: templateId,
      })
      .build();
    return this.client.call<Template>(request);
  }

  /**
   * Add template document
   * @param {string} templateId -
   * @returns {Promise<HttpResponse<Document>>} Document added to envelope successfully
   */
  async addTemplateDocument(
    templateId: string,
    body: AddTemplateDocumentRequest,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Document>> {
    const request = new RequestBuilder<Document>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('POST')
      .setPath('/template/{template_id}/document')
      .setRequestSchema(addTemplateDocumentRequestRequest)
      .setResponseSchema(documentResponse)
      .setRequestContentType(ContentType.MultipartFormData)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'template_id',
        value: templateId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'multipart/form-data' })
      .addBody(body)
      .build();
    return this.client.call<Document>(request);
  }

  /**
   * Get template document
   * @param {string} templateId -
   * @param {string} documentId -
   * @returns {Promise<HttpResponse<Document>>} Document details retrieved successfully
   */
  async getTemplateDocument(
    templateId: string,
    documentId: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Document>> {
    const request = new RequestBuilder<Document>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('GET')
      .setPath('/template/{template_id}/document/{document_id}')
      .setRequestSchema(z.any())
      .setResponseSchema(documentResponse)
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'template_id',
        value: templateId,
      })
      .addPathParam({
        key: 'document_id',
        value: documentId,
      })
      .build();
    return this.client.call<Document>(request);
  }

  /**
   * Get template documents
   * @param {string} templateId -
   * @returns {Promise<HttpResponse<ListTemplateDocumentsResponse>>} Documents of template retrieved successfully
   */
  async getTemplateDocuments(
    templateId: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ListTemplateDocumentsResponse>> {
    const request = new RequestBuilder<ListTemplateDocumentsResponse>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('GET')
      .setPath('/template/{template_id}/documents')
      .setRequestSchema(z.any())
      .setResponseSchema(listTemplateDocumentsResponseResponse)
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'template_id',
        value: templateId,
      })
      .build();
    return this.client.call<ListTemplateDocumentsResponse>(request);
  }

  /**
   * Add template signing steps
   * @param {string} templateId -
   * @returns {Promise<HttpResponse<Template>>} Signing steps added successfully
   */
  async addTemplateSigningSteps(
    templateId: string,
    body: AddTemplateSigningStepsRequest,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Template>> {
    const request = new RequestBuilder<Template>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('POST')
      .setPath('/template/{template_id}/signing_steps')
      .setRequestSchema(addTemplateSigningStepsRequestRequest)
      .setResponseSchema(templateResponse)
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'template_id',
        value: templateId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.call<Template>(request);
  }

  /**
   * Rename template
   * @param {string} templateId -
   * @returns {Promise<HttpResponse<Template>>} Template renamed successfully
   */
  async renameTemplate(
    templateId: string,
    body: RenameTemplateRequest,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Template>> {
    const request = new RequestBuilder<Template>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('PUT')
      .setPath('/template/{template_id}/rename')
      .setRequestSchema(renameTemplateRequestRequest)
      .setResponseSchema(templateResponse)
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'template_id',
        value: templateId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.call<Template>(request);
  }

  /**
   * Set template comment
   * @param {string} templateId -
   * @returns {Promise<HttpResponse<Template>>} Template comment changed successfully
   */
  async setTemplateComment(
    templateId: string,
    body: SetTemplateCommentRequest,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Template>> {
    const request = new RequestBuilder<Template>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('PUT')
      .setPath('/template/{template_id}/set_comment')
      .setRequestSchema(setTemplateCommentRequestRequest)
      .setResponseSchema(templateResponse)
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'template_id',
        value: templateId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.call<Template>(request);
  }

  /**
   * Set template notification
   * @param {string} templateId -
   * @returns {Promise<HttpResponse<Template>>} Template notification changed successfully
   */
  async setTemplateNotification(
    templateId: string,
    body: EnvelopeNotification,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Template>> {
    const request = new RequestBuilder<Template>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('PUT')
      .setPath('/template/{template_id}/set_notification')
      .setRequestSchema(envelopeNotificationRequest)
      .setResponseSchema(templateResponse)
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'template_id',
        value: templateId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.call<Template>(request);
  }

  /**
   * Get template annotations
   * @param {string} templateId - ID of the template
   * @returns {Promise<HttpResponse<ListTemplateAnnotationsResponse>>} List of annotations retrieved successfully
   */
  async getTemplateAnnotations(
    templateId: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ListTemplateAnnotationsResponse>> {
    const request = new RequestBuilder<ListTemplateAnnotationsResponse>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('GET')
      .setPath('/template/{template_id}/annotations')
      .setRequestSchema(z.any())
      .setResponseSchema(listTemplateAnnotationsResponseResponse)
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'template_id',
        value: templateId,
      })
      .build();
    return this.client.call<ListTemplateAnnotationsResponse>(request);
  }

  /**
   * Get document template annotations
   * @param {string} templateId - ID of the template
   * @param {string} documentId - ID of document
   * @returns {Promise<HttpResponse<ListTemplateDocumentAnnotationsResponse>>} List of document annotations retrieved successfully
   */
  async getDocumentTemplateAnnotations(
    templateId: string,
    documentId: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ListTemplateDocumentAnnotationsResponse>> {
    const request = new RequestBuilder<ListTemplateDocumentAnnotationsResponse>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('GET')
      .setPath('/template/{template_id}/annotations/{document_id}')
      .setRequestSchema(z.any())
      .setResponseSchema(listTemplateDocumentAnnotationsResponseResponse)
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'template_id',
        value: templateId,
      })
      .addPathParam({
        key: 'document_id',
        value: documentId,
      })
      .build();
    return this.client.call<ListTemplateDocumentAnnotationsResponse>(request);
  }

  /**
   * Add template annotation
   * @param {string} templateId - ID of the template
   * @returns {Promise<HttpResponse<Annotation>>} Annotation added successfully
   */
  async addTemplateAnnotation(
    templateId: string,
    body: AddAnnotationRequest,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Annotation>> {
    const request = new RequestBuilder<Annotation>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('POST')
      .setPath('/template/{template_id}/annotation')
      .setRequestSchema(addAnnotationRequestRequest)
      .setResponseSchema(annotationResponse)
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'template_id',
        value: templateId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.call<Annotation>(request);
  }

  /**
   * Delete template annotation
   * @param {string} templateId - ID of the template
   * @param {string} annotationId - ID of the annotation to delete
   * @returns {Promise<HttpResponse<any>>} Annotation deleted successfully
   */
  async deleteTemplateAnnotation(
    templateId: string,
    annotationId: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<undefined>> {
    const request = new RequestBuilder<undefined>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('DELETE')
      .setPath('/template/{template_id}/annotation/{annotation_id}')
      .setRequestSchema(z.any())
      .setResponseSchema(z.undefined())
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'template_id',
        value: templateId,
      })
      .addPathParam({
        key: 'annotation_id',
        value: annotationId,
      })
      .build();
    return this.client.call<undefined>(request);
  }

  /**
   * Create webhook
   * @returns {Promise<HttpResponse<Webhook>>} Webhook event received successfully
   */
  async createWebhook(body: CreateWebhookRequest, requestConfig?: RequestConfig): Promise<HttpResponse<Webhook>> {
    const request = new RequestBuilder<Webhook>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('POST')
      .setPath('/webhook')
      .setRequestSchema(createWebhookRequestRequest)
      .setResponseSchema(webhookResponse)
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.call<Webhook>(request);
  }

  /**
   * List webhooks
   * @returns {Promise<HttpResponse<ListWebhooksResponse>>} List of webhooks retrieved successfully
   */
  async listWebhooks(
    body: ListWebhooksRequest,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ListWebhooksResponse>> {
    const request = new RequestBuilder<ListWebhooksResponse>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('POST')
      .setPath('/webhooks')
      .setRequestSchema(listWebhooksRequestRequest)
      .setResponseSchema(listWebhooksResponseResponse)
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.call<ListWebhooksResponse>(request);
  }

  /**
   * Delete webhook
   * @param {string} webhookId -
   * @returns {Promise<HttpResponse<any>>} Webhook deleted successfully
   */
  async deleteWebhook(webhookId: string, requestConfig?: RequestConfig): Promise<HttpResponse<undefined>> {
    const request = new RequestBuilder<undefined>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('DELETE')
      .setPath('/webhook/{webhook_id}')
      .setRequestSchema(z.any())
      .setResponseSchema(z.undefined())
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'webhook_id',
        value: webhookId,
      })
      .build();
    return this.client.call<undefined>(request);
  }
}
