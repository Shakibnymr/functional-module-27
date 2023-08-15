console.log('withdraw file')













// // add event handler with the withdraw button
// /*
// 1.get the withdraw amount from the withdraw input field.
// 2.get the withdraw amount from the withdraw input field
// 2.a: also make sure to convert the input into a number using parseFloat
// 3.get previous withdraw total
// 4.calculate total withdraw amount
// 4.a: set total withdraw amount
// 5.clear the input field
// 6.get the previous balance total
// 6.a: calculate new balance total
// 7.set the new balance total
// */ 
// // step-1
// document.getElementById('btn-withdraw').addEventListener('click',function(){
//     // step-2
//     const withdrawField = document.getElementById('withdraw-field');
//     const newWithdrawAmountString = withdrawField.value ;
//     const newWithdrawAmount = parseFloat(newWithdrawAmountString);
//     // step-3
//     const withdrawTotalElement = document.getElementById('withdraw-total');
//     const previousWithdrawTotalString = withdrawTotalElement.innerText;
//     const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

//     // step-4
//     const currentWithTotal = newWithdrawAmount + previousWithdrawTotal;
//     withdrawTotalElement.innerText = currentWithTotal;

//     // step 
//     const balanceTotalElement = document.getElementById('main-balance');
//     const previousBalanceTotalString = balanceTotalElement.innerText; 
//     const previousBalanceTotal = parseFloat(previousBalanceTotalString);
// // step
// const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
// balanceTotalElement.innerText = newBalanceTotal;

//     // step
//     withdrawField.value = '';
// })