export type Money = {
  amount: number;
  currency: string;
};

export type TransactionCommon = {
  id: string;
  name: string;
  value: Money;
};

export type TransactionInbound = TransactionCommon & {
  type: 'inbound';
};

export type TransactionOutbound = TransactionCommon & {
  type: 'outbound';
  reason: string;
};

export type Transaction = TransactionInbound | TransactionOutbound;

export type Transactions = Transaction[];
