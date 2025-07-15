import { Environment } from './http/environment';
import { SdkConfig } from './http/types';
import { SignplusService } from './services/signplus';

export * from './services/signplus';

export * from './http';
export { Environment } from './http/environment';

export class Signplus {
  public readonly signplus: SignplusService;

  constructor(public config: SdkConfig) {
    this.signplus = new SignplusService(this.config);
  }

  set baseUrl(baseUrl: string) {
    this.signplus.baseUrl = baseUrl;
  }

  set environment(environment: Environment) {
    this.signplus.baseUrl = environment;
  }

  set timeoutMs(timeoutMs: number) {
    this.signplus.timeoutMs = timeoutMs;
  }

  set token(token: string) {
    this.signplus.token = token;
  }
}

// c029837e0e474b76bc487506e8799df5e3335891efe4fb02bda7a1441840310c
