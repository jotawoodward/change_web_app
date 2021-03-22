export default function validateField (field) {

  if ( isNaN(field) || parseFloat(field) <= 0.0 || field === '' )
  {
    return `Please enter valid values`
  }

  return;

}
