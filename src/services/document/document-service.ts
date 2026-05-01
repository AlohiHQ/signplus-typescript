import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import {
  AddEnvelopeDocumentRequest,
  addEnvelopeDocumentRequestRequest,
} from './models/add-envelope-document-request';
import { AddEnvelopeDocumentParams } from './request-params';

/**
 * Service class for DocumentService operations.
 * Provides methods to interact with DocumentService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class DocumentService extends BaseService {
  protected addEnvelopeDocumentConfig: Partial<SdkConfig> = { environment: Environment.RESTAPI };

  /**
   * Sets method-level configuration for addEnvelopeDocument.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setAddEnvelopeDocumentConfig(config: Partial<SdkConfig>): this {
    this.addEnvelopeDocumentConfig = config;
    return this;
  }

  /**
   * Add envelope document
   * @param {string} envelopeId -
   * @param {string} params.accept -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async addEnvelopeDocument(
    envelopeId: string,
    body: AddEnvelopeDocumentRequest,
    params: AddEnvelopeDocumentParams,
    filename?: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.addEnvelopeDocumentConfig, requestConfig);
    z.object({ accept: z.string().nullable() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/envelope/{envelope_id}/document')
      .setRequestSchema(addEnvelopeDocumentRequestRequest)
      .addAccessTokenAuth(resolvedConfig?.token, 'Bearer')
      .setRequestContentType(ContentType.MultipartFormData)
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
      .addBody(body)
      .setFilename(filename)
      .build();
    return this.client.callDirect<any>(request);
  }
}
