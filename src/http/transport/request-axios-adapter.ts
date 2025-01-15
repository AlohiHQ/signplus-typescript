import { HttpError } from '../error';
import { HttpMetadata, HttpResponse } from '../types';
import { LineDecoder } from '../utils/line-decoder';
import { Request } from './request';
import axios, { AxiosRequestConfig, AxiosResponse, isAxiosError } from 'axios';

export interface HttpAdapter {
  send(): Promise<HttpResponse>;
}

export class RequestAxiosAdapter<T> implements HttpAdapter {
  private config: AxiosRequestConfig = {};

  constructor(private request: Request) {
    this.setHeaders();
    this.setTimeout();
  }

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
      raw: response.data.buffer.slice(response.data.byteOffset, response.data.byteOffset + response.data.byteLength),
    };
  }

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
      if (this.request.method === 'POST' || this.request.method === 'PUT' || this.request.method === 'PATCH') {
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

  private getMethod(): (url: string, data?: any, config?: AxiosRequestConfig) => Promise<AxiosResponse> {
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

  private setTimeout(): void {
    this.config = {
      ...this.config,
      timeout: this.request.config.timeoutMs,
    };
  }
}
