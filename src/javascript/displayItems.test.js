import displayItems from './displayItems';

const data = [
  {
    number: 0,
    piece: 50,
  },
  {
    number: 2,
    piece: 20,
  },
  {
    number: 0,
    piece: 10,
  },
  {
    number: 0,
    piece: 5,
  },
  {
    number: 0,
    piece: 2,
  },
  {
    number: 0,
    piece: 1,
  },
  {
    number: 0,
    piece: 0.5,
  },
  {
    number: 1,
    piece: 0.2,
  },
  {
    number: 0,
    piece: 0.1,
  },
  {
    number: 0,
    piece: 0.05,
  },
  {
    number: 1,
    piece: 0.02,
  },
  {
    number: 0,
    piece: 0.01,
  },
];
describe('Test fragments', () => {
  it('Display image', async () => {
    const fragment = await displayItems(data);
    expect(fragment).toEqual(`
    <div class="container">
      <img src=src/assets/20-twenty-pound-note.png alt=£20>
      <label>x 2</label>
    </div>
    <div class="container">
      <img src=src/assets/20p-twenty-penny-coin.png alt=20p>
      <label>x 1</label>
    </div>
    <div class="container">
      <img src=src/assets/2p-two-penny-coin.png alt=2p>
      <label>x 1</label>
    </div>`);
  });
});
