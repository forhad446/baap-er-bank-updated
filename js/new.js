const input_field = document.getElementById('input_field');

document.getElementById('boldText').addEventListener('click', function () {
    input_field.classList.toggle('bold');
});
document.getElementById('italicText').addEventListener('click', function () {
    input_field.classList.toggle('italic');
})
document.getElementById('textUnderline').addEventListener('click', function () {
    input_field.classList.toggle('underline');
})
document.getElementById('text-left').addEventListener('click', function () {
    input_field.classList.remove('text-center');
    input_field.classList.remove('text-right');
    input_field.classList.add('text-left');
})
document.getElementById('text-center').addEventListener('click', function () {
    input_field.classList.remove('text-left');
    input_field.classList.remove('text-right');
    input_field.classList.add('text-center');
})
document.getElementById('text-right').addEventListener('click', function () {
    input_field.classList.remove('text-left');
    input_field.classList.remove('text-center');
    input_field.classList.add('text-right');
})
// font size 
document.getElementById('fontSize').addEventListener('keyup',function(event){
    const inputVal = event.target.value;
    input_field.style.fontSize = inputVal+'px';
})
// change Color
document.getElementById('changeColor').addEventListener('change',function(event){
    const inputVal = event.target.value;
    input_field.style.color = inputVal;
})