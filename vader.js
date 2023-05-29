let footer = document.querySelector(".footer");

let interruptor = document.querySelector(".interruptor");

let sabre = document.querySelector(".sabre-animacao");
let sabre_style = sabre.style; // Armazena a referência ao objeto CSSStyleDeclaration

//
let back_sabre_cor = document.querySelector(".back-sabre-color");
let back_sabre_cor_js = back_sabre_cor.style;
///
interruptor.addEventListener("click", function () {
  switch (
    sabre_style.display // Testa a propriedade display do objeto CSSStyleDeclaration
  ) {
    case "none":
      sabre_style.display = "block";
      break;

    case "block":
      sabre_style.display = "none";
      break;
  }
});

//sda
///
///
///

//});
////////
//CHANGE COLORS SABRE
////////
let blueradio = document.getElementById("blueradio");
let labelBlue = document.querySelector('label[for="blueradio"]');

let greenradio = document.getElementById("greenradio");
let labelGreen = document.querySelector('label[for="greenradio"]');
//
let yellowradio = document.getElementById("yellowradio");
let labelYellow = document.querySelector('label[for="yellowradio"]');
//
let purpleradio = document.getElementById("purpleradio");
let labelPurple = document.querySelector('label[for="purpleradio"]');
//
let redradio = document.getElementById("redradio");
let labelRed = document.querySelector('label[for="greenradio"]');
//
//
let whiteradio = document.getElementById("whiteradio");
let labelWhite = document.querySelector('label[for="whiteradio"]');
//
//
let indigoradio = document.getElementById("indigoradio");
let labelIndigo = document.querySelector('label[for="indigoradio"]');
//
//
let orangeradio = document.getElementById("orangeradio");
let labelOrange = document.querySelector('label[for="orangeradio"]');
//
//
labelBlue.addEventListener("click", function () {
  blueradio.click();
});

blueradio.addEventListener("change", function () {
  sabre_style.backgroundColor = "#00c3ff";

  sabre.classList.remove("sabre-animacao-red");
  sabre.classList.remove("sabre-animacao-purple");
  sabre.classList.remove("sabre-animacao-yellow");
  sabre.classList.remove("sabre-animacao-white");
  sabre.classList.remove("sabre-animacao-indigo");
  sabre.classList.remove("sabre-animacao-orange");
  sabre.classList.remove("sabre-animacao-green");
  sabre.classList.add("sabre-animacao");
  back_sabre_cor.classList.add("back-sabre-color");
  back_sabre_cor.classList.remove("back-sabre-color-green");
  back_sabre_cor.classList.remove("back-sabre-color-red");
  back_sabre_cor.classList.remove("back-sabre-color-yellow");
  back_sabre_cor.classList.remove("back-sabre-color-purple");
  back_sabre_cor.classList.remove("back-sabre-color-white");
  back_sabre_cor.classList.remove("back-sabre-color-indigo");
  back_sabre_cor.classList.remove("back-sabre-color-orange");
});
//
//
//
//
labelGreen.addEventListener("click", function () {
  greenradio.click();
});

greenradio.addEventListener("change", function () {
  sabre_style.backgroundColor = "#00ff2f";
  sabre.classList.remove("sabre-animacao");
  sabre.classList.remove("sabre-animacao-red");
  sabre.classList.remove("sabre-animacao-purple");
  sabre.classList.remove("sabre-animacao-yellow");
  sabre.classList.remove("sabre-animacao-white");
  sabre.classList.remove("sabre-animacao-indigo");
  sabre.classList.remove("sabre-animacao-orange");
  sabre.classList.add("sabre-animacao-green");
  back_sabre_cor.classList.add("back-sabre-color-green");
  back_sabre_cor.classList.remove("back-sabre-color");
  back_sabre_cor.classList.remove("back-sabre-color-red");
  back_sabre_cor.classList.remove("back-sabre-color-yellow");
  back_sabre_cor.classList.remove("back-sabre-color-purple");
  back_sabre_cor.classList.remove("back-sabre-color-white");
  back_sabre_cor.classList.remove("back-sabre-color-indigo");
  back_sabre_cor.classList.remove("back-sabre-color-orange");
});
//
//

//
//
labelYellow.addEventListener("click", function () {
  yellowradio.click();
});
yellowradio.addEventListener("change", function () {
  sabre_style.backgroundColor = "#f6fa05";
  sabre.classList.add("sabre-animacao-yellow");
  sabre.classList.remove("sabre-animacao");
  sabre.classList.remove("sabre-animacao-red");
  sabre.classList.remove("sabre-animacao-purple");
  sabre.classList.remove("sabre-animacao-white");
  sabre.classList.remove("sabre-animacao-indigo");
  sabre.classList.remove("sabre-animacao-orange");
  sabre.classList.remove("sabre-animacao-green");

  back_sabre_cor.classList.remove("back-sabre-color-green");
  back_sabre_cor.classList.remove("back-sabre-color");
  back_sabre_cor.classList.remove("back-sabre-color-red");
  back_sabre_cor.classList.add("back-sabre-color-yellow");
  back_sabre_cor.classList.remove("back-sabre-color-purple");
  back_sabre_cor.classList.remove("back-sabre-color-white");
  back_sabre_cor.classList.remove("back-sabre-color-indigo");
  back_sabre_cor.classList.remove("back-sabre-color-orange");
});

//
//
//
//

//
//
//
//
labelPurple.addEventListener("click", function () {
  purpleradio.click();
});
purpleradio.addEventListener("change", function () {
  sabre_style.backgroundColor = "#7048e8";
  sabre.classList.remove("sabre-animacao");
  sabre.classList.remove("sabre-animacao-red");
  sabre.classList.add("sabre-animacao-purple");
  sabre.classList.remove("sabre-animacao-yellow");
  sabre.classList.remove("sabre-animacao-green");
  sabre.classList.remove("sabre-animacao-white");
  sabre.classList.remove("sabre-animacao-indigo");
  sabre.classList.remove("sabre-animacao-orange");
  back_sabre_cor.classList.remove("back-sabre-color-green");
  back_sabre_cor.classList.remove("back-sabre-color");
  back_sabre_cor.classList.remove("back-sabre-color-red");
  back_sabre_cor.classList.remove("back-sabre-color-yellow");
  back_sabre_cor.classList.add("back-sabre-color-purple");
  back_sabre_cor.classList.remove("back-sabre-color-white");
  back_sabre_cor.classList.remove("back-sabre-color-indigo");
  back_sabre_cor.classList.remove("back-sabre-color-orange");
});
//
//
//
//
//
labelRed.addEventListener("click", function () {
  redradio.click();
});
redradio.addEventListener("change", function () {
  sabre_style.backgroundColor = "#e03131";
  sabre.classList.remove("sabre-animacao");
  sabre.classList.add("sabre-animacao-red");
  sabre.classList.remove("sabre-animacao-purple");
  sabre.classList.remove("sabre-animacao-yellow");
  sabre.classList.remove("sabre-animacao-green");
  sabre.classList.remove("sabre-animacao-white");
  sabre.classList.remove("sabre-animacao-indigo");
  sabre.classList.remove("sabre-animacao-orange");
  back_sabre_cor.classList.remove("back-sabre-color-green");
  back_sabre_cor.classList.remove("back-sabre-color");
  back_sabre_cor.classList.add("back-sabre-color-red");
  back_sabre_cor.classList.remove("back-sabre-color-yellow");
  back_sabre_cor.classList.remove("back-sabre-color-purple");
  back_sabre_cor.classList.remove("back-sabre-color-white");
  back_sabre_cor.classList.remove("back-sabre-color-indigo");
  back_sabre_cor.classList.remove("back-sabre-color-orange");
});
//
//
//
//
labelWhite.addEventListener("click", function () {
  whiteradio.click();
});
whiteradio.addEventListener("change", function () {
  sabre_style.backgroundColor = "#ffffff";
  sabre.classList.remove("sabre-animacao");
  sabre.classList.remove("sabre-animacao-red");
  sabre.classList.remove("sabre-animacao-purple");
  sabre.classList.remove("sabre-animacao-yellow");
  sabre.classList.remove("sabre-animacao-green");
  sabre.classList.add("sabre-animacao-white");
  sabre.classList.remove("sabre-animacao-indigo");
  sabre.classList.remove("sabre-animacao-orange");

  back_sabre_cor.classList.remove("back-sabre-color-green");
  back_sabre_cor.classList.remove("back-sabre-color");
  back_sabre_cor.classList.remove("back-sabre-color-red");
  back_sabre_cor.classList.remove("back-sabre-color-yellow");
  back_sabre_cor.classList.remove("back-sabre-color-purple");
  back_sabre_cor.classList.add("back-sabre-color-white");
  back_sabre_cor.classList.remove("back-sabre-color-indigo");
  back_sabre_cor.classList.remove("back-sabre-color-orange");
});
//
//
//
//
labelIndigo.addEventListener("click", function () {
  indigoradio.click();
});
indigoradio.addEventListener("change", function () {
  sabre_style.backgroundColor = "#364fc7";
  sabre.classList.remove("sabre-animacao");
  sabre.classList.remove("sabre-animacao-red");
  sabre.classList.remove("sabre-animacao-purple");
  sabre.classList.remove("sabre-animacao-yellow");
  sabre.classList.remove("sabre-animacao-green");
  sabre.classList.remove("sabre-animacao-white");
  sabre.classList.add("sabre-animacao-indigo");
  sabre.classList.remove("sabre-animacao-orange");

  back_sabre_cor.classList.remove("back-sabre-color-green");
  back_sabre_cor.classList.remove("back-sabre-color");
  back_sabre_cor.classList.remove("back-sabre-color-red");
  back_sabre_cor.classList.remove("back-sabre-color-yellow");
  back_sabre_cor.classList.remove("back-sabre-color-purple");
  back_sabre_cor.classList.remove("back-sabre-color-white");
  back_sabre_cor.classList.add("back-sabre-color-indigo");
  back_sabre_cor.classList.remove("back-sabre-color-orange");
});
//
//
//
//
//
labelOrange.addEventListener("click", function () {
  orangeradio.click();
});
orangeradio.addEventListener("change", function () {
  sabre_style.backgroundColor = "#e8590c";
  sabre.classList.remove("sabre-animacao");
  sabre.classList.remove("sabre-animacao-red");
  sabre.classList.remove("sabre-animacao-purple");
  sabre.classList.remove("sabre-animacao-yellow");
  sabre.classList.remove("sabre-animacao-green");
  sabre.classList.remove("sabre-animacao-white");
  sabre.classList.remove("sabre-animacao-indigo");
  sabre.classList.add("sabre-animacao-orange");

  back_sabre_cor.classList.remove("back-sabre-color-green");
  back_sabre_cor.classList.remove("back-sabre-color");
  back_sabre_cor.classList.remove("back-sabre-color-red");
  back_sabre_cor.classList.remove("back-sabre-color-yellow");
  back_sabre_cor.classList.remove("back-sabre-color-purple");
  back_sabre_cor.classList.remove("back-sabre-color-white");
  back_sabre_cor.classList.remove("back-sabre-color-indigo");
  back_sabre_cor.classList.add("back-sabre-color-orange");
});
