// diposit button clicked 
document.getElementById('withdraw-btn').addEventListener('click', function(){

    // set deposit amount 
    const inputWithdraw = getIdnputAmonut('withdraw-input');
    if(inputWithdraw >= 0){
        const previousWithdraw  = getPreviousAmonut('withdraw-amonut');
        const previousWithdrawAmountID = getPreviousAmountID('withdraw-amonut');
        const totalDepositAmount = inputWithdraw + previousWithdraw;
        previousWithdrawAmountID.innerText = totalDepositAmount;
    }else{
        alert('Please input possitive amount');
    }
  

    // set balance amonut 
    if(inputWithdraw >= 0){
    const previousBalance = getPreviousAmonut('balance-amonut');
    const previousbalanceAmountID = getPreviousAmountID('balance-amonut');
    if(previousBalance >= inputWithdraw){
        const totalBalanceAmount = previousBalance - inputWithdraw;
        previousbalanceAmountID.innerText = totalBalanceAmount;
    } else{
        alert("Oree Nobaber pola, tor baper thaka too lagbe ato taka!!")
    }
    }
   
})