import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { GetEnvelopeDocumentAnnotationsParams } from './request-params';

/**
 * Service class for EnvelopeEnvelopeIdAnnotationsDocumentIdService operations.
 * Provides methods to interact with EnvelopeEnvelopeIdAnnotationsDocumentIdService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class EnvelopeEnvelopeIdAnnotationsDocumentIdService extends BaseService {
  protected getEnvelopeDocumentAnnotationsConfig: Partial<SdkConfig> = {
    environment: Environment.RESTAPI,
  };

  /**
   * Sets method-level configuration for getEnvelopeDocumentAnnotations.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetEnvelopeDocumentAnnotationsConfig(config: Partial<SdkConfig>): this {
    this.getEnvelopeDocumentAnnotationsConfig = config;
    return this;
  }

  /**
   * Get envelope document annotations
   * @param {string} envelopeId -
   * @param {string} documentId -
   * @param {string} params.accept -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async getEnvelopeDocumentAnnotations(
    envelopeId: string,
    documentId: string,
    params: GetEnvelopeDocumentAnnotationsParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(
      this.getEnvelopeDocumentAnnotationsConfig,
      requestConfig,
    );
    z.object({ accept: z.string().nullable() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/envelope/{envelope_id}/annotations/{document_id}')
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
        key: 'document_id',
        value: documentId,
      })
      .addHeaderParam({
        key: 'Accept',
        value: params?.accept,
      })
      .build();
    return this.client.callDirect<any>(request);
  }
}
