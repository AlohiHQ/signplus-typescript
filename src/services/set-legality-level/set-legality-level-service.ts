import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import {
  SetEnvelopeLegalityLevelRequest,
  setEnvelopeLegalityLevelRequestRequest,
} from './models/set-envelope-legality-level-request';
import { SetEnvelopeLegalityLevelParams } from './request-params';

/**
 * Service class for SetLegalityLevelService operations.
 * Provides methods to interact with SetLegalityLevelService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class SetLegalityLevelService extends BaseService {
  protected setEnvelopeLegalityLevelConfig: Partial<SdkConfig> = {
    environment: Environment.RESTAPI,
  };

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
   * Set envelope legality level
   * @param {string} envelopeId -
   * @param {string} params.accept -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async setEnvelopeLegalityLevel(
    envelopeId: string,
    body: SetEnvelopeLegalityLevelRequest,
    params: SetEnvelopeLegalityLevelParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(
      this.setEnvelopeLegalityLevelConfig,
      requestConfig,
    );
    z.object({ accept: z.string().nullable() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/envelope/{envelope_id}/set_legality_level')
      .setRequestSchema(setEnvelopeLegalityLevelRequestRequest)
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
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }
}
