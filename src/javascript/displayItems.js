export default async function displayItems(data) {
  // QUESTION: Alternatives to using HTML fragments like this?
  const output = data.map((item, i) => `
    <div>
      <input type="checkbox" id="${i}">
      <label for="${i}" id="item-${i}">${item}</label>
    </div>
  `).join('\n');
  return data;

};