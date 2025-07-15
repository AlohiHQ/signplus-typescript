# RecipientVerificationType

Type of verification the recipient must complete before accessing the envelope. - `PASSCODE`: requires a code to be entered. - `SMS`: sends a code via SMS. - `ID_VERIFICATION`: prompts the recipient to complete an automated ID and selfie check.

**Properties**

| Name            | Type   | Required | Description       |
| :-------------- | :----- | :------- | :---------------- |
| SMS             | string | ✅       | "SMS"             |
| PASSCODE        | string | ✅       | "PASSCODE"        |
| ID_VERIFICATION | string | ✅       | "ID_VERIFICATION" |
