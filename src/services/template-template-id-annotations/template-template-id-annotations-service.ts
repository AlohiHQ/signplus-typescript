import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { GetTemplateAnnotationsParams } from './request-params';

/**
 * Service class for TemplateTemplateIdAnnotationsService operations.
 * Provides methods to interact with TemplateTemplateIdAnnotationsService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class TemplateTemplateIdAnnotationsService extends BaseService {
  protected getTemplateAnnotationsConfig: Partial<SdkConfig> = { environment: Environment.RESTAPI };

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
   * Get template annotations
   * @param {string} templateId -
   * @param {string} params.accept -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async getTemplateAnnotations(
    templateId: string,
    params: GetTemplateAnnotationsParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.getTemplateAnnotationsConfig, requestConfig);
    z.object({ accept: z.string().nullable() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/template/{template_id}/annotations')
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
      .addHeaderParam({
        key: 'Accept',
        value: params?.accept,
      })
      .build();
    return this.client.callDirect<any>(request);
  }
}
