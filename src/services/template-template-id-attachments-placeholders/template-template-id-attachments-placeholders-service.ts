import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import {
  SetTemplateAttachmentsPlaceholdersRequest,
  setTemplateAttachmentsPlaceholdersRequestRequest,
} from './models/set-template-attachments-placeholders-request';
import { SetTemplateAttachmentsPlaceholdersParams } from './request-params';

/**
 * Service class for TemplateTemplateIdAttachmentsPlaceholdersService operations.
 * Provides methods to interact with TemplateTemplateIdAttachmentsPlaceholdersService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class TemplateTemplateIdAttachmentsPlaceholdersService extends BaseService {
  protected setTemplateAttachmentsPlaceholdersConfig: Partial<SdkConfig> = {
    environment: Environment.RESTAPI,
  };

  /**
   * Sets method-level configuration for setTemplateAttachmentsPlaceholders.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setSetTemplateAttachmentsPlaceholdersConfig(config: Partial<SdkConfig>): this {
    this.setTemplateAttachmentsPlaceholdersConfig = config;
    return this;
  }

  /**
   * Placeholders to be set, completely replacing the existing ones.
   * @param {string} templateId -
   * @param {string} params.accept -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async setTemplateAttachmentsPlaceholders(
    templateId: string,
    body: SetTemplateAttachmentsPlaceholdersRequest,
    params: SetTemplateAttachmentsPlaceholdersParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(
      this.setTemplateAttachmentsPlaceholdersConfig,
      requestConfig,
    );
    z.object({ accept: z.string().nullable() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/template/{template_id}/attachments/placeholders')
      .setRequestSchema(setTemplateAttachmentsPlaceholdersRequestRequest)
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
