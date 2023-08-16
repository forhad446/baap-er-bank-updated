function getInputValue(inputVal) {
    const inputValue_str = document.getElementById(inputVal);
    const inputValue = parseFloat(inputValue_str.value);
    if (isNaN(inputValue)) {
        alert('something else try again later');
        inputValue_str.value = '';
        return false;
    } else if (inputValue < 0) {
        alert('minimum withdraw/deposit is required');
        inputValue_str.value = '';
        return false;
    } else {
        inputValue_str.value = '';
        return inputValue;
    }
}
function getCurrentAmount(currentBalance) {
    const currentAmount_str = document.getElementById(currentBalance);
    const currentAmount = parseFloat(currentAmount_str.innerText);
    return currentAmount;
}
function setValue(elementId, newValue) {
    const currentAmount = document.getElementById(elementId);
    currentAmount.innerText = newValue;
}