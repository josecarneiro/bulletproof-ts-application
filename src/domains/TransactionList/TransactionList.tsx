import { List } from '../../elements';
import { Transaction } from '../../parsers';
import { TransactionItem } from '../TransactionItem';

type TransactionListProps = { transactions: Transaction[] };

export const TransactionList = ({ transactions }: TransactionListProps) => (
  <List>
    {transactions.map((transaction) => (
      <TransactionItem key={transaction.id} transaction={transaction} />
    ))}
  </List>
);

export default TransactionList;
