import { Avatar, Cell, Box, Text } from '../../elements';
import { TransactionInbound } from '../../parsers';
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
