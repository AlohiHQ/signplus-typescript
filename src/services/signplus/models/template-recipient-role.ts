import { z } from 'zod';

export enum TemplateRecipientRole {
  SIGNER = 'SIGNER',
  RECEIVES_COPY = 'RECEIVES_COPY',
  IN_PERSON_SIGNER = 'IN_PERSON_SIGNER',
}
