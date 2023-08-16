function getInnerText(inputId){
    const getId = document.getElementById(inputId);
    const getIdString = getId.innerText;
    const getIdNumber = parseFloat(getIdString);
    return getIdNumber;
}
function getValue(inputId){
    const getId = document.getElementById(inputId);
    const getIdString = getId.value;
    const getIdNumber = parseFloat(getIdString);
    getId.value = ' ';
    return getIdNumber;
}
function setTextElementValueById (elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
    }


    document.getElementById('btn-apply').addEventListener('click', function(){
        const givenPrice = getValue('price');
        const discountedPrice = givenPrice - ((givenPrice*30)/100);
        const payMoney = getInnerText('pay');
        setTextElementValueById('pay', discountedPrice);

    })