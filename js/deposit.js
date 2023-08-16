// diposit button clicked 
document.getElementById('deposti-btn').addEventListener('click', function(){

    // set deposit amount 
    const inputDeposit = getIdnputAmonut('deposit-input');
    if(inputDeposit >= 0){
        const previousDeposit = getPreviousAmonut('deposit-amonut');
        const previousDepositAmountID = getPreviousAmountID('deposit-amonut');
        const totalDepositAmount = inputDeposit + previousDeposit;
        previousDepositAmountID.innerText = totalDepositAmount;
    }else{
        alert('Please input possitive amount');
    }
  

    // set balance amonut 
    if(inputDeposit >= 0){
    const previousBalance = getPreviousAmonut('balance-amonut');
    const previousbalanceAmountID = getPreviousAmountID('balance-amonut');
    const totalBalanceAmount = inputDeposit + previousBalance;
    previousbalanceAmountID.innerText = totalBalanceAmount;
} 
})