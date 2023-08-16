const btn_withdraw = document.getElementById('btn-withdraw');
btn_withdraw.addEventListener('click',function(){
    const withdrawMoney = getInputValue('withdrawMoney');
    const current_withdraw_amount = getCurrentAmount('current_withdraw_amount');
    const currentTotalAmount = getCurrentAmount('current_total_amount');

    const newWithdrawAmount = current_withdraw_amount + withdrawMoney;
    setValue('current_withdraw_amount',newWithdrawAmount);

    const newTotalAmount = currentTotalAmount - withdrawMoney;
    setValue('current_total_amount',newTotalAmount)
})