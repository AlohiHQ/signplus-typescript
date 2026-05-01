import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import {
  AddTemplateSigningStepsRequest,
  addTemplateSigningStepsRequestRequest,
} from './models/add-template-signing-steps-request';
import { AddTemplateSigningStepsParams } from './request-params';

/**
 * Service class for TemplateTemplateIdSigningStepsService operations.
 * Provides methods to interact with TemplateTemplateIdSigningStepsService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class TemplateTemplateIdSigningStepsService extends BaseService {
  protected addTemplateSigningStepsConfig: Partial<SdkConfig> = {
    environment: Environment.RESTAPI,
  };

  /**
   * Sets method-level configuration for addTemplateSigningSteps.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setAddTemplateSigningStepsConfig(config: Partial<SdkConfig>): this {
    this.addTemplateSigningStepsConfig = config;
    return this;
  }

  /**
   * Add template signing steps
   * @param {string} templateId -
   * @param {string} params.accept -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async addTemplateSigningSteps(
    templateId: string,
    body: AddTemplateSigningStepsRequest,
    params: AddTemplateSigningStepsParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(
      this.addTemplateSigningStepsConfig,
      requestConfig,
    );
    z.object({ accept: z.string().nullable() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/template/{template_id}/signing_steps')
      .setRequestSchema(addTemplateSigningStepsRequestRequest)
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
