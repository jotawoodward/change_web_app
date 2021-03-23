import displayImage from './displayImage';

describe('Test fragment', () => {
  it('Display image', async () => {
    const fragment = displayImage(0.1, 5);
    expect(fragment).toContain(`
      <img src=src/assets/10p-ten-penny-coin.png alt=10p>
      <label>x 5</label>`);
  });

  it('No image', async () => {
    const fragment = displayImage(0.1, 0);
    expect(fragment).toEqual('');
  });
});
