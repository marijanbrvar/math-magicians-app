import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  const one = Big(numberOne || '0');
  const two = Big(numberTwo || (operation === '÷' || operation === 'x' ? '1' : '0'));
  if (operation === '+') {
    return one.plus(two).toString();
  }
  if (operation === '-') {
    return one.minus(two).toString();
  }
  if (operation === 'x') {
    return one.times(two).toString();
  }
  if (operation === '÷') {
    if (two.toString() === '0') return 'n/a';
    return one.div(two).toString();
  }
  if (operation === '%') {
    return one.mod(two).toString();
  }
  throw Error(`Unknown operation '${operation}'`);
}
