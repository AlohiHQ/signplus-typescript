import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { GetDocumentTemplateAnnotationsParams } from './request-params';

/**
 * Service class for TemplateTemplateIdAnnotationsDocumentIdService operations.
 * Provides methods to interact with TemplateTemplateIdAnnotationsDocumentIdService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class TemplateTemplateIdAnnotationsDocumentIdService extends BaseService {
  protected getDocumentTemplateAnnotationsConfig: Partial<SdkConfig> = {
    environment: Environment.RESTAPI,
  };

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
   * Get document template annotations
   * @param {string} templateId -
   * @param {string} documentId -
   * @param {string} params.accept -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async getDocumentTemplateAnnotations(
    templateId: string,
    documentId: string,
    params: GetDocumentTemplateAnnotationsParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(
      this.getDocumentTemplateAnnotationsConfig,
      requestConfig,
    );
    z.object({ accept: z.string().nullable() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/template/{template_id}/annotations/{document_id}')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
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
      .addHeaderParam({
        key: 'Accept',
        value: params?.accept,
      })
      .build();
    return this.client.callDirect<any>(request);
  }
}
