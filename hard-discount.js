function getInnerText(inputId){
    const getId = document.getElementById(inputId);
    const getIdString = getId.innerText;
    const getIdNumber = parseFloat(getIdString);
    return getIdNumber;
}
function getValue(inputId){
    const getId = document.getElementById(inputId);
    const getIdString = getId.value;
    // const getIdNumber = parseFloat(getIdString);
    getId.value = ' ';
    return getIdString;
}
function setTextElementValueById (elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
    }


    document.getElementById('btn-apply').addEventListener('click', function(){
const couponNumber = getValue('ref');
if(couponNumber === 'DISC30'){
    const givenPrice = getInnerText('price'); 
    const discountedPrice = givenPrice - ((givenPrice*30)/100);
    const payMoney = getInnerText('pay');
    setTextElementValueById('pay', discountedPrice);
}

       else{
        alert('invalid coupon number')
       }

    })