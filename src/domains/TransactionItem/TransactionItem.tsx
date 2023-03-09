import { Avatar, Cell, Box, Column, Text } from '../../elements';
import { TransactionInbound } from '../../parsers';
import { Transaction, TransactionOutbound } from '../../parsers';
import { unreachable } from '../../utils/unreachable';
import { formatPrice } from '../../utils/formatPrice';

export const InboundTransactionItem = ({
  transaction
}: {
  transaction: TransactionInbound;
}) => (
  <Cell>
    <Avatar name={transaction.name} />
    <Box>
      <Text>
        From <strong>{transaction.name}</strong>
      </Text>
    </Box>
    <Text className="text-green-500 ml-auto">
      +{formatPrice(transaction.value)}
    </Text>
  </Cell>
);

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
