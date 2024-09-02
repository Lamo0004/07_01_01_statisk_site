fetch("https://kea-alt-del.dk/t7/api/products?limit=50")
  .then((svar) => svar.json())
  .then(visProdukter); //Der kunne også have stået: .then((data) => visProdukter(data))

function visProdukter(produkter) {
  //Looper og kalder visProdukt
  produkter.forEach(visProdukt); //Der kunne også have stået: produkter.forEach(produkt => visProdukt(produkt))
}

function visProdukt(produkt) {
  //   console.log(produkt);
  //Fange template
  const skabelon = document.querySelector("#produktSkabelon").content;
  //Laver kopir
  kopi = skabelon.cloneNode(true);
  //Ændre indhold
  kopi.querySelector("h3").textContent = produkt.productdisplayname;
  kopi.querySelector(".type").textContent = produkt.articletype;
  kopi.querySelector(".brand").textContent = produkt.brandname;
  kopi.querySelector(".pris").textContent = produkt.price;
  //   kopi.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${produkt.id}.webp;`;
  // document.querySelector("img").alt = `Image of ${json.productdisplayname}`;
  if (produkt.soldout) {
    //produkt er udsolgt. JavaScript ved at 1 er sandt og 0 er falsk
    kopi.querySelector("article").classList.add("udsolgt");
  }
  //Appende
  document.querySelector(".produktliste").appendChild(kopi);
}
/*
 <article class="produkt">
                    <a href="produkt.html"><img src="img/1550.webp" alt="Bold"></a>
                    <h3>Gul Puma T4000 bold</h3>
                    <p class="undertitel"> Bold | Puma</p>
                    <p class="pris"> DKK 399</p>
                    <a class="rm" href="produkt.html">Read More</a>
                </article>
*/
/*{
  "id": 1163,
  "gender": "Men",
  "category": "Apparel",
  "subcategory": "Topwear",
  "articletype": "Tshirts",
  "season": "Summer",
  "productionyear": 2011,
  "usagetype": "Sports",
  "productdisplayname": "Sahara Team India Fanwear Round Neck Jersey",
  "price": 895,
  "discount": null,
  "brandname": "Nike",
  "soldout": 0
}*/
