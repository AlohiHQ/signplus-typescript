import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { DuplicateEnvelopeParams } from './request-params';

/**
 * Service class for DuplicateService operations.
 * Provides methods to interact with DuplicateService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class DuplicateService extends BaseService {
  protected duplicateEnvelopeConfig: Partial<SdkConfig> = { environment: Environment.RESTAPI };

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
   * Duplicate envelope
   * @param {string} envelopeId -
   * @param {string} params.accept -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async duplicateEnvelope(
    envelopeId: string,
    params: DuplicateEnvelopeParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.duplicateEnvelopeConfig, requestConfig);
    z.object({ accept: z.string().nullable() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/envelope/{envelope_id}/duplicate')
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
