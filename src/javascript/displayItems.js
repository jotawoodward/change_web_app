import displayImage from './displayImage';

export default function displayItems(data) {
  // TODO use a map to preserrve order
  // const output = Object.entries(data).map(item => displayImage(item)).join('\n');
  let output = '';
  for (const x in data) {
    output += displayImage(x, data[x]);
  }

  return output;
}
