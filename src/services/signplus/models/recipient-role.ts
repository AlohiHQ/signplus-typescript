import { z } from 'zod';

export enum RecipientRole {
  SIGNER = 'SIGNER',
  RECEIVESCOPY = 'RECEIVES_COPY',
  INPERSONSIGNER = 'IN_PERSON_SIGNER',
}
