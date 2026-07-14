import { HttpError } from '../error';
import { HttpMetadata, HttpResponse } from '../types';
import { LineDecoder } from '../utils/line-decoder';
import { Request } from './request';
import axios, { AxiosRequestConfig, AxiosResponse, isAxiosError } from 'axios';

/**
 * Interface for HTTP client adapters.
 * Defines the contract for sending HTTP requests and optionally streaming responses.
 */
export interface HttpAdapter {
  send(): Promise<HttpResponse>;
}

/**
 * Axios-based HTTP adapter for executing requests.
 * Wraps the Axios library to provide a consistent interface for both regular and streaming requests.
 * Handles headers, cookies, timeouts, and error responses according to Axios conventions.
 *
 * @template T - The expected response type
 */
export class RequestAxiosAdapter<T> implements HttpAdapter {
  private config: AxiosRequestConfig = {};

  constructor(private request: Request) {
    this.setHeaders();
    this.setCookies();
    this.setTimeout();
  }

  /**
   * Executes the HTTP request and returns the response.
   * Fetches the full response body as an ArrayBuffer.
   *
   * @returns A promise resolving to the HTTP response with metadata and body
   */
  public async send(): Promise<HttpResponse<T>> {
    const response = await this.executeCall({
      responseType: 'arraybuffer',
    });

    const headerRecord: Record<string, string> = {};
    Object.keys(response.headers).forEach((key) => {
      headerRecord[key] = response.headers[key];
    });

    const metadata: HttpMetadata = {
      status: response.status,
      statusText: response.statusText || '',
      headers: headerRecord,
    };

    return {
      metadata,
      raw: response.data.buffer.slice(
        response.data.byteOffset,
        response.data.byteOffset + response.data.byteLength,
      ),
    };
  }

  /**
   * Executes the HTTP request as a stream, yielding chunks as they arrive.
   * Uses LineDecoder to split the stream into lines for server-sent events or similar protocols.
   *
   * @returns An async generator yielding HTTP response chunks
   * @throws Error if responseHeaders is enabled (streaming not supported with responseHeaders)
   */
  public async *stream(): AsyncGenerator<HttpResponse<T>> {
    const response = await this.executeCall({
      responseType: 'stream',
    });

    const headerRecord: Record<string, string> = {};
    Object.keys(response.headers).forEach((key) => {
      headerRecord[key] = response.headers[key];
    });

    const metadata: HttpMetadata = {
      status: response.status,
      statusText: response.statusText || '',
      headers: headerRecord,
    };

    if (response.status >= 400) {
      throw new HttpError(metadata, response.data.buffer);
    }

    const stream = response.data;
    const lineDecoder = new LineDecoder();
    for await (const chunk of stream) {
      for (const line of lineDecoder.splitLines(chunk)) {
        yield {
          metadata,
          raw: line,
        };
      }
    }

    for (const line of lineDecoder.flush()) {
      yield {
        metadata,
        raw: line,
      };
    }
  }

  private async executeCall(configOverrides: Partial<AxiosRequestConfig>): Promise<AxiosResponse> {
    const method = this.getMethod();
    const { body } = this.request;

    const finalConfig: AxiosRequestConfig = {
      ...this.config,
      ...configOverrides,
    };

    try {
      if (
        this.request.method === 'POST' ||
        this.request.method === 'PUT' ||
        this.request.method === 'PATCH'
      ) {
        return await method(this.request.constructFullUrl(), body, finalConfig);
      } else {
        return await method(this.request.constructFullUrl(), finalConfig);
      }
    } catch (err) {
      if (isAxiosError(err) && err.response) {
        return err.response;
      } else {
        throw err;
      }
    }
  }

  private getMethod(): (
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ) => Promise<AxiosResponse> {
    if (this.request.method === 'POST') {
      return axios.post;
    } else if (this.request.method === 'GET') {
      return axios.get;
    } else if (this.request.method === 'PUT') {
      return axios.put;
    } else if (this.request.method === 'DELETE') {
      return axios.delete;
    } else if (this.request.method === 'PATCH') {
      return axios.patch;
    } else if (this.request.method === 'HEAD') {
      return axios.head;
    } else if (this.request.method === 'OPTIONS') {
      return axios.options;
    }
    throw new Error('Unsupported HTTP method');
  }

  private setHeaders(): void {
    if (!this.request.headers) {
      return;
    }

    const headersRecord: Record<string, string> = {};
    new Headers(this.request.getHeaders()).forEach((value, key) => {
      headersRecord[key] = value;
    });

    this.config = {
      ...this.config,
      headers: headersRecord,
    };
  }

  private setCookies(): void {
    const cookies = this.request.getCookies();
    if (!cookies || Object.keys(cookies).length === 0) {
      return;
    }

    // Serialize cookies as a Cookie header
    const cookieString = Object.entries(cookies)
      .map(([key, value]) => `${key}=${value}`)
      .join('; ');

    this.config = {
      ...this.config,
      headers: {
        ...this.config.headers,
        Cookie: cookieString,
      },
    };
  }

  private setTimeout(): void {
    this.config = {
      ...this.config,
      timeout: this.request.config.timeoutMs,
    };
  }
}
