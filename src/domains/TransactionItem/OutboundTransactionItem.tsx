import { Avatar, Cell, Column, Text } from '../../elements';
import { TransactionOutbound } from '../../types';
import { formatPrice } from '../../utils/formatPrice';

export const OutboundTransactionItem = ({
  transaction
}: {
  transaction: TransactionOutbound;
}) => (
  <Cell>
    <Avatar name={transaction.name} />
    <Column>
      <Text>
        To <strong>{transaction.name}</strong>
      </Text>
      <small>
        <i>{transaction.reason}</i>
      </small>
    </Column>
    <Text className="text-rose-500 ml-auto">
      -{formatPrice(transaction.value)}
    </Text>
  </Cell>
);
