import { useEffect, useState } from 'react';
import { listTransactions } from './data/listTransactions';
import { ErrorInformation } from './domains/ErrorInformation';
import { LoadingInformation } from './domains/LoadingInformation';
import { TransactionList } from './domains/TransactionList';
import { Container, Wrapper, Title } from './elements';
import { Transaction, TransactionsSchema } from './parsers';
import { log } from './utils/logger';

function App() {
  const [transactions, setTransactions] = useState<
    | {
        data: Transaction[];
        error: null;
        loading: false;
      }
    | {
        data: null;
        error: Error;
        loading: false;
      }
    | {
        data: null;
        error: null;
        loading: boolean;
      }
  >({
    data: null,
    error: null,
    loading: false
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setTransactions({ data: null, error: null, loading: true });
        const transactionsData = await listTransactions();
        const parsedTransactionsData =
          TransactionsSchema.parse(transactionsData);
        setTransactions({
          data: parsedTransactionsData,
          error: null,
          loading: false
        });
      } catch (error) {
        log('Error loading data');
        setTransactions({
          data: null,
          error: error instanceof Error ? error : new Error('Unknown error'),
          loading: false
        });
      }
    };
    fetchData();
  }, []);

  return (
    <Wrapper>
      <Container>
        <Title>Latest Transactions</Title>
        {(transactions.loading && <LoadingInformation />) ||
          (transactions.error && <ErrorInformation />) ||
          (transactions.data && (
            <TransactionList transactions={transactions.data} />
          ))}
      </Container>
    </Wrapper>
  );
}

export default App;
