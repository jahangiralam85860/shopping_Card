// document.getElementById('case-minus').addEventListener('click',
// function () {
//     const caseInput = document.getElementById('case-number');
//     const caseNumber = caseInput.value;
//     caseInput.value = parseInt(caseNumber) + 1;
// });
// document.getElementById('case-plus').addEventListener('click', function () {
//     const caseInput = document.getElementById('case-number');
//     const caseNumber = caseInput.value;
//     caseInput.value = parseInt(caseNumber) - 1;
// });


function updateCaseNumber(product, price,isIncreasing) {
    const caseInput = document.getElementById(product + '-number');
    let caseNumber = caseInput.value;
    if (isIncreasing == true) {
        caseNumber = parseInt(caseNumber) + 1;
    }
    else if (caseNumber > 0) { 
        caseNumber = parseInt(caseNumber) - 1;
    }
    caseInput.value = caseNumber;
    // Update case total input
    const castTotal = document.getElementById(product + '-total');
    castTotal.innerText = caseNumber * price;
    //  sub total tax total trice call
    calculateTotal();
}

function getInputValue(product) {
    const phoneInput = document.getElementById(product +'-number');
    const phoneNumber = parseInt(phoneInput.value);
    return phoneNumber;
}
function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1220;
    const caseTotal  = getInputValue('case') * 100;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    // update on the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}


// phone increase decrease event
document.getElementById('phone-plus').addEventListener('click', function () {
    updateCaseNumber('phone', 1200,true);
});
document.getElementById('phone-minus').addEventListener('click', function () {
    updateCaseNumber('phone', 1200,false);
});

// handle case increase decrease events
document.getElementById('case-plus').addEventListener('click', function () {
    updateCaseNumber('case', 100, true);
});
document.getElementById('case-minus').addEventListener('click', function () {
    updateCaseNumber('case',100,false);
});

const love = document.getElementById