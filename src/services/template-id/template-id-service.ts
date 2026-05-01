import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import {
  CreateEnvelopeFromTemplateRequest,
  createEnvelopeFromTemplateRequestRequest,
} from './models/create-envelope-from-template-request';
import { CreateEnvelopeFromTemplateParams } from './request-params';

/**
 * Service class for TemplateIdService operations.
 * Provides methods to interact with TemplateIdService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class TemplateIdService extends BaseService {
  protected createEnvelopeFromTemplateConfig: Partial<SdkConfig> = {
    environment: Environment.RESTAPI,
  };

  /**
   * Sets method-level configuration for createEnvelopeFromTemplate.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreateEnvelopeFromTemplateConfig(config: Partial<SdkConfig>): this {
    this.createEnvelopeFromTemplateConfig = config;
    return this;
  }

  /**
   * Create new envelope from template
   * @param {string} templateId -
   * @param {string} params.accept -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async createEnvelopeFromTemplate(
    templateId: string,
    body: CreateEnvelopeFromTemplateRequest,
    params: CreateEnvelopeFromTemplateParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(
      this.createEnvelopeFromTemplateConfig,
      requestConfig,
    );
    z.object({ accept: z.string().nullable() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/envelope/from_template/{template_id}')
      .setRequestSchema(createEnvelopeFromTemplateRequestRequest)
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
