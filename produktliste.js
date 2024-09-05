const urlParams = new URLSearchParams(document.location.search);
const category = urlParams.get("category");
let url = undefined;

//Hvis der bliver klikket på en kategori, laver den en url med dette. Ellers så tager den tage url products
if (urlParams.has("category")) {
  url = `https://kea-alt-del.dk/t7/api/products?category=${category}`;
} else {
  url = "https://kea-alt-del.dk/t7/api/products";
}

fetch(url)
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
  kopi.querySelector(".pris span").textContent = produkt.price;
  // Hvis produktet er udsolgt
  if (produkt.soldout) {
    //JaveScript ved at 1 er sandt og 0 er sandt
    kopi.querySelector("article").classList.add("udsolgt");
  }
  // Hvis produktet er på tilbud
  if (produkt.discount) {
    //JaveScript ved at alt andet end null er sandt
    kopi.querySelector("article").classList.add("tilbud");
    kopi.querySelector(".tilbud .nuTekst span").textContent = Math.round(produkt.price - (produkt.price * produkt.discount) / 100);
    kopi.querySelector(".tilbud .procentLabel span").textContent = produkt.discount;
  }
  //Ændre Read More link
  kopi.querySelector(".rm").setAttribute("href", `produkt.html?id=${produkt.id}`);
  //Ændre IMG link
  kopi.querySelector(".img_link").setAttribute("href", `produkt.html?id=${produkt.id}`);
  //Appende til DOM'en
  document.querySelector("main").appendChild(kopi);
}
