import { Request } from '../transport/request';
import { HttpResponse, RequestHandler } from '../types';
import { SerializationStyle } from '../serialization/base-serializer';

export class AuthHandler implements RequestHandler {
  next?: RequestHandler;

  async handle<T>(request: Request<T>): Promise<HttpResponse<T>> {
    const requestWithAuth = this.addAccessTokenHeader(request);

    if (!this.next) {
      throw new Error(`No next handler set in ${AuthHandler.name}`);
    }

    return this.next?.handle(requestWithAuth);
  }

  private addAccessTokenHeader<T>(request: Request<T>): Request<T> {
    const { token } = request.config;
    if (!token) {
      return request;
    }

    request.addHeaderParam('Authorization', {
      key: 'Authorization',
      value: `Bearer ${token}`,
      explode: false,
      encode: false,
      style: SerializationStyle.SIMPLE,
    });

    return request;
  }
}
