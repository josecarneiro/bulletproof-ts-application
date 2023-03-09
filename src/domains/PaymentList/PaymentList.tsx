import { List } from '../../elements';
import { Payment } from '../../types';
import { PaymentItem } from '../PaymentItem';

type PaymentListProps = { payments: Payment[] };

export const PaymentList = ({ payments }: PaymentListProps) => (
  <List>
    {payments.map((payment) => (
      <PaymentItem key={payment.id} payment={payment} />
    ))}
  </List>
);

export default PaymentList;
