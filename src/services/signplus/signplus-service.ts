import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import {
  CreateEnvelopeRequest,
  createEnvelopeRequestRequest,
} from './models/create-envelope-request';
import { Envelope, envelopeResponse } from './models/envelope';
import {
  CreateEnvelopeFromTemplateRequest,
  createEnvelopeFromTemplateRequestRequest,
} from './models/create-envelope-from-template-request';
import { ListEnvelopesRequest, listEnvelopesRequestRequest } from './models/list-envelopes-request';
import {
  ListEnvelopesResponse,
  listEnvelopesResponseResponse,
} from './models/list-envelopes-response';
import { DownloadEnvelopeSignedDocumentsParams } from './request-params';
import { Document, documentResponse } from './models/document';
import {
  ListEnvelopeDocumentsResponse,
  listEnvelopeDocumentsResponseResponse,
} from './models/list-envelope-documents-response';
import {
  AddEnvelopeDocumentRequest,
  addEnvelopeDocumentRequestRequest,
} from './models/add-envelope-document-request';
import {
  SetEnvelopeDynamicFieldsRequest,
  setEnvelopeDynamicFieldsRequestRequest,
} from './models/set-envelope-dynamic-fields-request';
import {
  AddEnvelopeSigningStepsRequest,
  addEnvelopeSigningStepsRequestRequest,
} from './models/add-envelope-signing-steps-request';
import {
  SetEnvelopeAttachmentsSettingsRequest,
  setEnvelopeAttachmentsSettingsRequestRequest,
} from './models/set-envelope-attachments-settings-request';
import { EnvelopeAttachments, envelopeAttachmentsResponse } from './models/envelope-attachments';
import {
  SetEnvelopeAttachmentsPlaceholdersRequest,
  setEnvelopeAttachmentsPlaceholdersRequestRequest,
} from './models/set-envelope-attachments-placeholders-request';
import {
  RenameEnvelopeRequest,
  renameEnvelopeRequestRequest,
} from './models/rename-envelope-request';
import {
  SetEnvelopeCommentRequest,
  setEnvelopeCommentRequestRequest,
} from './models/set-envelope-comment-request';
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
import {
  CreateTemplateRequest,
  createTemplateRequestRequest,
} from './models/create-template-request';
import { Template, templateResponse } from './models/template';
import { ListTemplatesRequest, listTemplatesRequestRequest } from './models/list-templates-request';
import {
  ListTemplatesResponse,
  listTemplatesResponseResponse,
} from './models/list-templates-response';
import {
  AddTemplateDocumentRequest,
  addTemplateDocumentRequestRequest,
} from './models/add-template-document-request';
import {
  ListTemplateDocumentsResponse,
  listTemplateDocumentsResponseResponse,
} from './models/list-template-documents-response';
import {
  AddTemplateSigningStepsRequest,
  addTemplateSigningStepsRequestRequest,
} from './models/add-template-signing-steps-request';
import {
  RenameTemplateRequest,
  renameTemplateRequestRequest,
} from './models/rename-template-request';
import {
  SetTemplateCommentRequest,
  setTemplateCommentRequestRequest,
} from './models/set-template-comment-request';
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
import {
  ListWebhooksResponse,
  listWebhooksResponseResponse,
} from './models/list-webhooks-response';

/**
 * Service class for SignplusService operations.
 * Provides methods to interact with SignplusService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class SignplusService extends BaseService {
  protected createEnvelopeConfig?: Partial<SdkConfig>;

  protected createEnvelopeFromTemplateConfig?: Partial<SdkConfig>;

  protected listEnvelopesConfig?: Partial<SdkConfig>;

  protected getEnvelopeConfig?: Partial<SdkConfig>;

  protected deleteEnvelopeConfig?: Partial<SdkConfig>;

  protected downloadEnvelopeSignedDocumentsConfig?: Partial<SdkConfig>;

  protected downloadEnvelopeCertificateConfig?: Partial<SdkConfig>;

  protected getEnvelopeDocumentConfig?: Partial<SdkConfig>;

  protected getEnvelopeDocumentsConfig?: Partial<SdkConfig>;

  protected addEnvelopeDocumentConfig?: Partial<SdkConfig>;

  protected setEnvelopeDynamicFieldsConfig?: Partial<SdkConfig>;

  protected addEnvelopeSigningStepsConfig?: Partial<SdkConfig>;

  protected setEnvelopeAttachmentsSettingsConfig?: Partial<SdkConfig>;

  protected setEnvelopeAttachmentsPlaceholdersConfig?: Partial<SdkConfig>;

  protected getAttachmentFileConfig?: Partial<SdkConfig>;

  protected sendEnvelopeConfig?: Partial<SdkConfig>;

  protected duplicateEnvelopeConfig?: Partial<SdkConfig>;

  protected voidEnvelopeConfig?: Partial<SdkConfig>;

  protected renameEnvelopeConfig?: Partial<SdkConfig>;

  protected setEnvelopeCommentConfig?: Partial<SdkConfig>;

  protected setEnvelopeNotificationConfig?: Partial<SdkConfig>;

  protected setEnvelopeExpirationDateConfig?: Partial<SdkConfig>;

  protected setEnvelopeLegalityLevelConfig?: Partial<SdkConfig>;

  protected getEnvelopeAnnotationsConfig?: Partial<SdkConfig>;

  protected getEnvelopeDocumentAnnotationsConfig?: Partial<SdkConfig>;

  protected addEnvelopeAnnotationConfig?: Partial<SdkConfig>;

  protected deleteEnvelopeAnnotationConfig?: Partial<SdkConfig>;

  protected createTemplateConfig?: Partial<SdkConfig>;

  protected listTemplatesConfig?: Partial<SdkConfig>;

  protected getTemplateConfig?: Partial<SdkConfig>;

  protected deleteTemplateConfig?: Partial<SdkConfig>;

  protected duplicateTemplateConfig?: Partial<SdkConfig>;

  protected addTemplateDocumentConfig?: Partial<SdkConfig>;

  protected getTemplateDocumentConfig?: Partial<SdkConfig>;

  protected getTemplateDocumentsConfig?: Partial<SdkConfig>;

  protected addTemplateSigningStepsConfig?: Partial<SdkConfig>;

  protected renameTemplateConfig?: Partial<SdkConfig>;

  protected setTemplateCommentConfig?: Partial<SdkConfig>;

  protected setTemplateNotificationConfig?: Partial<SdkConfig>;

  protected getTemplateAnnotationsConfig?: Partial<SdkConfig>;

  protected getDocumentTemplateAnnotationsConfig?: Partial<SdkConfig>;

  protected addTemplateAnnotationConfig?: Partial<SdkConfig>;

  protected deleteTemplateAnnotationConfig?: Partial<SdkConfig>;

  protected setTemplateAttachmentsSettingsConfig?: Partial<SdkConfig>;

  protected setTemplateAttachmentsPlaceholdersConfig?: Partial<SdkConfig>;

  protected createWebhookConfig?: Partial<SdkConfig>;

  protected listWebhooksConfig?: Partial<SdkConfig>;

  protected deleteWebhookConfig?: Partial<SdkConfig>;

  /**
   * Sets method-level configuration for createEnvelope.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreateEnvelopeConfig(config: Partial<SdkConfig>): this {
    this.createEnvelopeConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for createEnvelopeFromTemplate.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreateEnvelopeFromTemplateConfig(config: Partial<SdkConfig>): this {
    this.createEnvelopeFromTemplateConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for listEnvelopes.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setListEnvelopesConfig(config: Partial<SdkConfig>): this {
    this.listEnvelopesConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getEnvelope.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetEnvelopeConfig(config: Partial<SdkConfig>): this {
    this.getEnvelopeConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for deleteEnvelope.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setDeleteEnvelopeConfig(config: Partial<SdkConfig>): this {
    this.deleteEnvelopeConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for downloadEnvelopeSignedDocuments.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setDownloadEnvelopeSignedDocumentsConfig(config: Partial<SdkConfig>): this {
    this.downloadEnvelopeSignedDocumentsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for downloadEnvelopeCertificate.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setDownloadEnvelopeCertificateConfig(config: Partial<SdkConfig>): this {
    this.downloadEnvelopeCertificateConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getEnvelopeDocument.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetEnvelopeDocumentConfig(config: Partial<SdkConfig>): this {
    this.getEnvelopeDocumentConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getEnvelopeDocuments.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetEnvelopeDocumentsConfig(config: Partial<SdkConfig>): this {
    this.getEnvelopeDocumentsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for addEnvelopeDocument.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setAddEnvelopeDocumentConfig(config: Partial<SdkConfig>): this {
    this.addEnvelopeDocumentConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for setEnvelopeDynamicFields.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setSetEnvelopeDynamicFieldsConfig(config: Partial<SdkConfig>): this {
    this.setEnvelopeDynamicFieldsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for addEnvelopeSigningSteps.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setAddEnvelopeSigningStepsConfig(config: Partial<SdkConfig>): this {
    this.addEnvelopeSigningStepsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for setEnvelopeAttachmentsSettings.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setSetEnvelopeAttachmentsSettingsConfig(config: Partial<SdkConfig>): this {
    this.setEnvelopeAttachmentsSettingsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for setEnvelopeAttachmentsPlaceholders.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setSetEnvelopeAttachmentsPlaceholdersConfig(config: Partial<SdkConfig>): this {
    this.setEnvelopeAttachmentsPlaceholdersConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getAttachmentFile.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetAttachmentFileConfig(config: Partial<SdkConfig>): this {
    this.getAttachmentFileConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for sendEnvelope.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setSendEnvelopeConfig(config: Partial<SdkConfig>): this {
    this.sendEnvelopeConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for duplicateEnvelope.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setDuplicateEnvelopeConfig(config: Partial<SdkConfig>): this {
    this.duplicateEnvelopeConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for voidEnvelope.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setVoidEnvelopeConfig(config: Partial<SdkConfig>): this {
    this.voidEnvelopeConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for renameEnvelope.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setRenameEnvelopeConfig(config: Partial<SdkConfig>): this {
    this.renameEnvelopeConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for setEnvelopeComment.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setSetEnvelopeCommentConfig(config: Partial<SdkConfig>): this {
    this.setEnvelopeCommentConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for setEnvelopeNotification.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setSetEnvelopeNotificationConfig(config: Partial<SdkConfig>): this {
    this.setEnvelopeNotificationConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for setEnvelopeExpirationDate.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setSetEnvelopeExpirationDateConfig(config: Partial<SdkConfig>): this {
    this.setEnvelopeExpirationDateConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for setEnvelopeLegalityLevel.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setSetEnvelopeLegalityLevelConfig(config: Partial<SdkConfig>): this {
    this.setEnvelopeLegalityLevelConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getEnvelopeAnnotations.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetEnvelopeAnnotationsConfig(config: Partial<SdkConfig>): this {
    this.getEnvelopeAnnotationsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getEnvelopeDocumentAnnotations.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetEnvelopeDocumentAnnotationsConfig(config: Partial<SdkConfig>): this {
    this.getEnvelopeDocumentAnnotationsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for addEnvelopeAnnotation.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setAddEnvelopeAnnotationConfig(config: Partial<SdkConfig>): this {
    this.addEnvelopeAnnotationConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for deleteEnvelopeAnnotation.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setDeleteEnvelopeAnnotationConfig(config: Partial<SdkConfig>): this {
    this.deleteEnvelopeAnnotationConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for createTemplate.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreateTemplateConfig(config: Partial<SdkConfig>): this {
    this.createTemplateConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for listTemplates.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setListTemplatesConfig(config: Partial<SdkConfig>): this {
    this.listTemplatesConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getTemplate.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetTemplateConfig(config: Partial<SdkConfig>): this {
    this.getTemplateConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for deleteTemplate.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setDeleteTemplateConfig(config: Partial<SdkConfig>): this {
    this.deleteTemplateConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for duplicateTemplate.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setDuplicateTemplateConfig(config: Partial<SdkConfig>): this {
    this.duplicateTemplateConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for addTemplateDocument.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setAddTemplateDocumentConfig(config: Partial<SdkConfig>): this {
    this.addTemplateDocumentConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getTemplateDocument.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetTemplateDocumentConfig(config: Partial<SdkConfig>): this {
    this.getTemplateDocumentConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getTemplateDocuments.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetTemplateDocumentsConfig(config: Partial<SdkConfig>): this {
    this.getTemplateDocumentsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for addTemplateSigningSteps.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setAddTemplateSigningStepsConfig(config: Partial<SdkConfig>): this {
    this.addTemplateSigningStepsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for renameTemplate.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setRenameTemplateConfig(config: Partial<SdkConfig>): this {
    this.renameTemplateConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for setTemplateComment.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setSetTemplateCommentConfig(config: Partial<SdkConfig>): this {
    this.setTemplateCommentConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for setTemplateNotification.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setSetTemplateNotificationConfig(config: Partial<SdkConfig>): this {
    this.setTemplateNotificationConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getTemplateAnnotations.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetTemplateAnnotationsConfig(config: Partial<SdkConfig>): this {
    this.getTemplateAnnotationsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getDocumentTemplateAnnotations.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetDocumentTemplateAnnotationsConfig(config: Partial<SdkConfig>): this {
    this.getDocumentTemplateAnnotationsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for addTemplateAnnotation.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setAddTemplateAnnotationConfig(config: Partial<SdkConfig>): this {
    this.addTemplateAnnotationConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for deleteTemplateAnnotation.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setDeleteTemplateAnnotationConfig(config: Partial<SdkConfig>): this {
    this.deleteTemplateAnnotationConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for setTemplateAttachmentsSettings.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setSetTemplateAttachmentsSettingsConfig(config: Partial<SdkConfig>): this {
    this.setTemplateAttachmentsSettingsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for setTemplateAttachmentsPlaceholders.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setSetTemplateAttachmentsPlaceholdersConfig(config: Partial<SdkConfig>): this {
    this.setTemplateAttachmentsPlaceholdersConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for createWebhook.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreateWebhookConfig(config: Partial<SdkConfig>): this {
    this.createWebhookConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for listWebhooks.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setListWebhooksConfig(config: Partial<SdkConfig>): this {
    this.listWebhooksConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for deleteWebhook.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setDeleteWebhookConfig(config: Partial<SdkConfig>): this {
    this.deleteWebhookConfig = config;
    return this;
  }

  /**
   * Create new envelope
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<Envelope>>} - Envelope created successfully
   */
  async createEnvelope(
    body: CreateEnvelopeRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<Envelope> {
    const resolvedConfig = this.getResolvedConfig(this.createEnvelopeConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/envelope')
      .setRequestSchema(createEnvelopeRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: envelopeResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<Envelope>(request);
  }

  /**
   * Create new envelope from template
   * @param {string} templateId -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<Envelope>>} - Envelope created successfully
   */
  async createEnvelopeFromTemplate(
    templateId: string,
    body: CreateEnvelopeFromTemplateRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<Envelope> {
    const resolvedConfig = this.getResolvedConfig(
      this.createEnvelopeFromTemplateConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/envelope/from_template/{template_id}')
      .setRequestSchema(createEnvelopeFromTemplateRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: envelopeResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'template_id',
        value: templateId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<Envelope>(request);
  }

  /**
   * List envelopes
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<ListEnvelopesResponse>>} - List of envelopes retrieved successfully
   */
  async listEnvelopes(
    body: ListEnvelopesRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<ListEnvelopesResponse> {
    const resolvedConfig = this.getResolvedConfig(this.listEnvelopesConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/envelopes')
      .setRequestSchema(listEnvelopesRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: listEnvelopesResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<ListEnvelopesResponse>(request);
  }

  /**
   * Get envelope
   * @param {string} envelopeId -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<Envelope>>} - Envelope details retrieved successfully
   */
  async getEnvelope(envelopeId: string, requestConfig?: Partial<SdkConfig>): Promise<Envelope> {
    const resolvedConfig = this.getResolvedConfig(this.getEnvelopeConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/envelope/{envelope_id}')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: envelopeResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'envelope_id',
        value: envelopeId,
      })
      .build();
    return this.client.callDirect<Envelope>(request);
  }

  /**
   * Delete envelope
   * @param {string} envelopeId -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - Envelope deleted successfully
   */
  async deleteEnvelope(envelopeId: string, requestConfig?: Partial<SdkConfig>): Promise<void> {
    const resolvedConfig = this.getResolvedConfig(this.deleteEnvelopeConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('DELETE')
      .setPath('/envelope/{envelope_id}')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.undefined(),
        contentType: ContentType.NoContent,
        status: 200,
      })
      .addPathParam({
        key: 'envelope_id',
        value: envelopeId,
      })
      .build();
    return this.client.callDirect<void>(request);
  }

  /**
   * Download signed documents for an envelope
   * @param {string} envelopeId - ID of the envelope
   * @param {boolean} [params.certificateOfCompletion] - Whether to include the certificate of completion in the downloaded file
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<ArrayBuffer>>} - Combined signed documents downloaded successfully
   */
  async downloadEnvelopeSignedDocuments(
    envelopeId: string,
    params?: DownloadEnvelopeSignedDocumentsParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<ArrayBuffer> {
    const resolvedConfig = this.getResolvedConfig(
      this.downloadEnvelopeSignedDocumentsConfig,
      requestConfig,
    );
    z.object({ certificateOfCompletion: z.boolean().optional() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/envelope/{envelope_id}/signed_documents')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Binary,
        status: 200,
      })
      .addPathParam({
        key: 'envelope_id',
        value: envelopeId,
      })
      .addQueryParam({
        key: 'certificate_of_completion',
        value: params?.certificateOfCompletion,
      })
      .build();
    return this.client.callDirect<ArrayBuffer>(request);
  }

  /**
   * Download certificate of completion for an envelope
   * @param {string} envelopeId - ID of the envelope
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<ArrayBuffer>>} - Certificate of completion downloaded successfully
   */
  async downloadEnvelopeCertificate(
    envelopeId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<ArrayBuffer> {
    const resolvedConfig = this.getResolvedConfig(
      this.downloadEnvelopeCertificateConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/envelope/{envelope_id}/certificate')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Binary,
        status: 200,
      })
      .addPathParam({
        key: 'envelope_id',
        value: envelopeId,
      })
      .build();
    return this.client.callDirect<ArrayBuffer>(request);
  }

  /**
   * Get envelope document
   * @param {string} envelopeId -
   * @param {string} documentId -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<Document>>} - Document details retrieved successfully
   */
  async getEnvelopeDocument(
    envelopeId: string,
    documentId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<Document> {
    const resolvedConfig = this.getResolvedConfig(this.getEnvelopeDocumentConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/envelope/{envelope_id}/document/{document_id}')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: documentResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'envelope_id',
        value: envelopeId,
      })
      .addPathParam({
        key: 'document_id',
        value: documentId,
      })
      .build();
    return this.client.callDirect<Document>(request);
  }

  /**
   * Get envelope documents
   * @param {string} envelopeId -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<ListEnvelopeDocumentsResponse>>} - Documents of envelope retrieved successfully
   */
  async getEnvelopeDocuments(
    envelopeId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<ListEnvelopeDocumentsResponse> {
    const resolvedConfig = this.getResolvedConfig(this.getEnvelopeDocumentsConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/envelope/{envelope_id}/documents')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: listEnvelopeDocumentsResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'envelope_id',
        value: envelopeId,
      })
      .build();
    return this.client.callDirect<ListEnvelopeDocumentsResponse>(request);
  }

  /**
   * Add envelope document
   * @param {string} envelopeId -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<Document>>} - Document added to envelope successfully
   */
  async addEnvelopeDocument(
    envelopeId: string,
    body: AddEnvelopeDocumentRequest,
    filename?: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<Document> {
    const resolvedConfig = this.getResolvedConfig(this.addEnvelopeDocumentConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/envelope/{envelope_id}/document')
      .setRequestSchema(addEnvelopeDocumentRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.MultipartFormData)
      .addResponse({
        schema: documentResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'envelope_id',
        value: envelopeId,
      })
      .addBody(body)
      .setFilename(filename)
      .build();
    return this.client.callDirect<Document>(request);
  }

  /**
   * Set envelope dynamic fields
   * @param {string} envelopeId -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<Envelope>>} - Dynamic fields added successfully
   */
  async setEnvelopeDynamicFields(
    envelopeId: string,
    body: SetEnvelopeDynamicFieldsRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<Envelope> {
    const resolvedConfig = this.getResolvedConfig(
      this.setEnvelopeDynamicFieldsConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/envelope/{envelope_id}/dynamic_fields')
      .setRequestSchema(setEnvelopeDynamicFieldsRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: envelopeResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'envelope_id',
        value: envelopeId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<Envelope>(request);
  }

  /**
   * Add envelope signing steps
   * @param {string} envelopeId -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<Envelope>>} - Signing steps added successfully
   */
  async addEnvelopeSigningSteps(
    envelopeId: string,
    body: AddEnvelopeSigningStepsRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<Envelope> {
    const resolvedConfig = this.getResolvedConfig(
      this.addEnvelopeSigningStepsConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/envelope/{envelope_id}/signing_steps')
      .setRequestSchema(addEnvelopeSigningStepsRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: envelopeResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'envelope_id',
        value: envelopeId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<Envelope>(request);
  }

  /**
   * Set envelope attachment settings
   * @param {string} envelopeId -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<EnvelopeAttachments>>} - Attachment settings set successfully
   */
  async setEnvelopeAttachmentsSettings(
    envelopeId: string,
    body: SetEnvelopeAttachmentsSettingsRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<EnvelopeAttachments> {
    const resolvedConfig = this.getResolvedConfig(
      this.setEnvelopeAttachmentsSettingsConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/envelope/{envelope_id}/attachments/settings')
      .setRequestSchema(setEnvelopeAttachmentsSettingsRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: envelopeAttachmentsResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'envelope_id',
        value: envelopeId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<EnvelopeAttachments>(request);
  }

  /**
   * Placeholders to be set, completely replacing the existing ones.
   * @param {string} envelopeId -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<EnvelopeAttachments>>} - Placeholders set
   */
  async setEnvelopeAttachmentsPlaceholders(
    envelopeId: string,
    body: SetEnvelopeAttachmentsPlaceholdersRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<EnvelopeAttachments> {
    const resolvedConfig = this.getResolvedConfig(
      this.setEnvelopeAttachmentsPlaceholdersConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/envelope/{envelope_id}/attachments/placeholders')
      .setRequestSchema(setEnvelopeAttachmentsPlaceholdersRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: envelopeAttachmentsResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'envelope_id',
        value: envelopeId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<EnvelopeAttachments>(request);
  }

  /**
   * Get envelope attachment file
   * @param {string} envelopeId -
   * @param {string} fileId -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<ArrayBuffer>>} - Attachment file retrieved successfully
   */
  async getAttachmentFile(
    envelopeId: string,
    fileId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<ArrayBuffer> {
    const resolvedConfig = this.getResolvedConfig(this.getAttachmentFileConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/envelope/{envelope_id}/attachments/{file_id}')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Binary,
        status: 200,
      })
      .addPathParam({
        key: 'envelope_id',
        value: envelopeId,
      })
      .addPathParam({
        key: 'file_id',
        value: fileId,
      })
      .build();
    return this.client.callDirect<ArrayBuffer>(request);
  }

  /**
   * Send envelope for signature
   * @param {string} envelopeId -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<Envelope>>} - Envelope sent successfully
   */
  async sendEnvelope(envelopeId: string, requestConfig?: Partial<SdkConfig>): Promise<Envelope> {
    const resolvedConfig = this.getResolvedConfig(this.sendEnvelopeConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/envelope/{envelope_id}/send')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: envelopeResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'envelope_id',
        value: envelopeId,
      })
      .build();
    return this.client.callDirect<Envelope>(request);
  }

  /**
   * Duplicate envelope
   * @param {string} envelopeId -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<Envelope>>} - Envelope duplicated successfully
   */
  async duplicateEnvelope(
    envelopeId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<Envelope> {
    const resolvedConfig = this.getResolvedConfig(this.duplicateEnvelopeConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/envelope/{envelope_id}/duplicate')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: envelopeResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'envelope_id',
        value: envelopeId,
      })
      .build();
    return this.client.callDirect<Envelope>(request);
  }

  /**
   * Void envelope
   * @param {string} envelopeId -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<Envelope>>} - Envelope voided successfully
   */
  async voidEnvelope(envelopeId: string, requestConfig?: Partial<SdkConfig>): Promise<Envelope> {
    const resolvedConfig = this.getResolvedConfig(this.voidEnvelopeConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/envelope/{envelope_id}/void')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: envelopeResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'envelope_id',
        value: envelopeId,
      })
      .build();
    return this.client.callDirect<Envelope>(request);
  }

  /**
   * Rename envelope
   * @param {string} envelopeId -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<Envelope>>} - Envelope renamed successfully
   */
  async renameEnvelope(
    envelopeId: string,
    body: RenameEnvelopeRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<Envelope> {
    const resolvedConfig = this.getResolvedConfig(this.renameEnvelopeConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/envelope/{envelope_id}/rename')
      .setRequestSchema(renameEnvelopeRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: envelopeResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'envelope_id',
        value: envelopeId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<Envelope>(request);
  }

  /**
   * Set envelope comment
   * @param {string} envelopeId -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<Envelope>>} - Envelope comment changed successfully
   */
  async setEnvelopeComment(
    envelopeId: string,
    body: SetEnvelopeCommentRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<Envelope> {
    const resolvedConfig = this.getResolvedConfig(this.setEnvelopeCommentConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/envelope/{envelope_id}/set_comment')
      .setRequestSchema(setEnvelopeCommentRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: envelopeResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'envelope_id',
        value: envelopeId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<Envelope>(request);
  }

  /**
   * Set envelope notification
   * @param {string} envelopeId -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<Envelope>>} - Envelope notification changed successfully
   */
  async setEnvelopeNotification(
    envelopeId: string,
    body: EnvelopeNotification,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<Envelope> {
    const resolvedConfig = this.getResolvedConfig(
      this.setEnvelopeNotificationConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/envelope/{envelope_id}/set_notification')
      .setRequestSchema(envelopeNotificationRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: envelopeResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'envelope_id',
        value: envelopeId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<Envelope>(request);
  }

  /**
   * Set envelope expiration date
   * @param {string} envelopeId -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<Envelope>>} - Envelope expiration date changed successfully
   */
  async setEnvelopeExpirationDate(
    envelopeId: string,
    body: SetEnvelopeExpirationRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<Envelope> {
    const resolvedConfig = this.getResolvedConfig(
      this.setEnvelopeExpirationDateConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/envelope/{envelope_id}/set_expiration_date')
      .setRequestSchema(setEnvelopeExpirationRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: envelopeResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'envelope_id',
        value: envelopeId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<Envelope>(request);
  }

  /**
   * Set envelope legality level
   * @param {string} envelopeId -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<Envelope>>} - Envelope legality level changed successfully
   */
  async setEnvelopeLegalityLevel(
    envelopeId: string,
    body: SetEnvelopeLegalityLevelRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<Envelope> {
    const resolvedConfig = this.getResolvedConfig(
      this.setEnvelopeLegalityLevelConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/envelope/{envelope_id}/set_legality_level')
      .setRequestSchema(setEnvelopeLegalityLevelRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: envelopeResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'envelope_id',
        value: envelopeId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<Envelope>(request);
  }

  /**
   * Get envelope annotations
   * @param {string} envelopeId - ID of the envelope
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<Annotation[]>>} - List of annotations retrieved successfully
   */
  async getEnvelopeAnnotations(
    envelopeId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<Annotation[]> {
    const resolvedConfig = this.getResolvedConfig(this.getEnvelopeAnnotationsConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/envelope/{envelope_id}/annotations')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.array(annotationResponse),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'envelope_id',
        value: envelopeId,
      })
      .build();
    return this.client.callDirect<Annotation[]>(request);
  }

  /**
   * Get envelope document annotations
   * @param {string} envelopeId - ID of the envelope
   * @param {string} documentId - ID of document
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<ListEnvelopeDocumentAnnotationsResponse>>} - List of document annotations retrieved successfully
   */
  async getEnvelopeDocumentAnnotations(
    envelopeId: string,
    documentId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<ListEnvelopeDocumentAnnotationsResponse> {
    const resolvedConfig = this.getResolvedConfig(
      this.getEnvelopeDocumentAnnotationsConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/envelope/{envelope_id}/annotations/{document_id}')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: listEnvelopeDocumentAnnotationsResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'envelope_id',
        value: envelopeId,
      })
      .addPathParam({
        key: 'document_id',
        value: documentId,
      })
      .build();
    return this.client.callDirect<ListEnvelopeDocumentAnnotationsResponse>(request);
  }

  /**
   * Add envelope annotation
   * @param {string} envelopeId - ID of the envelope
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<Annotation>>} - Annotation added successfully
   */
  async addEnvelopeAnnotation(
    envelopeId: string,
    body: AddAnnotationRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<Annotation> {
    const resolvedConfig = this.getResolvedConfig(this.addEnvelopeAnnotationConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/envelope/{envelope_id}/annotation')
      .setRequestSchema(addAnnotationRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: annotationResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'envelope_id',
        value: envelopeId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<Annotation>(request);
  }

  /**
   * Delete envelope annotation
   * @param {string} envelopeId - ID of the envelope
   * @param {string} annotationId - ID of the annotation to delete
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - Annotation deleted successfully
   */
  async deleteEnvelopeAnnotation(
    envelopeId: string,
    annotationId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<void> {
    const resolvedConfig = this.getResolvedConfig(
      this.deleteEnvelopeAnnotationConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('DELETE')
      .setPath('/envelope/{envelope_id}/annotation/{annotation_id}')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.undefined(),
        contentType: ContentType.NoContent,
        status: 200,
      })
      .addPathParam({
        key: 'envelope_id',
        value: envelopeId,
      })
      .addPathParam({
        key: 'annotation_id',
        value: annotationId,
      })
      .build();
    return this.client.callDirect<void>(request);
  }

  /**
   * Create new template
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<Template>>} - Envelope created successfully
   */
  async createTemplate(
    body: CreateTemplateRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<Template> {
    const resolvedConfig = this.getResolvedConfig(this.createTemplateConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/template')
      .setRequestSchema(createTemplateRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: templateResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<Template>(request);
  }

  /**
   * List templates
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<ListTemplatesResponse>>} - List of templates retrieved successfully
   */
  async listTemplates(
    body: ListTemplatesRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<ListTemplatesResponse> {
    const resolvedConfig = this.getResolvedConfig(this.listTemplatesConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/templates')
      .setRequestSchema(listTemplatesRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: listTemplatesResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<ListTemplatesResponse>(request);
  }

  /**
   * Get template
   * @param {string} templateId -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<Template>>} - Template details retrieved successfully
   */
  async getTemplate(templateId: string, requestConfig?: Partial<SdkConfig>): Promise<Template> {
    const resolvedConfig = this.getResolvedConfig(this.getTemplateConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/template/{template_id}')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: templateResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'template_id',
        value: templateId,
      })
      .build();
    return this.client.callDirect<Template>(request);
  }

  /**
   * Delete template
   * @param {string} templateId -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - Template deleted successfully
   */
  async deleteTemplate(templateId: string, requestConfig?: Partial<SdkConfig>): Promise<void> {
    const resolvedConfig = this.getResolvedConfig(this.deleteTemplateConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('DELETE')
      .setPath('/template/{template_id}')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.undefined(),
        contentType: ContentType.NoContent,
        status: 200,
      })
      .addPathParam({
        key: 'template_id',
        value: templateId,
      })
      .build();
    return this.client.callDirect<void>(request);
  }

  /**
   * Duplicate template
   * @param {string} templateId -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<Template>>} - Template duplicated successfully
   */
  async duplicateTemplate(
    templateId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<Template> {
    const resolvedConfig = this.getResolvedConfig(this.duplicateTemplateConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/template/{template_id}/duplicate')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: templateResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'template_id',
        value: templateId,
      })
      .build();
    return this.client.callDirect<Template>(request);
  }

  /**
   * Add template document
   * @param {string} templateId -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<Document>>} - Document added to envelope successfully
   */
  async addTemplateDocument(
    templateId: string,
    body: AddTemplateDocumentRequest,
    filename?: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<Document> {
    const resolvedConfig = this.getResolvedConfig(this.addTemplateDocumentConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/template/{template_id}/document')
      .setRequestSchema(addTemplateDocumentRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.MultipartFormData)
      .addResponse({
        schema: documentResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'template_id',
        value: templateId,
      })
      .addBody(body)
      .setFilename(filename)
      .build();
    return this.client.callDirect<Document>(request);
  }

  /**
   * Get template document
   * @param {string} templateId -
   * @param {string} documentId -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<Document>>} - Document details retrieved successfully
   */
  async getTemplateDocument(
    templateId: string,
    documentId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<Document> {
    const resolvedConfig = this.getResolvedConfig(this.getTemplateDocumentConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/template/{template_id}/document/{document_id}')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: documentResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'template_id',
        value: templateId,
      })
      .addPathParam({
        key: 'document_id',
        value: documentId,
      })
      .build();
    return this.client.callDirect<Document>(request);
  }

  /**
   * Get template documents
   * @param {string} templateId -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<ListTemplateDocumentsResponse>>} - Documents of template retrieved successfully
   */
  async getTemplateDocuments(
    templateId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<ListTemplateDocumentsResponse> {
    const resolvedConfig = this.getResolvedConfig(this.getTemplateDocumentsConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/template/{template_id}/documents')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: listTemplateDocumentsResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'template_id',
        value: templateId,
      })
      .build();
    return this.client.callDirect<ListTemplateDocumentsResponse>(request);
  }

  /**
   * Add template signing steps
   * @param {string} templateId -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<Template>>} - Signing steps added successfully
   */
  async addTemplateSigningSteps(
    templateId: string,
    body: AddTemplateSigningStepsRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<Template> {
    const resolvedConfig = this.getResolvedConfig(
      this.addTemplateSigningStepsConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/template/{template_id}/signing_steps')
      .setRequestSchema(addTemplateSigningStepsRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: templateResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'template_id',
        value: templateId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<Template>(request);
  }

  /**
   * Rename template
   * @param {string} templateId -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<Template>>} - Template renamed successfully
   */
  async renameTemplate(
    templateId: string,
    body: RenameTemplateRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<Template> {
    const resolvedConfig = this.getResolvedConfig(this.renameTemplateConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/template/{template_id}/rename')
      .setRequestSchema(renameTemplateRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: templateResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'template_id',
        value: templateId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<Template>(request);
  }

  /**
   * Set template comment
   * @param {string} templateId -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<Template>>} - Template comment changed successfully
   */
  async setTemplateComment(
    templateId: string,
    body: SetTemplateCommentRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<Template> {
    const resolvedConfig = this.getResolvedConfig(this.setTemplateCommentConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/template/{template_id}/set_comment')
      .setRequestSchema(setTemplateCommentRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: templateResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'template_id',
        value: templateId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<Template>(request);
  }

  /**
   * Set template notification
   * @param {string} templateId -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<Template>>} - Template notification changed successfully
   */
  async setTemplateNotification(
    templateId: string,
    body: EnvelopeNotification,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<Template> {
    const resolvedConfig = this.getResolvedConfig(
      this.setTemplateNotificationConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/template/{template_id}/set_notification')
      .setRequestSchema(envelopeNotificationRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: templateResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'template_id',
        value: templateId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<Template>(request);
  }

  /**
   * Get template annotations
   * @param {string} templateId - ID of the template
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<ListTemplateAnnotationsResponse>>} - List of annotations retrieved successfully
   */
  async getTemplateAnnotations(
    templateId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<ListTemplateAnnotationsResponse> {
    const resolvedConfig = this.getResolvedConfig(this.getTemplateAnnotationsConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/template/{template_id}/annotations')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: listTemplateAnnotationsResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'template_id',
        value: templateId,
      })
      .build();
    return this.client.callDirect<ListTemplateAnnotationsResponse>(request);
  }

  /**
   * Get document template annotations
   * @param {string} templateId - ID of the template
   * @param {string} documentId - ID of document
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<ListTemplateDocumentAnnotationsResponse>>} - List of document annotations retrieved successfully
   */
  async getDocumentTemplateAnnotations(
    templateId: string,
    documentId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<ListTemplateDocumentAnnotationsResponse> {
    const resolvedConfig = this.getResolvedConfig(
      this.getDocumentTemplateAnnotationsConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/template/{template_id}/annotations/{document_id}')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: listTemplateDocumentAnnotationsResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'template_id',
        value: templateId,
      })
      .addPathParam({
        key: 'document_id',
        value: documentId,
      })
      .build();
    return this.client.callDirect<ListTemplateDocumentAnnotationsResponse>(request);
  }

  /**
   * Add template annotation
   * @param {string} templateId - ID of the template
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<Annotation>>} - Annotation added successfully
   */
  async addTemplateAnnotation(
    templateId: string,
    body: AddAnnotationRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<Annotation> {
    const resolvedConfig = this.getResolvedConfig(this.addTemplateAnnotationConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/template/{template_id}/annotation')
      .setRequestSchema(addAnnotationRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: annotationResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'template_id',
        value: templateId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<Annotation>(request);
  }

  /**
   * Delete template annotation
   * @param {string} templateId - ID of the template
   * @param {string} annotationId - ID of the annotation to delete
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - Annotation deleted successfully
   */
  async deleteTemplateAnnotation(
    templateId: string,
    annotationId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<void> {
    const resolvedConfig = this.getResolvedConfig(
      this.deleteTemplateAnnotationConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('DELETE')
      .setPath('/template/{template_id}/annotation/{annotation_id}')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.undefined(),
        contentType: ContentType.NoContent,
        status: 200,
      })
      .addPathParam({
        key: 'template_id',
        value: templateId,
      })
      .addPathParam({
        key: 'annotation_id',
        value: annotationId,
      })
      .build();
    return this.client.callDirect<void>(request);
  }

  /**
   * Set template attachment settings
   * @param {string} templateId -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<EnvelopeAttachments>>} - Attachment settings set successfully
   */
  async setTemplateAttachmentsSettings(
    templateId: string,
    body: SetEnvelopeAttachmentsSettingsRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<EnvelopeAttachments> {
    const resolvedConfig = this.getResolvedConfig(
      this.setTemplateAttachmentsSettingsConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/template/{template_id}/attachments/settings')
      .setRequestSchema(setEnvelopeAttachmentsSettingsRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: envelopeAttachmentsResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'template_id',
        value: templateId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<EnvelopeAttachments>(request);
  }

  /**
   * Placeholders to be set, completely replacing the existing ones.
   * @param {string} templateId -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<EnvelopeAttachments>>} - Placeholders set
   */
  async setTemplateAttachmentsPlaceholders(
    templateId: string,
    body: SetEnvelopeAttachmentsPlaceholdersRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<EnvelopeAttachments> {
    const resolvedConfig = this.getResolvedConfig(
      this.setTemplateAttachmentsPlaceholdersConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/template/{template_id}/attachments/placeholders')
      .setRequestSchema(setEnvelopeAttachmentsPlaceholdersRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: envelopeAttachmentsResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'template_id',
        value: templateId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<EnvelopeAttachments>(request);
  }

  /**
   * Create webhook
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<Webhook>>} - Webhook event received successfully
   */
  async createWebhook(
    body: CreateWebhookRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<Webhook> {
    const resolvedConfig = this.getResolvedConfig(this.createWebhookConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/webhook')
      .setRequestSchema(createWebhookRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: webhookResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<Webhook>(request);
  }

  /**
   * List webhooks
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<ListWebhooksResponse>>} - List of webhooks retrieved successfully
   */
  async listWebhooks(
    body: ListWebhooksRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<ListWebhooksResponse> {
    const resolvedConfig = this.getResolvedConfig(this.listWebhooksConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/webhooks')
      .setRequestSchema(listWebhooksRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: listWebhooksResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<ListWebhooksResponse>(request);
  }

  /**
   * Delete webhook
   * @param {string} webhookId -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - Webhook deleted successfully
   */
  async deleteWebhook(webhookId: string, requestConfig?: Partial<SdkConfig>): Promise<void> {
    const resolvedConfig = this.getResolvedConfig(this.deleteWebhookConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('DELETE')
      .setPath('/webhook/{webhook_id}')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.undefined(),
        contentType: ContentType.NoContent,
        status: 200,
      })
      .addPathParam({
        key: 'webhook_id',
        value: webhookId,
      })
      .build();
    return this.client.callDirect<void>(request);
  }
}
