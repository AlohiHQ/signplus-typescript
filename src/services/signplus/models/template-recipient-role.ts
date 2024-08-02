import { z } from 'zod';

export enum TemplateRecipientRole {
  SIGNER = 'SIGNER',
  RECEIVESCOPY = 'RECEIVES_COPY',
  INPERSONSIGNER = 'IN_PERSON_SIGNER',
}
