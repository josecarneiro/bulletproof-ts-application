import { List } from '../../elements';
import { Transactions } from '../../types';
import { TransactionItem } from '../TransactionItem';

type TransactionListProps = { transactions: Transactions };

export const TransactionList = ({ transactions }: TransactionListProps) => (
  <List>
    {transactions.map((transaction) => (
      <TransactionItem key={transaction.id} transaction={transaction} />
    ))}
  </List>
);

export default TransactionList;
