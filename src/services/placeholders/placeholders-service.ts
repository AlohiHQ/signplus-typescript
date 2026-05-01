import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import {
  SetEnvelopeAttachmentsPlaceholdersRequest,
  setEnvelopeAttachmentsPlaceholdersRequestRequest,
} from './models/set-envelope-attachments-placeholders-request';
import { SetEnvelopeAttachmentsPlaceholdersParams } from './request-params';

/**
 * Service class for PlaceholdersService operations.
 * Provides methods to interact with PlaceholdersService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class PlaceholdersService extends BaseService {
  protected setEnvelopeAttachmentsPlaceholdersConfig: Partial<SdkConfig> = {
    environment: Environment.RESTAPI,
  };

  /**
   * Sets method-level configuration for setEnvelopeAttachmentsPlaceholders.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setSetEnvelopeAttachmentsPlaceholdersConfig(config: Partial<SdkConfig>): this {
    this.setEnvelopeAttachmentsPlaceholdersConfig = config;
    return this;
  }

  /**
   * Placeholders to be set, completely replacing the existing ones.
   * @param {string} envelopeId -
   * @param {string} params.accept -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async setEnvelopeAttachmentsPlaceholders(
    envelopeId: string,
    body: SetEnvelopeAttachmentsPlaceholdersRequest,
    params: SetEnvelopeAttachmentsPlaceholdersParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(
      this.setEnvelopeAttachmentsPlaceholdersConfig,
      requestConfig,
    );
    z.object({ accept: z.string().nullable() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/envelope/{envelope_id}/attachments/placeholders')
      .setRequestSchema(setEnvelopeAttachmentsPlaceholdersRequestRequest)
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
