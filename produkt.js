const URLparams = new URLSearchParams(window.location.search);
const id = URLparams.get("id");
console.log(id);

const url = `https://kea-alt-del.dk/t7/api/products/${id}`;

function findProdukt() {
  fetch(url)
    .then((res) => res.json)
    .then(visProdukt);
}

function visProdukt(produkt) {
  document.querySelector();
}
