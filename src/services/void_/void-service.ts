import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { VoidEnvelopeParams } from './request-params';

/**
 * Service class for Void_Service operations.
 * Provides methods to interact with Void_Service-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class Void_Service extends BaseService {
  protected voidEnvelopeConfig: Partial<SdkConfig> = { environment: Environment.RESTAPI };

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
   * Void envelope
   * @param {string} envelopeId -
   * @param {string} params.accept -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async voidEnvelope(
    envelopeId: string,
    params: VoidEnvelopeParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.voidEnvelopeConfig, requestConfig);
    z.object({ accept: z.string().nullable() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/envelope/{envelope_id}/void')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'envelope_id',
        value: envelopeId,
      })
      .addHeaderParam({
        key: 'Accept',
        value: params?.accept,
      })
      .build();
    return this.client.callDirect<any>(request);
  }
}
