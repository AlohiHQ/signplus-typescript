import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { DownloadEnvelopeSignedDocumentsParams } from './request-params';

/**
 * Service class for SignedDocumentsService operations.
 * Provides methods to interact with SignedDocumentsService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class SignedDocumentsService extends BaseService {
  protected downloadEnvelopeSignedDocumentsConfig: Partial<SdkConfig> = {
    environment: Environment.RESTAPI,
  };

  /**
   * Sets method-level configuration for downloadEnvelopeSignedDocuments.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setDownloadEnvelopeSignedDocumentsConfig(config: Partial<SdkConfig>): this {
    this.downloadEnvelopeSignedDocumentsConfig = config;
    return this;
  }

  /**
   * Download signed documents for an envelope
   * @param {string} envelopeId -
   * @param {string} params.accept -
   * @param {string} [params.certificateOfCompletion] - Whether to include the certificate of completion in the downloaded file
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async downloadEnvelopeSignedDocuments(
    envelopeId: string,
    params: DownloadEnvelopeSignedDocumentsParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(
      this.downloadEnvelopeSignedDocumentsConfig,
      requestConfig,
    );
    z.object({
      accept: z.string().nullable(),
      certificateOfCompletion: z.string().optional().nullable(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/envelope/{envelope_id}/signed_documents')
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
      .addQueryParam({
        key: 'certificate_of_completion',
        value: params?.certificateOfCompletion,
      })
      .addHeaderParam({
        key: 'Accept',
        value: params?.accept,
      })
      .build();
    return this.client.callDirect<any>(request);
  }
}
