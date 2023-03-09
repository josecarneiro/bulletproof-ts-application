export const randomValueFromSeed = (seed: string) =>
  (seed
    .split('')
    .map((char) => char.charCodeAt(0))
    .reduce((acc, charCode) => acc + charCode, 0) %
    100) /
  100;
