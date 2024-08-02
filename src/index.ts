import { Environment } from './http/environment';
import { SdkConfig } from './http/types';
import { SignplusService } from './services/signplus';

export * as Signplus from './services/signplus';

export class Signplus {
  public readonly signplus: SignplusService;

  constructor(public config: SdkConfig) {
    const baseUrl = config.environment || config.baseUrl || Environment.DEFAULT;
    this.config = {
      ...config,
      baseUrl,
    };
    this.signplus = new SignplusService(this.config);
  }

  set baseUrl(baseUrl: string) {
    this.signplus.baseUrl = baseUrl;
  }

  set environment(environment: Environment) {
    this.signplus.baseUrl = environment;
  }

  set timeout(timeout: number) {
    this.signplus.timeout = timeout;
  }

  set token(token: string) {
    this.signplus.token = token;
  }
}

// c029837e0e474b76bc487506e8799df5e3335891efe4fb02bda7a1441840310c
