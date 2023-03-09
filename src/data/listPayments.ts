import { pause } from '../utils/pause';

export const listPayments = async () => {
  await pause(1000);
  /* Mimick the data being loaded through the network and type the response body as unknown */
  const paymentsData = (await import('./payments.json')).default as unknown;
  return paymentsData;
};
