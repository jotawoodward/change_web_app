import calcChange from './calcChange';

export default function addListeners() {
  document.getElementById('submitPost').addEventListener('click', calcChange);

}
