import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import {
  SetEnvelopeDynamicFieldsRequest,
  setEnvelopeDynamicFieldsRequestRequest,
} from './models/set-envelope-dynamic-fields-request';
import { SetEnvelopeDynamicFieldsParams } from './request-params';

/**
 * Service class for DynamicFieldsService operations.
 * Provides methods to interact with DynamicFieldsService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class DynamicFieldsService extends BaseService {
  protected setEnvelopeDynamicFieldsConfig: Partial<SdkConfig> = {
    environment: Environment.RESTAPI,
  };

  /**
   * Sets method-level configuration for setEnvelopeDynamicFields.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setSetEnvelopeDynamicFieldsConfig(config: Partial<SdkConfig>): this {
    this.setEnvelopeDynamicFieldsConfig = config;
    return this;
  }

  /**
   * Set envelope dynamic fields
   * @param {string} envelopeId -
   * @param {string} params.accept -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async setEnvelopeDynamicFields(
    envelopeId: string,
    body: SetEnvelopeDynamicFieldsRequest,
    params: SetEnvelopeDynamicFieldsParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(
      this.setEnvelopeDynamicFieldsConfig,
      requestConfig,
    );
    z.object({ accept: z.string().nullable() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/envelope/{envelope_id}/dynamic_fields')
      .setRequestSchema(setEnvelopeDynamicFieldsRequestRequest)
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
