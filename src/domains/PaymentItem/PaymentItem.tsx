import { Avatar, Cell, Box, Column, Text } from '../../elements';
import { PaymentInbound } from '../../parsers';
import { Payment, PaymentOutbound } from '../../types';
import { unreachable } from '../../utils/unreachable';
import { formatPrice } from '../../utils/formatPrice';

export const InboundPaymentItem = ({
  payment
}: {
  payment: PaymentInbound;
}) => (
  <Cell>
    <Avatar name={payment.name} />
    <Box>
      <Text>
        From <strong>{payment.name}</strong>
      </Text>
    </Box>
    <Text className="text-green-500 ml-auto">
      +{formatPrice(payment.value)}
    </Text>
  </Cell>
);

export const OutboundPaymentItem = ({
  payment
}: {
  payment: PaymentOutbound;
}) => (
  <Cell>
    <Avatar name={payment.name} />
    <Column>
      <Text>
        To <strong>{payment.name}</strong>
      </Text>
      <small>
        <i>{payment.reason}</i>
      </small>
    </Column>
    <Text className="text-rose-500 ml-auto">-{formatPrice(payment.value)}</Text>
  </Cell>
);

export const PaymentItem = ({ payment }: { payment: Payment }) => {
  switch (payment.type) {
    case 'inbound':
      return <InboundPaymentItem payment={payment} />;
    case 'outbound':
      return <OutboundPaymentItem payment={payment} />;
    default:
      return unreachable(payment);
  }
};

export default PaymentItem;
