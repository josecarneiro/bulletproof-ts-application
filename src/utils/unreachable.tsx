import { log } from './logger';

export const unreachable = (value: never): never => {
  log('UNREACHABLE_VALUE', value);
  throw new Error(`Unreachable value: ${value}`);
};
