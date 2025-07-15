import { z } from 'zod';

export enum RecipientVerificationType {
  SMS = 'SMS',
  PASSCODE = 'PASSCODE',
  ID_VERIFICATION = 'ID_VERIFICATION',
}
