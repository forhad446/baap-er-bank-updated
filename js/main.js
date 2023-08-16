const dbEmail = "forhad@khan.com";
const dbPwd = "forhad";
// take the button for clicked & excuted the program
const btn = document.getElementById('btn-submit');
btn.addEventListener('click',function(){
    // take the user email from input box
    const userEmail_str = document.getElementById("userEmail");
    const userEmail = userEmail_str.value;
    // take the user password from input box
    const userPwd_str = document.getElementById('userPwd');
    const userPwd = userPwd_str.value;

    // check the validation for getting access
    if(dbEmail === userEmail && dbPwd === userPwd){
        window.location.href = 'bank.html';
    }else{
        alert('Password or Email is incorrect')
    }
})
