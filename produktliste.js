fetch("https://kea-alt-del.dk/t7/api/products?limit=50")
  .then((svar) => svar.json())
  .then(visProdukter); //Kunne også have set sådan ud: (data) => visProdukter(data)

function visProdukter(produkter) {
  // Looper og kalder funktionen visProdukt
  produkter.forEach(visProdukt); //Kunne også have set sådan ud: (produkt) => visProdukt(produkt)
}

function visProdukt(produkt) {
  console.log(produkt);
  //Fanger template
  const skabelon = document.querySelector("#skabelon").content;
  //Laver kopi
  const kopi = skabelon.cloneNode(true); //Laver en kopi af article og tager børnene med
  //Ændre indhold
  kopi.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${produkt.id}.webp`;
  kopi.querySelector("h3").textContent = produkt.productdisplayname;
  kopi.querySelector(".type").textContent = produkt.articletype;
  kopi.querySelector(".brand").textContent = produkt.brandname;
  kopi.querySelector(".pris").textContent = produkt.price;
  // Hvis produktet er udsolgt
  if (produkt.udsolgt) {
    //JaveScript ved at 1 er sandt og 0 er sandt
    kopi.querySelector("article").classList.add("udsolgt");
  }
  // Hvis produktet er på tilbud
  if (produkt.paaTilbud) {
    //JaveScript ved at 1 er sandt og 0 er sandt
    kopi.querySelector("article").classList.add("paaTilbud");
  }
  //Ændre Read More link
  kopi.querySelector(".rm").setAttribute("href", `produkt.html?id=${produkt.id}`);
  //Appende til DOM'en
  document.querySelector("main").appendChild(kopi);
}
