const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://kea-alt-del.dk/t7/api/products/" + id)
  .then((svar) => svar.json())
  .then((data) => visProdukt(data));

function visProdukt(produkt) {
  console.log(produkt);
  document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${produkt.id}.webp`;
  document.querySelector(".grid_1-1-1 h2").textContent = produkt.productdisplayname;
  document.querySelector(".grid_1-1-1 .type").textContent = produkt.articletype;
  document.querySelector(".grid_1-1-1 .brand").textContent = produkt.brandname;
  document.querySelector(".grid_1-1-1 .pris").textContent = produkt.price;
  document.querySelector(".info .season").textContent = produkt.season;
  document.querySelector(".info .farve").textContent = produkt.basecolour;
  document.querySelector(".info .aar").textContent = produkt.productionyear;

  // Hvis produktet er udsolgt
  if (produkt.soldout) {
    document.querySelector("img").classList.add("udsolgtImg");
    document.querySelector(".grid_1-1-1").classList.add("udsolgtTekst");
    document.querySelector("button").classList.add("no-hover");
  }

  // Hvis produktet er på tilbud
  if (produkt.discount) {
    document.querySelector(".grid_1-1-1").classList.add("tilbudForm");
    document.querySelector(".tilbudForm .nuTekst span").textContent = Math.round(produkt.price - (produkt.price * produkt.discount) / 100);
    document.querySelector(".tilbudForm .procentLabel span").textContent = produkt.discount;
  }
}
