import validateInput from './validateInput';
import displayError from './displayError';
import changeRequest from './changeRequest';
import displayItems from './displayItems';
 
export default async function calcChange(e) {

  e.preventDefault();
  const price = document.getElementById('price').value;
  const amount = document.getElementById('amount').value;

  // Validate
  let error = validateInput(price, amount);
  if (!!error) {
    document.getElementById('calc-error').innerHTML = await displayError(error);
    return;
  }

  // Call api to get change
  let response;
  try {
    response = await changeRequest(parseFloat(price), parseFloat(amount))
  } 
  finally { 
    if (!response.success) 
      {
        document.getElementById('calc-error').innerHTML = await displayError("Sorry an error has occured. Please try again later");
        return;
      }
  }

  // Display results
  const output = displayItems(response.data)
  document.getElementById('results').innerHTML = output;
}
