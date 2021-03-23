import validateInput from './validateInput';

describe('Test amount and price validation', () => {
  it('Error - amount less than price', async () => {
    const data = validateInput('10', '9');
    expect(data).toEqual('Please enter an amount greater than price. ');
  });

  it('Success', async () => {
    const data = validateInput('9', '10');
    expect(data).toEqual('');
  });
});
