import { log } from './logger';

export const unreachable = (value: never): never => {
  const error = new TypeError('IMPOSSIBLE STATE: ' + JSON.stringify(value));
  log(error);
  throw error;
};
