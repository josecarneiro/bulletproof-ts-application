import { pause } from '../utils/pause';

/* Mock fetch to always respond with payments data as a payments list endpoint would */
const fetch = async (..._args: any[]) => ({
  json: async () => (await import('./payments.json')).default as any
});

export const listPayments = async () => {
  await pause(1000);
  const result = await fetch('/api/payments/list');
  /* Type as unknown instead of default any */
  const paymentsData = (await result.json()) as unknown;
  return paymentsData;
};
