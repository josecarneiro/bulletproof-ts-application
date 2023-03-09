import { Transaction } from '../../parsers';
import { OutboundTransactionItem } from './OutboundTransactionItem';
import { InboundTransactionItem } from './InboundTransactionItem';
import { ExchangeTransactionItem } from './ExchangeTransactionItem';
import { unreachable } from '../../utils/unreachable';

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
    case 'exchange':
      return <ExchangeTransactionItem transaction={transaction} />;
    default:
      unreachable(transaction);
  }
};

export default TransactionItem;
