import { ZodType } from 'zod';
import { ContentType, HttpMethod, SdkConfig, RetryOptions, RequestConfig, ValidationOptions } from '../types';
import { serializeHeader, serializePath, serializeQuery } from '../serializer';
import { HttpRequest } from '../hooks/hook';

export interface CreateRequestParameters<T> {
  baseUrl: string;
  method: HttpMethod;
  body?: any;
  headers: Map<string, unknown>;
  queryParams: Map<string, unknown>;
  pathParams: Map<string, unknown>;
  path: string;
  config: SdkConfig;
  responseSchema: ZodType<T, any, any>;
  requestSchema: ZodType;
  requestContentType: ContentType;
  responseContentType: ContentType;
  validation: ValidationOptions;
  retry: RetryOptions;
}

export class Request<T> {
  public baseUrl: string = '';

  public headers: Map<string, unknown> = new Map();

  public queryParams: Map<string, unknown> = new Map();

  public pathParams: Map<string, unknown> = new Map();

  public body?: any;

  public method: HttpMethod;

  public path: string;

  public config: SdkConfig;

  public responseSchema: ZodType<T, any, any>;

  public requestSchema: ZodType;

  public requestContentType: ContentType;

  public responseContentType: ContentType;

  private readonly pathPattern: string;

  public validation: ValidationOptions = {} as any;

  public retry: RetryOptions = {} as any;

  constructor(params: CreateRequestParameters<T>) {
    this.baseUrl = params.baseUrl;
    this.method = params.method;
    this.pathPattern = params.path;
    this.body = params.body;
    this.path = this.constructPath();
    this.config = params.config;
    this.pathParams = params.pathParams;
    this.headers = params.headers;
    this.queryParams = params.queryParams;
    this.responseSchema = params.responseSchema;
    this.requestSchema = params.requestSchema;
    this.requestContentType = params.requestContentType;
    this.responseContentType = params.responseContentType;
    this.retry = params.retry;
    this.validation = params.validation;
  }

  addHeaderParam(key: string, value: unknown): void {
    if (value === undefined) {
      return;
    }

    this.headers.set(key, value);
  }

  addQueryParam(key: string, value: unknown): void {
    if (value === undefined) {
      return;
    }

    this.queryParams.set(key, value);
  }

  addPathParam(key: string, value: unknown): void {
    if (value === undefined) {
      return;
    }

    this.pathParams.set(key, value);
  }

  addBody(body: any): void {
    if (body === undefined) {
      return;
    }

    this.body = body;
  }

  getFetchArgs(): { url: string; requestInit: RequestInit } {
    const fetchArgs: { url: string; requestInit: RequestInit } = {
      url: this.constructFullUrl(),
      requestInit: {
        method: this.method,
        body: this.body,
      },
    };

    const headersInit = this.constructHeadersInit();
    if (!!headersInit) {
      fetchArgs.requestInit['headers'] = headersInit;
    }

    if (this.config.timeout !== undefined) {
      fetchArgs.requestInit = {
        ...fetchArgs.requestInit,
        signal: AbortSignal.timeout(this.config.timeout),
      };
    }

    return fetchArgs;
  }

  public updateFromHookRequest(hookRequest: HttpRequest) {
    this.baseUrl = hookRequest.baseUrl;
    this.method = hookRequest.method;
    this.path = hookRequest.path;
    this.body = hookRequest.body;
    this.headers = hookRequest.headers;
    this.queryParams = hookRequest.queryParams;
  }

  public toHookRequest(): HttpRequest {
    return {
      baseUrl: this.baseUrl,
      method: this.method,
      path: this.path,
      headers: this.headers,
      body: this.body,
      queryParams: this.queryParams,
    };
  }

  private constructFullUrl(): string {
    const queryString = this.constructQueryString();
    return `${this.baseUrl}${this.constructPath()}${queryString}`;
  }

  private constructPath(): string {
    const pathParamsRecord: Record<string, unknown> = this.constructParamsRecord(this.pathParams);
    return serializePath(this.pathPattern, pathParamsRecord);
  }

  private constructHeadersInit(): HeadersInit | undefined {
    const headerParamsRecord: Record<string, unknown> = this.constructParamsRecord(this.headers);
    if (Object.entries(headerParamsRecord).length === 0) {
      return undefined;
    }
    return serializeHeader(headerParamsRecord);
  }

  private constructQueryString(): string {
    const queryParamsRecord: Record<string, unknown> = this.constructParamsRecord(this.queryParams);
    return serializeQuery(queryParamsRecord);
  }

  private constructParamsRecord(params: Map<string, unknown>): Record<string, unknown> {
    const record: Record<string, unknown> = {};
    params.forEach((val, key) => {
      record[key] = val;
    });
    return record;
  }
}
