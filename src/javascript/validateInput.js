import validateField from './validateField';

export default function validateInput(price, amount) {
  const name = ['price', 'amount'];
  let error = [price, amount].map((i, j) => validateField(i, name[j])).join('');
  if (Number(amount) - Number(price) <= 0) {
    error += 'Please enter an amount greater than price. ';
  }
  return error;
}
