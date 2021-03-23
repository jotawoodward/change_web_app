export default async function changeRequest(price, amount) {
  // constants
  const url = 'http://localhost:5000/calc-change';
  const headers = {
    'Content-type': 'application/json',
  };
  const result = {
    data: null,
    success: false,
  };
  const options = {
    method: 'POST',
    headers,
    body: JSON.stringify({
      amount,
      price,
    }),
  };

  // validation
  if (!price) { return result; }
  if (!amount) { return result; }

  let response;
  try {
    response = await fetch(url, options);
    result.success = true;
  } catch {
    return result;
  }
  try {
    result.data = await response.json();
  } catch {
    result.success = false;
  }

  // TODO reverse order result.data
  return result;
}
