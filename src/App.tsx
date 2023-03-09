import { useEffect, useState } from 'react';
import { listPayments } from './data/listPayments';
import { ErrorInformation } from './domains/ErrorInformation';
import { LoadingInformation } from './domains/LoadingInformation';
import { PaymentList } from './domains/PaymentList';
import { Container, Wrapper, Text, Title } from './elements';
import { Payment, PaymentListSchema } from './parsers';
import { log } from './utils/logger';

function App() {
  const [payments, setPayments] = useState<
    | {
        data: Payment[];
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
        setPayments({ data: null, error: null, loading: true });
        const paymentsData = await listPayments();
        const parsedPaymentsData = PaymentListSchema.parse(paymentsData);
        setPayments({
          data: parsedPaymentsData,
          error: null,
          loading: false
        });
      } catch (error) {
        log('Error loading data');
        setPayments({
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
        <Title>Latest Payments</Title>
        {(payments.loading && <LoadingInformation />) ||
          (payments.error && <ErrorInformation />) ||
          (payments.data && <PaymentList payments={payments.data} />)}
      </Container>
    </Wrapper>
  );
}

export default App;
