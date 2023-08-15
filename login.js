// step-1: add click event handler with the submit button
document.getElementById("btn-submit").addEventListener("click", function () {
  // step-2:get the email address inside the email input field
//   always remember to use .value to get text from an input field
 const emailField = document.getElementById('user-email');
 const email = emailField.value;
//  console.log(email);
//  step-3: get password
// a. set id on the html element
// get the element
// get the value from the element

const passwordField = document.getElementById('user-password');
const password = passwordField.value;
// console.log(password);

// danger: do not verify email password on the client site
// step-4: verify email and password to check valid or not 
if(email === 'sontan@gmail.com' && password === 'secret'){
   window.location.href = 'bank.html'
}
else{
    alert('invalid user')
}
});
