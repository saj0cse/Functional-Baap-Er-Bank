
    // get input amount function 
    function getIdnputAmonut (inputAmount){
        const depositInput = document.getElementById(inputAmount);
        const depositInputString = depositInput.value;
        const depositInputValue = parseFloat(depositInputString);
        depositInput.value = '';
        return depositInputValue;
        
    }
   
    // get previous amonut function
    function getPreviousAmonut (previousAmount){
        const previousValue = document.getElementById(previousAmount);
        const previousValueString = previousValue.innerText;
        const TotalAmount = parseFloat(previousValueString);
        return TotalAmount;
    }

    // get previous amonut id function
    function getPreviousAmountID(previousAmountID){
            const previousValuesID = document.getElementById(previousAmountID);
            return previousValuesID;
    }



