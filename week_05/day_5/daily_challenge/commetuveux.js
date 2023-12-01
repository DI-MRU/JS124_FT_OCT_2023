async function fetchCurrencies() {
  // Fetching the available/supported currencies
  return await fetch(
    "https://v6.exchangerate-api.com/v6/a6a94bb366742d9e679ecf8d/codes"
  ).then(async (resp) => {
    const result = await resp.json();
    return result.supported_codes;
  });
}

async function convertMonies(from, to, amount) {
  return await fetch(
    `https://v6.exchangerate-api.com/v6/a6a94bb366742d9e679ecf8d/pair/${from}/${to}/${amount}`
  ).then(async (resp) => {
    const result = await resp.json();
    return result.conversion_result;
  });
}

// Self invoking arrow function <-- Advanced advanced JS
(async () => {
  const currencies = await fetchCurrencies();
  console.log(currencies);

  const selectFromEl = document.getElementById("select-from");
  const selectToEl = document.getElementById("select-to");
  const currencyAmountEl = document.getElementById("currency-amount");
  const currencyConvertedEl = document.getElementById("currency-converted");

  for (let i = 0; i < currencies.length; i++) {
    // Create a new select option
    const newSelectOption = document.createElement("option");
    newSelectOption.value = currencies[i][0];
    newSelectOption.text = currencies[i][1];

    // Add the select option to the select
    selectFromEl.appendChild(newSelectOption);
  }

  for (let i = 0; i < currencies.length; i++) {
    // Create a new select option
    const newSelectOption = document.createElement("option");
    newSelectOption.value = currencies[i][0];
    newSelectOption.text = currencies[i][1];

    // Add the select option to the select
    selectToEl.appendChild(newSelectOption);
  }

  const submitBtnEl = document.getElementById("submit-btn");
  submitBtnEl.addEventListener("click", async (event) => {
    // Stop form from being submitted
    event.stopPropagation();
    event.preventDefault();

    const convertedAmount = await convertMonies(
      selectFromEl.value,
      selectToEl.value,
      currencyAmountEl.value
    );

    console.log(convertedAmount);
    currencyConvertedEl.value = `${convertedAmount} ${selectToEl.value}`;
  });

  const switchBtnEl = document.getElementById("switch-btn");
  switchBtnEl.addEventListener("click", async (event) => {
    // Stop form from being submitted
    event.stopPropagation();
    event.preventDefault();

    // Switch the currencies with each other
    const temporaryValue = selectFromEl.value;
    selectFromEl.value = selectToEl.value;
    selectToEl.value = temporaryValue;
  });
})();
