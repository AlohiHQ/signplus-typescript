import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import {
  RenameEnvelopeRequest,
  renameEnvelopeRequestRequest,
} from './models/rename-envelope-request';
import { RenameEnvelopeParams } from './request-params';

/**
 * Service class for RenameService operations.
 * Provides methods to interact with RenameService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class RenameService extends BaseService {
  protected renameEnvelopeConfig: Partial<SdkConfig> = { environment: Environment.RESTAPI };

  /**
   * Sets method-level configuration for renameEnvelope.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setRenameEnvelopeConfig(config: Partial<SdkConfig>): this {
    this.renameEnvelopeConfig = config;
    return this;
  }

  /**
   * Rename envelope
   * @param {string} envelopeId -
   * @param {string} params.accept -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async renameEnvelope(
    envelopeId: string,
    body: RenameEnvelopeRequest,
    params: RenameEnvelopeParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.renameEnvelopeConfig, requestConfig);
    z.object({ accept: z.string().nullable() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/envelope/{envelope_id}/rename')
      .setRequestSchema(renameEnvelopeRequestRequest)
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
