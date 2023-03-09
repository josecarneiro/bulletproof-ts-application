export const formatPrice = ({
  amount,
  currency
}: {
  amount: number;
  currency: string;
}) =>
  Intl.NumberFormat('en-US', { style: 'currency', currency }).format(
    amount / 100
  );
