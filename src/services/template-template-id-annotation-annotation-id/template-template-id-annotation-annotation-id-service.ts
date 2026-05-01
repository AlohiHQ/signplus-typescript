import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';

/**
 * Service class for TemplateTemplateIdAnnotationAnnotationIdService operations.
 * Provides methods to interact with TemplateTemplateIdAnnotationAnnotationIdService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class TemplateTemplateIdAnnotationAnnotationIdService extends BaseService {
  protected deleteTemplateAnnotationConfig: Partial<SdkConfig> = {
    environment: Environment.RESTAPI,
  };

  /**
   * Sets method-level configuration for deleteTemplateAnnotation.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setDeleteTemplateAnnotationConfig(config: Partial<SdkConfig>): this {
    this.deleteTemplateAnnotationConfig = config;
    return this;
  }

  /**
   * Delete template annotation
   * @param {string} templateId -
   * @param {string} annotationId -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async deleteTemplateAnnotation(
    templateId: string,
    annotationId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(
      this.deleteTemplateAnnotationConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('DELETE')
      .setPath('/template/{template_id}/annotation/{annotation_id}')
      .setRequestSchema(z.any())
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
      .addPathParam({
        key: 'annotation_id',
        value: annotationId,
      })
      .build();
    return this.client.callDirect<any>(request);
  }
}
