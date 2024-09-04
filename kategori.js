fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((svar) => svar.json())
  .then(visKategorier);

function visKategorier(kategorier) {
  kategorier.forEach(visKategori);
}

function visKategori(kategori) {
  //Fange template
  const skabelon = document.querySelector("template").content;
  //Clone
  const klon = skabelon.cloneNode(true);
  //Ændre indhold
  klon.querySelector("a").textContent = kategori.category;
  klon.querySelector("a").href = `produktliste.html?category=${kategori.category}`;
  //Appende
  document.querySelector("ul").appendChild(klon);
}
