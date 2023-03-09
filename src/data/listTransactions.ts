import { Transactions } from '../parsers';
import { pause } from '../utils/pause';

/* Mock fetch to always respond with Transactions data as a Transactions list endpoint would */
const fetch = async (..._args: any[]) => ({
  json: async () => (await import('./transactions.json')).default as any
});

export const listTransactions = async () => {
  await pause(1000);
  const result = await fetch('/api/transactions/list');
  /* Type as unknown instead of default any */
  const transactionsData = (await result.json()) as unknown;
  return transactionsData;
};
