import { useEffect, useState } from 'react';
import { listTransactions } from './data/listTransactions';
import { ErrorInformation } from './domains/ErrorInformation';
import { LoadingInformation } from './domains/LoadingInformation';
import { TransactionList } from './domains/TransactionList';
import { Container, Wrapper, Title } from './elements';
import { Transactions, TransactionsSchema } from './parsers';
import { log } from './utils/logger';

function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [transactions, setTransactions] = useState<Transactions | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setTransactions(null);
        setError(null);
        setLoading(true);
        const transactionsData = await listTransactions();
        const parsedTransactions = TransactionsSchema.parse(transactionsData);
        setTransactions(parsedTransactions);
        setLoading(false);
      } catch (error) {
        log('Error loading data');
        setTransactions(null);
        setError(error instanceof Error ? error : new Error('Unknown error'));
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <Wrapper>
      <Container>
        <Title>Latest Transactions</Title>
        {(loading && <LoadingInformation />) ||
          (error && <ErrorInformation />) ||
          (transactions && <TransactionList transactions={transactions} />)}
      </Container>
    </Wrapper>
  );
}

export default App;
