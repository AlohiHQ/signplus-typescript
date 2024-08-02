import { Signplus } from '@alohi/signplus-typescript';

(async () => {
  const signplus = new Signplus({
    token: 'YOUR_TOKEN',
  });

  const { data } = await signplus.signplus.getEnvelope('envelope_id');

  console.log(data);
})();
