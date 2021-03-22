export default function validateField(field) {
  if (Number.isNaN(Number(field)) || parseFloat(field) <= 0.0 || field === '') {
    return 'Please enter valid values';
  }
  // TODO check  2dp
  return null;
}
