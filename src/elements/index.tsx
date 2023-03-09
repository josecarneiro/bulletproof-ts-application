import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { clsx } from '../utils/clsx';
import { randomValueFromSeed } from '../utils/randomValueFromSeed';
import { extractNameInitials } from '../utils/extractNameInitials';

export const Wrapper = ({
  className,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => (
  <div
    className={clsx('bg-slate-100 h-screen py-4 text-slate-900', className)}
    {...props}
  />
);

export const Container = ({
  className,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => (
  <div className={clsx('max-w-2xl mx-auto h-full', className)} {...props} />
);

export const List = ({
  className,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => (
  <div className={clsx('flex flex-col gap-4', className)} {...props} />
);

export const Cell = ({
  className,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => (
  <div
    className={clsx(
      'flex gap-4 items-center bg-white p-4 rounded-lg',
      className
    )}
    {...props}
  />
);

export const Box = ({
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => (
  <div {...props} />
);

export const Column = ({
  className,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => (
  <div className={clsx('flex flex-col', className)} {...props} />
);

export const Avatar = ({
  className,
  name,
  ...props
}: Omit<
  DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>,
  'children'
> & {
  name: string;
}) => (
  <span
    className={clsx(
      'inline-flex p-4 text-lg w-12 h-12 items-center justify-center rounded-full',
      className
    )}
    style={{
      backgroundColor: `hsla(${randomValueFromSeed(name) * 360}, 100%, 85%, 1)`,
      color: `hsla(${randomValueFromSeed(name) * 360}, 90%, 25%, 1)`
    }}
    {...props}
  >
    {extractNameInitials(name)}
  </span>
);

const PaymentIcon = ({
  className,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>) => (
  <span
    className={clsx(
      'inline-flex font-mono text-sm rounded-full w-6 h-6 text-white items-center justify-center',
      className
    )}
    {...props}
  />
);

export const InboundPaymentIcon = () => (
  <PaymentIcon className="bg-green-400">⬇</PaymentIcon>
);

export const OutboundPaymentIcon = () => (
  <PaymentIcon className="bg-rose-400">⬆</PaymentIcon>
);

export const LoadingSpinner = () => (
  <div className="animate-spin rounded-full h-20 w-20 border-2 border-transparent border-b-slate-300"></div>
);

export const FullSizeBox = ({
  className,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => (
  <div
    className={clsx(
      'flex items-center justify-center h-full w-full',
      className
    )}
    {...props}
  />
);

export const Text = ({
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>) => (
  <span {...props} />
);
