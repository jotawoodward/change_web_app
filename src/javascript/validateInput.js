import validateField from './validateField';
export default function validateInput (price, amount) {

  let error;
  error = validateField(price);
  error = validateField(amount);
  if ( parseFloat(amount) -parseFloat(price) <= 0 )
  {
    error= `Please enter an amount greater than price`
  }
  return error;

}
