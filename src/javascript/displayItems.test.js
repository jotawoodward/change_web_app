import displayItems from './displayItems';

const data = {
  0.01: 0,
  0.02: 1,
  0.05: 0,
  0.1: 0,
  0.2: 1,
  0.5: 0,
  1: 0,
  2: 0,
  5: 0,
  10: 0,
  20: 2,
  50: 0,
};
describe('Test fragments', () => {
  it('Display image', async () => {
    const fragment = await displayItems(data);
    expect(fragment).toEqual(`
    <div>
      <img src=../assets/20-twenty-pound-note.png alt=£20>
      <label>x 2</label>
    </div>
    <div>
      <img src=../assets/2p-two-penny-coin.png alt=2p>
      <label>x 1</label>
    </div>
    <div>
      <img src=../assets/20p-twenty-penny-coin.png alt=20p>
      <label>x 1</label>
    </div>`);
  });
});
