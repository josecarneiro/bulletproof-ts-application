import { z } from 'zod';

export const MoneySchema = z.object({
  amount: z.number(),
  currency: z.string()
});

export const TransactionCommonSchema = z.object({
  id: z.string()
});

export const TransactionInboundSchema = TransactionCommonSchema.extend({
  name: z.string(),
  value: MoneySchema,
  type: z.literal('inbound')
});

export const TransactionOutboundSchema = TransactionCommonSchema.extend({
  name: z.string(),
  value: MoneySchema,
  type: z.literal('outbound'),
  reason: z.string()
});

export const TransactionExchangeSchema = TransactionCommonSchema.extend({
  type: z.literal('exchange'),
  from: MoneySchema,
  to: MoneySchema
});

export const TransactionSchema = z.union([
  TransactionInboundSchema,
  TransactionOutboundSchema,
  TransactionExchangeSchema
]);

export const TransactionsSchema = z.array(TransactionSchema);

// Infer types from schemas

export type Money = z.infer<typeof MoneySchema>;
export type TransactionCommon = z.infer<typeof TransactionCommonSchema>;
export type TransactionInbound = z.infer<typeof TransactionInboundSchema>;
export type TransactionOutbound = z.infer<typeof TransactionOutboundSchema>;
export type TransactionExchange = z.infer<typeof TransactionExchangeSchema>;
export type Transaction = z.infer<typeof TransactionSchema>;
export type Transactions = z.infer<typeof TransactionsSchema>;
