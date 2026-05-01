import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { ListWebhooksRequest, listWebhooksRequestRequest } from './models/list-webhooks-request';
import { ListWebhooksParams } from './request-params';

/**
 * Service class for WebhooksService operations.
 * Provides methods to interact with WebhooksService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class WebhooksService extends BaseService {
  protected listWebhooksConfig: Partial<SdkConfig> = { environment: Environment.RESTAPI };

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
   * List webhooks
   * @param {string} params.accept -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async listWebhooks(
    body: ListWebhooksRequest,
    params: ListWebhooksParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.listWebhooksConfig, requestConfig);
    z.object({ accept: z.string().nullable() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/webhooks')
      .setRequestSchema(listWebhooksRequestRequest)
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
