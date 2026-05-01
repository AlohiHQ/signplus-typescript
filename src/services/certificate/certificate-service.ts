import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { DownloadEnvelopeCertificateParams } from './request-params';

/**
 * Service class for CertificateService operations.
 * Provides methods to interact with CertificateService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class CertificateService extends BaseService {
  protected downloadEnvelopeCertificateConfig: Partial<SdkConfig> = {
    environment: Environment.RESTAPI,
  };

  /**
   * Sets method-level configuration for downloadEnvelopeCertificate.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setDownloadEnvelopeCertificateConfig(config: Partial<SdkConfig>): this {
    this.downloadEnvelopeCertificateConfig = config;
    return this;
  }

  /**
   * Download certificate of completion for an envelope
   * @param {string} envelopeId -
   * @param {string} params.accept -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async downloadEnvelopeCertificate(
    envelopeId: string,
    params: DownloadEnvelopeCertificateParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(
      this.downloadEnvelopeCertificateConfig,
      requestConfig,
    );
    z.object({ accept: z.string().nullable() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/envelope/{envelope_id}/certificate')
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
      .addHeaderParam({
        key: 'Accept',
        value: params?.accept,
      })
      .build();
    return this.client.callDirect<any>(request);
  }
}
