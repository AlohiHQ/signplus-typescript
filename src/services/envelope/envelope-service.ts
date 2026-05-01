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
import { CreateEnvelopeParams } from './request-params';

/**
 * Service class for EnvelopeService operations.
 * Provides methods to interact with EnvelopeService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class EnvelopeService extends BaseService {
  protected createEnvelopeConfig: Partial<SdkConfig> = { environment: Environment.RESTAPI };

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
   * Create new envelope
   * @param {string} params.accept -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async createEnvelope(
    body: CreateEnvelopeRequest,
    params: CreateEnvelopeParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.createEnvelopeConfig, requestConfig);
    z.object({ accept: z.string().nullable() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/envelope')
      .setRequestSchema(createEnvelopeRequestRequest)
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
