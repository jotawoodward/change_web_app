import displayImage from './displayImage';

export default function displayItems(data) {
  // TODO preserrve order
  const output = data.map((x) => displayImage(x.piece, x.number)).join('');
  return output;
}
