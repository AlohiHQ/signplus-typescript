import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import {
  AddEnvelopeAnnotationRequest,
  addEnvelopeAnnotationRequestRequest,
} from './models/add-envelope-annotation-request';
import { AddEnvelopeAnnotationParams } from './request-params';

/**
 * Service class for AnnotationService operations.
 * Provides methods to interact with AnnotationService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class AnnotationService extends BaseService {
  protected addEnvelopeAnnotationConfig: Partial<SdkConfig> = { environment: Environment.RESTAPI };

  /**
   * Sets method-level configuration for addEnvelopeAnnotation.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setAddEnvelopeAnnotationConfig(config: Partial<SdkConfig>): this {
    this.addEnvelopeAnnotationConfig = config;
    return this;
  }

  /**
   * Add envelope annotation
   * @param {string} envelopeId -
   * @param {string} params.accept -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async addEnvelopeAnnotation(
    envelopeId: string,
    body: AddEnvelopeAnnotationRequest,
    params: AddEnvelopeAnnotationParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.addEnvelopeAnnotationConfig, requestConfig);
    z.object({ accept: z.string().nullable() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/envelope/{envelope_id}/annotation')
      .setRequestSchema(addEnvelopeAnnotationRequestRequest)
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
