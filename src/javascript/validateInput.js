import validateField from './validateField';

export default function validateInput(price, amount) {
  let error;
  error = validateField(price);
  error = validateField(amount);
  if (Number(amount) - Number(price) <= 0) {
    error = 'Please enter an amount greater than price';
  }
  return error;
}
