import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { ListEnvelopesRequest, listEnvelopesRequestRequest } from './models/list-envelopes-request';
import { ListEnvelopesParams } from './request-params';

/**
 * Service class for EnvelopesService operations.
 * Provides methods to interact with EnvelopesService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class EnvelopesService extends BaseService {
  protected listEnvelopesConfig: Partial<SdkConfig> = { environment: Environment.RESTAPI };

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
   * List envelopes
   * @param {string} params.accept -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async listEnvelopes(
    body: ListEnvelopesRequest,
    params: ListEnvelopesParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.listEnvelopesConfig, requestConfig);
    z.object({ accept: z.string().nullable() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/envelopes')
      .setRequestSchema(listEnvelopesRequestRequest)
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
