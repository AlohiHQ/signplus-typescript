import { z } from 'zod';

export enum EnvelopeStatus {
  DRAFT = 'DRAFT',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  EXPIRED = 'EXPIRED',
  DECLINED = 'DECLINED',
  VOIDED = 'VOIDED',
  PENDING = 'PENDING',
}
