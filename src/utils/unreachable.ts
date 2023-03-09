import { log } from './logger';

export const unreachable = (value: never): never => {
  const error = new TypeError(
    'Reached impossible state: ' + JSON.stringify(value)
  );
  log(error);
  throw error;
};
