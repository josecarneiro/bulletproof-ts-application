import { Transaction } from '../../types';
import { OutboundTransactionItem } from './OutboundTransactionItem';
import { InboundTransactionItem } from './InboundTransactionItem';

export const TransactionItem = ({
  transaction
}: {
  transaction: Transaction;
}) => {
  return (
    (transaction.type === 'inbound' && (
      <InboundTransactionItem transaction={transaction} />
    )) ||
    (transaction.type === 'outbound' && (
      <OutboundTransactionItem transaction={transaction} />
    ))
  );
};

export default TransactionItem;
