import { Signplus } from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const data = await signplus.envelopeId.deleteEnvelope('envelope_id');

  console.log(data);
})();
