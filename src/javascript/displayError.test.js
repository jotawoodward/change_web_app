import displayError from './displayError';

describe('Test fragment', () => {

  it('Display error', async () => {
    const message = ["message"];
    const fragment = await displayError(message);
    expect(fragment).toContain(`<div>${message}</div>`);
  });

});