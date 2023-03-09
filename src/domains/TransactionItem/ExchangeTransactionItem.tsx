import { Avatar, Cell, Box, Text, Column } from '../../elements';
import { TransactionExchange } from '../../parsers';
import { formatPrice } from '../../utils/formatPrice';

export const ExchangeTransactionItem = ({
  transaction
}: {
  transaction: TransactionExchange;
}) => (
  <Cell>
    <Box>
      <Text>Exchange</Text>
    </Box>
    <Column>
      <Text className="text-rose-500 ml-auto">
        -{formatPrice(transaction.from)}
      </Text>
      <Text className="text-green-500 ml-auto">
        +{formatPrice(transaction.to)}
      </Text>
    </Column>
  </Cell>
);
