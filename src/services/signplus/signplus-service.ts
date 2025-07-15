import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, RequestConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { CreateEnvelopeRequest, createEnvelopeRequestRequest } from './models/create-envelope-request';
import { Envelope, envelopeResponse } from './models/envelope';
import {
  CreateEnvelopeFromTemplateRequest,
  createEnvelopeFromTemplateRequestRequest,
} from './models/create-envelope-from-template-request';
import { ListEnvelopesRequest, listEnvelopesRequestRequest } from './models/list-envelopes-request';
import { ListEnvelopesResponse, listEnvelopesResponseResponse } from './models/list-envelopes-response';
import { DownloadEnvelopeSignedDocumentsParams } from './request-params';
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
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<Envelope>>} Envelope created successfully
   */
  async createEnvelope(body: CreateEnvelopeRequest, requestConfig?: RequestConfig): Promise<HttpResponse<Envelope>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('POST')
      .setPath('/envelope')
      .setRequestSchema(createEnvelopeRequestRequest)
      .addAccessTokenAuth(this.config.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: envelopeResponse,
        contentType: ContentType.Json,
        status: 200,
      })
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
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<Envelope>>} Envelope created successfully
   */
  async createEnvelopeFromTemplate(
    templateId: string,
    body: CreateEnvelopeFromTemplateRequest,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Envelope>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('POST')
      .setPath('/envelope/from_template/{template_id}')
      .setRequestSchema(createEnvelopeFromTemplateRequestRequest)
      .addAccessTokenAuth(this.config.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: envelopeResponse,
        contentType: ContentType.Json,
        status: 200,
      })
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
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<ListEnvelopesResponse>>} List of envelopes retrieved successfully
   */
  async listEnvelopes(
    body: ListEnvelopesRequest,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ListEnvelopesResponse>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('POST')
      .setPath('/envelopes')
      .setRequestSchema(listEnvelopesRequestRequest)
      .addAccessTokenAuth(this.config.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: listEnvelopesResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
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
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<Envelope>>} Envelope details retrieved successfully
   */
  async getEnvelope(envelopeId: string, requestConfig?: RequestConfig): Promise<HttpResponse<Envelope>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('GET')
      .setPath('/envelope/{envelope_id}')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(this.config.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: envelopeResponse,
        contentType: ContentType.Json,
        status: 200,
      })
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
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} Envelope deleted successfully
   */
  async deleteEnvelope(envelopeId: string, requestConfig?: RequestConfig): Promise<HttpResponse<void>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('DELETE')
      .setPath('/envelope/{envelope_id}')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(this.config.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.undefined(),
        contentType: ContentType.NoContent,
        status: 200,
      })
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'envelope_id',
        value: envelopeId,
      })
      .build();
    return this.client.call<void>(request);
  }

  /**
   * Download signed documents for an envelope
   * @param {string} envelopeId - ID of the envelope
   * @param {boolean} [params.certificateOfCompletion] - Whether to include the certificate of completion in the downloaded file
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<ArrayBuffer>>} Combined signed documents downloaded successfully
   */
  async downloadEnvelopeSignedDocuments(
    envelopeId: string,
    params?: DownloadEnvelopeSignedDocumentsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ArrayBuffer>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('GET')
      .setPath('/envelope/{envelope_id}/signed_documents')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(this.config.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.instanceof(ArrayBuffer),
        contentType: ContentType.Json,
        status: 200,
      })
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'envelope_id',
        value: envelopeId,
      })
      .addQueryParam({
        key: 'certificate_of_completion',
        value: params?.certificateOfCompletion,
      })
      .build();
    return this.client.call<ArrayBuffer>(request);
  }

  /**
   * Download certificate of completion for an envelope
   * @param {string} envelopeId - ID of the envelope
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<ArrayBuffer>>} Certificate of completion downloaded successfully
   */
  async downloadEnvelopeCertificate(
    envelopeId: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ArrayBuffer>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('GET')
      .setPath('/envelope/{envelope_id}/certificate')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(this.config.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.instanceof(ArrayBuffer),
        contentType: ContentType.Json,
        status: 200,
      })
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'envelope_id',
        value: envelopeId,
      })
      .build();
    return this.client.call<ArrayBuffer>(request);
  }

  /**
   * Get envelope document
   * @param {string} envelopeId -
   * @param {string} documentId -
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<Document>>} Document details retrieved successfully
   */
  async getEnvelopeDocument(
    envelopeId: string,
    documentId: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Document>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('GET')
      .setPath('/envelope/{envelope_id}/document/{document_id}')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(this.config.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: documentResponse,
        contentType: ContentType.Json,
        status: 200,
      })
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
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<ListEnvelopeDocumentsResponse>>} Documents of envelope retrieved successfully
   */
  async getEnvelopeDocuments(
    envelopeId: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ListEnvelopeDocumentsResponse>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('GET')
      .setPath('/envelope/{envelope_id}/documents')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(this.config.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: listEnvelopeDocumentsResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
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
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<Document>>} Document added to envelope successfully
   */
  async addEnvelopeDocument(
    envelopeId: string,
    body: AddEnvelopeDocumentRequest,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Document>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('POST')
      .setPath('/envelope/{envelope_id}/document')
      .setRequestSchema(addEnvelopeDocumentRequestRequest)
      .addAccessTokenAuth(this.config.token, 'Bearer')
      .setRequestContentType(ContentType.MultipartFormData)
      .addResponse({
        schema: documentResponse,
        contentType: ContentType.Json,
        status: 200,
      })
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
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<Envelope>>} Dynamic fields added successfully
   */
  async setEnvelopeDynamicFields(
    envelopeId: string,
    body: SetEnvelopeDynamicFieldsRequest,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Envelope>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('PUT')
      .setPath('/envelope/{envelope_id}/dynamic_fields')
      .setRequestSchema(setEnvelopeDynamicFieldsRequestRequest)
      .addAccessTokenAuth(this.config.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: envelopeResponse,
        contentType: ContentType.Json,
        status: 200,
      })
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
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<Envelope>>} Signing steps added successfully
   */
  async addEnvelopeSigningSteps(
    envelopeId: string,
    body: AddEnvelopeSigningStepsRequest,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Envelope>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('POST')
      .setPath('/envelope/{envelope_id}/signing_steps')
      .setRequestSchema(addEnvelopeSigningStepsRequestRequest)
      .addAccessTokenAuth(this.config.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: envelopeResponse,
        contentType: ContentType.Json,
        status: 200,
      })
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
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<Envelope>>} Envelope sent successfully
   */
  async sendEnvelope(envelopeId: string, requestConfig?: RequestConfig): Promise<HttpResponse<Envelope>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('POST')
      .setPath('/envelope/{envelope_id}/send')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(this.config.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: envelopeResponse,
        contentType: ContentType.Json,
        status: 200,
      })
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
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<Envelope>>} Envelope duplicated successfully
   */
  async duplicateEnvelope(envelopeId: string, requestConfig?: RequestConfig): Promise<HttpResponse<Envelope>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('POST')
      .setPath('/envelope/{envelope_id}/duplicate')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(this.config.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: envelopeResponse,
        contentType: ContentType.Json,
        status: 200,
      })
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
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<Envelope>>} Envelope voided successfully
   */
  async voidEnvelope(envelopeId: string, requestConfig?: RequestConfig): Promise<HttpResponse<Envelope>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('PUT')
      .setPath('/envelope/{envelope_id}/void')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(this.config.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: envelopeResponse,
        contentType: ContentType.Json,
        status: 200,
      })
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
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<Envelope>>} Envelope renamed successfully
   */
  async renameEnvelope(
    envelopeId: string,
    body: RenameEnvelopeRequest,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Envelope>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('PUT')
      .setPath('/envelope/{envelope_id}/rename')
      .setRequestSchema(renameEnvelopeRequestRequest)
      .addAccessTokenAuth(this.config.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: envelopeResponse,
        contentType: ContentType.Json,
        status: 200,
      })
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
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<Envelope>>} Envelope comment changed successfully
   */
  async setEnvelopeComment(
    envelopeId: string,
    body: SetEnvelopeCommentRequest,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Envelope>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('PUT')
      .setPath('/envelope/{envelope_id}/set_comment')
      .setRequestSchema(setEnvelopeCommentRequestRequest)
      .addAccessTokenAuth(this.config.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: envelopeResponse,
        contentType: ContentType.Json,
        status: 200,
      })
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
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<Envelope>>} Envelope notification changed successfully
   */
  async setEnvelopeNotification(
    envelopeId: string,
    body: EnvelopeNotification,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Envelope>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('PUT')
      .setPath('/envelope/{envelope_id}/set_notification')
      .setRequestSchema(envelopeNotificationRequest)
      .addAccessTokenAuth(this.config.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: envelopeResponse,
        contentType: ContentType.Json,
        status: 200,
      })
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
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<Envelope>>} Envelope expiration date changed successfully
   */
  async setEnvelopeExpirationDate(
    envelopeId: string,
    body: SetEnvelopeExpirationRequest,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Envelope>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('PUT')
      .setPath('/envelope/{envelope_id}/set_expiration_date')
      .setRequestSchema(setEnvelopeExpirationRequestRequest)
      .addAccessTokenAuth(this.config.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: envelopeResponse,
        contentType: ContentType.Json,
        status: 200,
      })
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
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<Envelope>>} Envelope legality level changed successfully
   */
  async setEnvelopeLegalityLevel(
    envelopeId: string,
    body: SetEnvelopeLegalityLevelRequest,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Envelope>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('PUT')
      .setPath('/envelope/{envelope_id}/set_legality_level')
      .setRequestSchema(setEnvelopeLegalityLevelRequestRequest)
      .addAccessTokenAuth(this.config.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: envelopeResponse,
        contentType: ContentType.Json,
        status: 200,
      })
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
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<Annotation[]>>} List of annotations retrieved successfully
   */
  async getEnvelopeAnnotations(envelopeId: string, requestConfig?: RequestConfig): Promise<HttpResponse<Annotation[]>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('GET')
      .setPath('/envelope/{envelope_id}/annotations')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(this.config.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.array(annotationResponse),
        contentType: ContentType.Json,
        status: 200,
      })
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
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<ListEnvelopeDocumentAnnotationsResponse>>} List of document annotations retrieved successfully
   */
  async getEnvelopeDocumentAnnotations(
    envelopeId: string,
    documentId: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ListEnvelopeDocumentAnnotationsResponse>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('GET')
      .setPath('/envelope/{envelope_id}/annotations/{document_id}')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(this.config.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: listEnvelopeDocumentAnnotationsResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
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
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<Annotation>>} Annotation added successfully
   */
  async addEnvelopeAnnotation(
    envelopeId: string,
    body: AddAnnotationRequest,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Annotation>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('POST')
      .setPath('/envelope/{envelope_id}/annotation')
      .setRequestSchema(addAnnotationRequestRequest)
      .addAccessTokenAuth(this.config.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: annotationResponse,
        contentType: ContentType.Json,
        status: 200,
      })
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
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} Annotation deleted successfully
   */
  async deleteEnvelopeAnnotation(
    envelopeId: string,
    annotationId: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<void>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('DELETE')
      .setPath('/envelope/{envelope_id}/annotation/{annotation_id}')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(this.config.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.undefined(),
        contentType: ContentType.NoContent,
        status: 200,
      })
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
    return this.client.call<void>(request);
  }

  /**
   * Create new template
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<Template>>} Envelope created successfully
   */
  async createTemplate(body: CreateTemplateRequest, requestConfig?: RequestConfig): Promise<HttpResponse<Template>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('POST')
      .setPath('/template')
      .setRequestSchema(createTemplateRequestRequest)
      .addAccessTokenAuth(this.config.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: templateResponse,
        contentType: ContentType.Json,
        status: 200,
      })
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
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<ListTemplatesResponse>>} List of templates retrieved successfully
   */
  async listTemplates(
    body: ListTemplatesRequest,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ListTemplatesResponse>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('POST')
      .setPath('/templates')
      .setRequestSchema(listTemplatesRequestRequest)
      .addAccessTokenAuth(this.config.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: listTemplatesResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
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
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<Template>>} Template details retrieved successfully
   */
  async getTemplate(templateId: string, requestConfig?: RequestConfig): Promise<HttpResponse<Template>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('GET')
      .setPath('/template/{template_id}')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(this.config.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: templateResponse,
        contentType: ContentType.Json,
        status: 200,
      })
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
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} Template deleted successfully
   */
  async deleteTemplate(templateId: string, requestConfig?: RequestConfig): Promise<HttpResponse<void>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('DELETE')
      .setPath('/template/{template_id}')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(this.config.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.undefined(),
        contentType: ContentType.NoContent,
        status: 200,
      })
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'template_id',
        value: templateId,
      })
      .build();
    return this.client.call<void>(request);
  }

  /**
   * Duplicate template
   * @param {string} templateId -
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<Template>>} Template duplicated successfully
   */
  async duplicateTemplate(templateId: string, requestConfig?: RequestConfig): Promise<HttpResponse<Template>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('POST')
      .setPath('/template/{template_id}/duplicate')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(this.config.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: templateResponse,
        contentType: ContentType.Json,
        status: 200,
      })
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
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<Document>>} Document added to envelope successfully
   */
  async addTemplateDocument(
    templateId: string,
    body: AddTemplateDocumentRequest,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Document>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('POST')
      .setPath('/template/{template_id}/document')
      .setRequestSchema(addTemplateDocumentRequestRequest)
      .addAccessTokenAuth(this.config.token, 'Bearer')
      .setRequestContentType(ContentType.MultipartFormData)
      .addResponse({
        schema: documentResponse,
        contentType: ContentType.Json,
        status: 200,
      })
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
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<Document>>} Document details retrieved successfully
   */
  async getTemplateDocument(
    templateId: string,
    documentId: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Document>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('GET')
      .setPath('/template/{template_id}/document/{document_id}')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(this.config.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: documentResponse,
        contentType: ContentType.Json,
        status: 200,
      })
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
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<ListTemplateDocumentsResponse>>} Documents of template retrieved successfully
   */
  async getTemplateDocuments(
    templateId: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ListTemplateDocumentsResponse>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('GET')
      .setPath('/template/{template_id}/documents')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(this.config.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: listTemplateDocumentsResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
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
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<Template>>} Signing steps added successfully
   */
  async addTemplateSigningSteps(
    templateId: string,
    body: AddTemplateSigningStepsRequest,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Template>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('POST')
      .setPath('/template/{template_id}/signing_steps')
      .setRequestSchema(addTemplateSigningStepsRequestRequest)
      .addAccessTokenAuth(this.config.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: templateResponse,
        contentType: ContentType.Json,
        status: 200,
      })
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
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<Template>>} Template renamed successfully
   */
  async renameTemplate(
    templateId: string,
    body: RenameTemplateRequest,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Template>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('PUT')
      .setPath('/template/{template_id}/rename')
      .setRequestSchema(renameTemplateRequestRequest)
      .addAccessTokenAuth(this.config.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: templateResponse,
        contentType: ContentType.Json,
        status: 200,
      })
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
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<Template>>} Template comment changed successfully
   */
  async setTemplateComment(
    templateId: string,
    body: SetTemplateCommentRequest,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Template>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('PUT')
      .setPath('/template/{template_id}/set_comment')
      .setRequestSchema(setTemplateCommentRequestRequest)
      .addAccessTokenAuth(this.config.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: templateResponse,
        contentType: ContentType.Json,
        status: 200,
      })
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
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<Template>>} Template notification changed successfully
   */
  async setTemplateNotification(
    templateId: string,
    body: EnvelopeNotification,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Template>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('PUT')
      .setPath('/template/{template_id}/set_notification')
      .setRequestSchema(envelopeNotificationRequest)
      .addAccessTokenAuth(this.config.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: templateResponse,
        contentType: ContentType.Json,
        status: 200,
      })
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
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<ListTemplateAnnotationsResponse>>} List of annotations retrieved successfully
   */
  async getTemplateAnnotations(
    templateId: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ListTemplateAnnotationsResponse>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('GET')
      .setPath('/template/{template_id}/annotations')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(this.config.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: listTemplateAnnotationsResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
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
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<ListTemplateDocumentAnnotationsResponse>>} List of document annotations retrieved successfully
   */
  async getDocumentTemplateAnnotations(
    templateId: string,
    documentId: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ListTemplateDocumentAnnotationsResponse>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('GET')
      .setPath('/template/{template_id}/annotations/{document_id}')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(this.config.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: listTemplateDocumentAnnotationsResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
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
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<Annotation>>} Annotation added successfully
   */
  async addTemplateAnnotation(
    templateId: string,
    body: AddAnnotationRequest,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Annotation>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('POST')
      .setPath('/template/{template_id}/annotation')
      .setRequestSchema(addAnnotationRequestRequest)
      .addAccessTokenAuth(this.config.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: annotationResponse,
        contentType: ContentType.Json,
        status: 200,
      })
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
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} Annotation deleted successfully
   */
  async deleteTemplateAnnotation(
    templateId: string,
    annotationId: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<void>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('DELETE')
      .setPath('/template/{template_id}/annotation/{annotation_id}')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(this.config.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.undefined(),
        contentType: ContentType.NoContent,
        status: 200,
      })
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
    return this.client.call<void>(request);
  }

  /**
   * Create webhook
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<Webhook>>} Webhook event received successfully
   */
  async createWebhook(body: CreateWebhookRequest, requestConfig?: RequestConfig): Promise<HttpResponse<Webhook>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('POST')
      .setPath('/webhook')
      .setRequestSchema(createWebhookRequestRequest)
      .addAccessTokenAuth(this.config.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: webhookResponse,
        contentType: ContentType.Json,
        status: 200,
      })
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
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<ListWebhooksResponse>>} List of webhooks retrieved successfully
   */
  async listWebhooks(
    body: ListWebhooksRequest,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ListWebhooksResponse>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('POST')
      .setPath('/webhooks')
      .setRequestSchema(listWebhooksRequestRequest)
      .addAccessTokenAuth(this.config.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: listWebhooksResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
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
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} Webhook deleted successfully
   */
  async deleteWebhook(webhookId: string, requestConfig?: RequestConfig): Promise<HttpResponse<void>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('DELETE')
      .setPath('/webhook/{webhook_id}')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(this.config.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.undefined(),
        contentType: ContentType.NoContent,
        status: 200,
      })
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'webhook_id',
        value: webhookId,
      })
      .build();
    return this.client.call<void>(request);
  }
}
