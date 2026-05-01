import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { ListTemplatesRequest, listTemplatesRequestRequest } from './models/list-templates-request';
import { ListTemplatesParams } from './request-params';

/**
 * Service class for TemplatesService operations.
 * Provides methods to interact with TemplatesService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class TemplatesService extends BaseService {
  protected listTemplatesConfig: Partial<SdkConfig> = { environment: Environment.RESTAPI };

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
   * List templates
   * @param {string} params.accept -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async listTemplates(
    body: ListTemplatesRequest,
    params: ListTemplatesParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.listTemplatesConfig, requestConfig);
    z.object({ accept: z.string().nullable() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/templates')
      .setRequestSchema(listTemplatesRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({
        key: 'Accept',
        value: params?.accept,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }
}
