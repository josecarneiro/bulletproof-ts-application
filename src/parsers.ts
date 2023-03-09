import { z } from 'zod';

const MoneySchema = z.object({
  amount: z.number(),
  currency: z.string()
});

const PaymentCommonSchema = z.object({
  id: z.string(),
  name: z.string(),
  value: MoneySchema
});

const PaymentInboundSchema = PaymentCommonSchema.extend({
  type: z.literal('inbound')
});

const PaymentOutboundSchema = PaymentCommonSchema.extend({
  type: z.literal('outbound'),
  reason: z.string()
});

export const PaymentSchema = z.union([
  PaymentInboundSchema,
  PaymentOutboundSchema
]);

export const PaymentListSchema = z.array(PaymentSchema);

export type Money = z.infer<typeof MoneySchema>;
export type PaymentCommon = z.infer<typeof PaymentCommonSchema>;
export type PaymentInbound = z.infer<typeof PaymentInboundSchema>;
export type PaymentOutbound = z.infer<typeof PaymentOutboundSchema>;
export type Payment = z.infer<typeof PaymentSchema>;

// The above helps us avoid having to declare these types manually:

// export type Money = {
//   amount: number;
//   currency: string;
// };

// export type PaymentCommon = {
//   id: string;
//   name: string;
//   value: Money;
// };

// export type PaymentInbound = PaymentCommon & {
//   type: 'inbound';
// };

// export type PaymentOutbound = PaymentCommon & {
//   type: 'outbound';
//   reason: string;
// };

// export type Payment = PaymentInbound | PaymentOutbound;
