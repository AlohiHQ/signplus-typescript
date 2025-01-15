import { HttpError } from '../error';
import { Request } from '../transport/request';
import { HttpResponse, RequestHandler } from '../types';
import { RequestAxiosAdapter } from '../transport/request-axios-adapter';

export class TerminatingHandler implements RequestHandler {
  async handle<T>(request: Request): Promise<HttpResponse<T>> {
    return new RequestAxiosAdapter<T>(request).send();
  }

  async *stream<T>(request: Request): AsyncGenerator<HttpResponse<T>> {
    yield* new RequestAxiosAdapter<T>(request).stream();
  }
}
