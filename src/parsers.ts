import { z } from 'zod';

const MoneySchema = z.object({
  amount: z.number(),
  currency: z.string()
});

const TransactionCommonSchema = z.object({
  id: z.string(),
  name: z.string(),
  value: MoneySchema
});

const TransactionInboundSchema = TransactionCommonSchema.extend({
  type: z.literal('inbound')
});

const TransactionOutboundSchema = TransactionCommonSchema.extend({
  type: z.literal('outbound'),
  reason: z.string()
});

export const TransactionSchema = z.union([
  TransactionInboundSchema,
  TransactionOutboundSchema
]);

export const TransactionListSchema = z.array(TransactionSchema);

export type Money = z.infer<typeof MoneySchema>;
export type TransactionCommon = z.infer<typeof TransactionCommonSchema>;
export type TransactionInbound = z.infer<typeof TransactionInboundSchema>;
export type TransactionOutbound = z.infer<typeof TransactionOutboundSchema>;
export type Transaction = z.infer<typeof TransactionSchema>;

// The above helps us avoid having to declare these types manually:

// export type Money = {
//   amount: number;
//   currency: string;
// };

// export type TransactionCommon = {
//   id: string;
//   name: string;
//   value: Money;
// };

// export type TransactionInbound = TransactionCommon & {
//   type: 'inbound';
// };

// export type TransactionOutbound = TransactionCommon & {
//   type: 'outbound';
//   reason: string;
// };

// export type Transaction = TransactionInbound | TransactionOutbound;
