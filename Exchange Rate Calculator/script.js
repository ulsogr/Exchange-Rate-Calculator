const currency_one = document.getElementById("currency-one");
const currency_two = document.getElementById("currency-two");
const amount_one = document.getElementById("amount-one");
const amount_two = document.getElementById("amount-two");
const rate = document.getElementById("rate");
const rate_btn = document.getElementById("rate-btn");
function calculate() {
  // fetch("item.json").then((res) =>
  //   res.json().then((data) => console.log(data))
  // );

  fetch(
    "https://v6.exchangerate-api.com/v6/1c10aa866456c6e8c38375b7/latest/" +
      currency_one.value
  )
    .then((res) => res.json())
    .then((data) => {
      amount_two.value = (
        amount_one.value * data.conversion_rates[currency_two.value]
      ).toFixed(2);

      rate.textContent =
        "1 " +
        currency_one.value.toString() +
        " = " +
        data.conversion_rates[currency_two.value].toFixed(2).toString() +
        " " +
        currency_two.value;
    });
}

amount_one.addEventListener("change", calculate);
rate_btn.addEventListener("click", calculate);
