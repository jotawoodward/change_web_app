import validateField from './validateField';

describe('Test field validation', () => {
  it('Error - non number', async () => {
    const data = validateField('bar', 'bob');
    expect(data).toEqual('Please enter valid value for bob. ');
  });

  it('Error - negative number', async () => {
    const data = validateField(-1, 'bob');
    expect(data).toEqual('Please enter valid value for bob. ');
  });

  it('Error - Nan', async () => {
    const data = validateField(NaN, 'bob');
    expect(data).toEqual('Please enter valid value for bob. ');
  });

  it('Error - zero', async () => {
    const data = validateField(0, 'bob');
    expect(data).toEqual('Please enter valid value for bob. ');
  });

  it('Error - excess dp', async () => {
    const data = validateField(3.3333, 'bob');
    expect(data).toEqual('Please enter values with no more than 2 decimal places. ');
  });

  it('Success', async () => {
    const data = validateField(3.35, 'bob');
    expect(data).toEqual('');
  });
});
