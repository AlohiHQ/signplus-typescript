import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import {
  SetEnvelopeAttachmentsSettingsRequest,
  setEnvelopeAttachmentsSettingsRequestRequest,
} from './models/set-envelope-attachments-settings-request';
import { SetEnvelopeAttachmentsSettingsParams } from './request-params';

/**
 * Service class for SettingsService operations.
 * Provides methods to interact with SettingsService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class SettingsService extends BaseService {
  protected setEnvelopeAttachmentsSettingsConfig: Partial<SdkConfig> = {
    environment: Environment.RESTAPI,
  };

  /**
   * Sets method-level configuration for setEnvelopeAttachmentsSettings.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setSetEnvelopeAttachmentsSettingsConfig(config: Partial<SdkConfig>): this {
    this.setEnvelopeAttachmentsSettingsConfig = config;
    return this;
  }

  /**
   * Set envelope attachment settings
   * @param {string} envelopeId -
   * @param {string} params.accept -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async setEnvelopeAttachmentsSettings(
    envelopeId: string,
    body: SetEnvelopeAttachmentsSettingsRequest,
    params: SetEnvelopeAttachmentsSettingsParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(
      this.setEnvelopeAttachmentsSettingsConfig,
      requestConfig,
    );
    z.object({ accept: z.string().nullable() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/envelope/{envelope_id}/attachments/settings')
      .setRequestSchema(setEnvelopeAttachmentsSettingsRequestRequest)
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
