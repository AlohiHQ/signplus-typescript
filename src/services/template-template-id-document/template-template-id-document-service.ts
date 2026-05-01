import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import {
  AddTemplateDocumentRequest,
  addTemplateDocumentRequestRequest,
} from './models/add-template-document-request';
import { AddTemplateDocumentParams } from './request-params';

/**
 * Service class for TemplateTemplateIdDocumentService operations.
 * Provides methods to interact with TemplateTemplateIdDocumentService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class TemplateTemplateIdDocumentService extends BaseService {
  protected addTemplateDocumentConfig: Partial<SdkConfig> = { environment: Environment.RESTAPI };

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
   * Add template document
   * @param {string} templateId -
   * @param {string} params.accept -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async addTemplateDocument(
    templateId: string,
    body: AddTemplateDocumentRequest,
    params: AddTemplateDocumentParams,
    filename?: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.addTemplateDocumentConfig, requestConfig);
    z.object({ accept: z.string().nullable() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/template/{template_id}/document')
      .setRequestSchema(addTemplateDocumentRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.MultipartFormData)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'template_id',
        value: templateId,
      })
      .addHeaderParam({
        key: 'Accept',
        value: params?.accept,
      })
      .addBody(body)
      .setFilename(filename)
      .build();
    return this.client.callDirect<any>(request);
  }
}
