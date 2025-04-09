import { clients } from "../clients/load.js";

const input = document.querySelector('input');
const searchBar = document.querySelector('form');
const form = document.querySelector('form');

// Filled focused input
input.oninput = (event) => {
  const textValue = event.target.value;

  if (textValue !== '') {
    searchBar.classList.add('filled');
  } else {
    searchBar.classList.remove('filled');
  }
}


form.onsubmit = async (event) => {
  event.preventDefault();

  const selectedId = input.value;

  clients({ id: selectedId })

  input.value = '';
}