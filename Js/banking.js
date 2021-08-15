function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmmountText = inputField.value;
    const ammountValue = parseFloat(inputAmmountText);
    //clear input field
    inputField.value = '';
    return ammountValue;
}

function updateTotalField(totalFieldId, ammount) {
    // debugger;
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotalText = parseFloat(totalText);
    totalElement.innerText = previousTotalText + ammount;
}

function updateBalance(ammount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + ammount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - ammount;
    }
}

document.getElementById('deposit-button').addEventListener('click', function () {

    // const inputField = document.getElementById('deposit-input');
    // const inputAmmountText = inputField.value;
    // const ammountValue = parseFloat(inputAmmountText);


    //get and update deposit total
    /*     const depositTotal = document.getElementById('deposit-total');
        const depositTotalText = depositTotal.innerText;
        const previousDepositTotalText = parseFloat(depositTotalText);
    
        depositTotal.innerText = previousDepositTotalText + ammountValue; */


    //update balance

    /*     const balanceTotal = document.getElementById('balance-total');
        const balanceTotalText = balanceTotal.innerText;
        const previousBalanceTotal = parseFloat(balanceTotalText);
        balanceTotal.innerText = previousBalanceTotal + depositAmmount; */
    const depositAmmount = getInputValue('deposit-input');
    updateTotalField('deposit-total', depositAmmount);
    updateBalance(depositAmmount, true);
});

//handle withdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {

    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmmountText = withdrawInput.value;
    // const withdrawAmmount = parseFloat(withdrawAmmountText);



    //get and update withdraw total
    /*   const withdrawTotal = document.getElementById('withdraw-total');
      const withdrawTotalText = withdrawTotal.innerText;
      const previousWithdrawTotalText = parseFloat(withdrawTotalText);
      withdrawTotal.innerText = withdrawAmmount + previousWithdrawTotalText; */


    //update balance after withdraw
    /*   const balanceTotal = document.getElementById('balance-total');
      const balanceTotalText = balanceTotal.innerText;
      const previousBalanceTotal = parseFloat(balanceTotalText);
  
      balanceTotal.innerText = previousBalanceTotal - withdrawAmmount; */
    const withdrawAmmount = getInputValue('withdraw-input');
    updateTotalField('withdraw-total', withdrawAmmount)
    updateBalance(withdrawAmmount, false);


})