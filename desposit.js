function getInputFieldValueById(inputId){
  const inputField = document.getElementById(inputId);
  const inputFieldValueString = inputField.value
  const inputFieldValue = parseFloat(inputFieldValueString) ;
  inputField.value = ' ';
  return inputFieldValue;

}
function getInputFieldInnerTextById(inputTextId){
  const inputField = document.getElementById(inputTextId);
  const inputFieldValueString = inputField.innerText
  const inputFieldValue = parseFloat(inputFieldValueString) ;
  
  return inputFieldValue;

}
function setTextElementValueById (elementId, newValue){
const textElement = document.getElementById(elementId);
textElement.innerText = newValue;
}

document.getElementById('btn-deposit').addEventListener('click',function(){
  const newDepositAmount = getInputFieldValueById('deposit-field');
  const previousDepositTotal = getInputFieldInnerTextById ('deposit-total');
  const newDepositTotal = newDepositAmount + previousDepositTotal;
  setTextElementValueById ('deposit-total', newDepositTotal);
  const mainBalance = getInputFieldInnerTextById('main-balance');
  const newTotalMainBalance = mainBalance + newDepositAmount;
  setTextElementValueById('main-balance', newTotalMainBalance );



})

 
















// // add click handler to the deposit button
// document.getElementById("btn-deposit").addEventListener("click", function () {
//   // get the deposit amount from the deposit input field
//   const depositField = document.getElementById("deposit-field");
//   const newDepositAmountString = depositField.value;
//   const newDepositAmount = parseFloat(newDepositAmountString);

//   // get the current deposit total
//   const depositTotalElement = document.getElementById("deposit-total");
//   const previousDepositTotalString = depositTotalElement.innerText;
//   const previousDepositTotal = parseFloat(previousDepositTotalString);

//   const currentDepositTotal = previousDepositTotal + newDepositAmount;
//   depositTotalElement.innerText = currentDepositTotal;

//   // get main balance : amar process
//   // const mainBalance = document.getElementById('main-balance');
//   // const mainBalanceString = mainBalance.innerText;
//   // const currentMainBalance = parseFloat(mainBalanceString);

//   // const newMainBalance = currentMainBalance + newDepositAmount;

//   // mainBalance.innerText = newMainBalance

//   // jhankar vaiyar process
//   const balanceTotalElement = document.getElementById("main-balance");
//   const previousBalanceTotalString = balanceTotalElement.innerText;
//   const previousBalanceTotal = parseFloat(previousBalanceTotalString);
//   //   calculate current total balance
//   const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
//   balanceTotalElement.innerText = currentBalanceTotal;

//   //   clear the deposit field
//   depositField.value = "";
// });
