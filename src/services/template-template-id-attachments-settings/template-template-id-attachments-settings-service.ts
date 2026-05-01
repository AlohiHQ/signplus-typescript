import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import {
  SetTemplateAttachmentsSettingsRequest,
  setTemplateAttachmentsSettingsRequestRequest,
} from './models/set-template-attachments-settings-request';
import { SetTemplateAttachmentsSettingsParams } from './request-params';

/**
 * Service class for TemplateTemplateIdAttachmentsSettingsService operations.
 * Provides methods to interact with TemplateTemplateIdAttachmentsSettingsService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class TemplateTemplateIdAttachmentsSettingsService extends BaseService {
  protected setTemplateAttachmentsSettingsConfig: Partial<SdkConfig> = {
    environment: Environment.RESTAPI,
  };

  /**
   * Sets method-level configuration for setTemplateAttachmentsSettings.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setSetTemplateAttachmentsSettingsConfig(config: Partial<SdkConfig>): this {
    this.setTemplateAttachmentsSettingsConfig = config;
    return this;
  }

  /**
   * Set template attachment settings
   * @param {string} templateId -
   * @param {string} params.accept -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async setTemplateAttachmentsSettings(
    templateId: string,
    body: SetTemplateAttachmentsSettingsRequest,
    params: SetTemplateAttachmentsSettingsParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(
      this.setTemplateAttachmentsSettingsConfig,
      requestConfig,
    );
    z.object({ accept: z.string().nullable() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/template/{template_id}/attachments/settings')
      .setRequestSchema(setTemplateAttachmentsSettingsRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'template_id',
        value: templateId,
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
