/* This mimicks a logging service */
export const log = (...data: any[]) =>
  console.log('MOCK LOGGING SERVICE', 'background: #222; color: #fff', ...data);
