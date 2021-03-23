export default function validateField(field) {
  if (Number.isNaN(Number(field)) || parseFloat(field) <= 0.0 || field === '') {
    return 'Please enter valid values';
  }
  if (parseFloat(field) > parseFloat(field).toFixed(2)) {
    return 'Please enter values with no more than 2 decimal places';
  }
  return null;
}
