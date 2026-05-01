import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';

/**
 * Service class for AnnotationIdService operations.
 * Provides methods to interact with AnnotationIdService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class AnnotationIdService extends BaseService {
  protected deleteEnvelopeAnnotationConfig: Partial<SdkConfig> = {
    environment: Environment.RESTAPI,
  };

  /**
   * Sets method-level configuration for deleteEnvelopeAnnotation.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setDeleteEnvelopeAnnotationConfig(config: Partial<SdkConfig>): this {
    this.deleteEnvelopeAnnotationConfig = config;
    return this;
  }

  /**
   * Delete envelope annotation
   * @param {string} envelopeId -
   * @param {string} annotationId -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async deleteEnvelopeAnnotation(
    envelopeId: string,
    annotationId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(
      this.deleteEnvelopeAnnotationConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('DELETE')
      .setPath('/envelope/{envelope_id}/annotation/{annotation_id}')
      .setRequestSchema(z.any())
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
      .addPathParam({
        key: 'annotation_id',
        value: annotationId,
      })
      .build();
    return this.client.callDirect<any>(request);
  }
}
