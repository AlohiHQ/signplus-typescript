import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import {
  SetEnvelopeExpirationDateRequest,
  setEnvelopeExpirationDateRequestRequest,
} from './models/set-envelope-expiration-date-request';
import { SetEnvelopeExpirationDateParams } from './request-params';

/**
 * Service class for SetExpirationDateService operations.
 * Provides methods to interact with SetExpirationDateService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class SetExpirationDateService extends BaseService {
  protected setEnvelopeExpirationDateConfig: Partial<SdkConfig> = {
    environment: Environment.RESTAPI,
  };

  /**
   * Sets method-level configuration for setEnvelopeExpirationDate.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setSetEnvelopeExpirationDateConfig(config: Partial<SdkConfig>): this {
    this.setEnvelopeExpirationDateConfig = config;
    return this;
  }

  /**
   * Set envelope expiration date
   * @param {string} envelopeId -
   * @param {string} params.accept -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async setEnvelopeExpirationDate(
    envelopeId: string,
    body: SetEnvelopeExpirationDateRequest,
    params: SetEnvelopeExpirationDateParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(
      this.setEnvelopeExpirationDateConfig,
      requestConfig,
    );
    z.object({ accept: z.string().nullable() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/envelope/{envelope_id}/set_expiration_date')
      .setRequestSchema(setEnvelopeExpirationDateRequestRequest)
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
