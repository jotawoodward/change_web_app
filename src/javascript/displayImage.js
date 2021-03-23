const images = {
  0.01: 'src/assets/1p-one-penny-coin.png',
  0.02: 'src/assets/2p-two-penny-coin.png',
  0.05: 'src/assets/5p-five-penny-coin.png',
  0.1: 'src/assets/10p-ten-penny-coin.png',
  0.2: 'src/assets/20p-twenty-penny-coin.png',
  0.5: 'src/assets/50p-fifty-penny-coin.png',
  1: 'src/assets/1-one-pound-coin.png',
  2: 'src/assets/2-two-pound-coin.png',
  5: 'src/assets/5-five-pound-note.png',
  10: 'src/assets/10-ten-pound-note.png',
  20: 'src/assets/20-twenty-pound-note.png',
  50: 'src/assets/50-fifty-pound-note.png',
};
const alt = {
  0.01: '1p',
  0.02: '2p',
  0.05: '5p',
  0.1: '10p',
  0.2: '20p',
  0.5: '50p',
  1: '£1',
  2: '£2',
  5: '£5',
  10: '£10',
  20: '£20',
  50: '£50',
};
export default function displayImage(x, data) {
  if (data > 0) {
    const y = `
    <div class="container">
      <img src=${images[x]} alt=${alt[x]}>
      <label>x ${data}</label>
    </div>`;
    return y;
  }
  return '';
}
