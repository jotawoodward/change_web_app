import validateField from './validateField';

describe('Test field validation', () => {

  it('Error - non number', async () => {
    const data = validateField("bar");
    expect(data).toEqual(`Please enter valid values`);
  });

  it('Error - negative number', async () => {
    const data = validateField("-1");
    expect(data).toEqual(`Please enter valid values`);
  });

  it('Error - blank', async () => {
    const data = validateField("");
    expect(data).toEqual(`Please enter valid values`);
  });

  it('Success', async () => {
    const data = validateField("3");
    expect(data).toEqual(undefined);
  });

});