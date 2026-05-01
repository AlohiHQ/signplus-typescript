import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import {
  AddEnvelopeSigningStepsRequest,
  addEnvelopeSigningStepsRequestRequest,
} from './models/add-envelope-signing-steps-request';
import { AddEnvelopeSigningStepsParams } from './request-params';

/**
 * Service class for SigningStepsService operations.
 * Provides methods to interact with SigningStepsService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class SigningStepsService extends BaseService {
  protected addEnvelopeSigningStepsConfig: Partial<SdkConfig> = {
    environment: Environment.RESTAPI,
  };

  /**
   * Sets method-level configuration for addEnvelopeSigningSteps.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setAddEnvelopeSigningStepsConfig(config: Partial<SdkConfig>): this {
    this.addEnvelopeSigningStepsConfig = config;
    return this;
  }

  /**
   * Add envelope signing steps
   * @param {string} envelopeId -
   * @param {string} params.accept -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async addEnvelopeSigningSteps(
    envelopeId: string,
    body: AddEnvelopeSigningStepsRequest,
    params: AddEnvelopeSigningStepsParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(
      this.addEnvelopeSigningStepsConfig,
      requestConfig,
    );
    z.object({ accept: z.string().nullable() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/envelope/{envelope_id}/signing_steps')
      .setRequestSchema(addEnvelopeSigningStepsRequestRequest)
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
