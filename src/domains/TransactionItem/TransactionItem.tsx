import { Transaction } from '../../parsers';
import { unreachable } from '../../utils/unreachable';
import { OutboundTransactionItem } from './OutboundTransactionItem';
import { InboundTransactionItem } from './InboundTransactionItem';

export const TransactionItem = ({
  transaction
}: {
  transaction: Transaction;
}) => {
  switch (transaction.type) {
    case 'inbound':
      return <InboundTransactionItem transaction={transaction} />;
    case 'outbound':
      return <OutboundTransactionItem transaction={transaction} />;
    default:
      return unreachable(transaction);
  }
};

export default TransactionItem;
