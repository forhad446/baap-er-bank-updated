const btn_deposit = document.getElementById('btn-deposit');
btn_deposit.addEventListener('click',function(){
    const depositMoney = getInputValue('depositMoney');
    const currentDepositAmount = getCurrentAmount('current_deposit_amount');
    const currentTotalAmount = getCurrentAmount('current_total_amount');
    
    const newDepositAmount = currentDepositAmount + depositMoney;
    setValue('current_deposit_amount',newDepositAmount)

    const newTotalAmount = currentTotalAmount + depositMoney;
    setValue('current_total_amount',newTotalAmount)
})