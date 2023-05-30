window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const amountPay = document.querySelector("input#loan-amount");
  amountPay.value = 10000;
  const yearsPay = document.querySelector("input#loan-years");
  yearsPay.value = 5;
  const ratePay = document.querySelector("input#loan-rate");
  ratePay.value = 50;
  const totalValues = {
    amount: amountPay.value,
    years: yearsPay.value,
    rate: ratePay.value,
  }
  const defaultPayment = calculateMonthlyPayment(totalValues);
  return updateMonthly(defaultPayment);
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  dataValues = getCurrentUIValues();
  paymentString = calculateMonthlyPayment(dataValues);
  return updateMonthly(paymentString);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let p = values.amount;
  let i = (values.rate / 12) * .01;
  let n = values.years * 12 ;
  let topHalf = p * i;
  let botHalf = 1 - ((1+i)**-n);
  let total = (topHalf/botHalf).toFixed(2);
  return total.toString()
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthDisplay = document.getElementById("monthly-payment");
  monthDisplay.innerText = `$${monthly}`;
}
