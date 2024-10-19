const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");


function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
  const currencyValueConverted = document.querySelector(".currency-value");
  
  

  const dolarToday = 5.2;
  const euroToday = 6.2;
  const libraToday = 7.41;
 
  

  if (currencySelect.value == "dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday);
  }

  if (currencySelect.value == "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euroToday);
  }

  if (currencySelect.value == "libra") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue / libraToday);
  }


  currencyValueToConvert.innerHTML = new Intl.NumberFormat ( "pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue)
  

}


convertButton.addEventListener("click", convertValues);
currencySelect.addEventListener("change", changeCurrency);

function changeCurrency () {
   const currencyName = document.getElementById("currency-name");
   const currencyImg = document.querySelector(".currency-img");
   

   if (currencySelect.value == "dolar") {
      currencyName.innerHTML = "Dólar Americano"
      currencyImg.src = "./assets/img-eua.png"
   }

   if (currencySelect.value == "euro") {
      currencyName.innerHTML = "Euro"
      currencyImg.src = "./assets/img-euro.png"
   }

   if (currencySelect.value == "libra") {
    currencyName.innerHTML = "Libra"
    currencyImg.src = "./assets/img-libra.png"
 }

   convertValues()
}


