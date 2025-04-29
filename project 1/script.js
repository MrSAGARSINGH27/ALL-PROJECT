let signUpBtn = document.querySelector('.signupBtn');
let signInBtn = document.querySelector('.signinBtn');
let nameField = document.querySelector('.namefield');
let title = document.querySelector('.title');
let underline = document.querySelector('.underline');
let text = document.querySelector('.text');

signInBtn.addEventListener('click',()=>{
    nameField.style.maxHeight = '0';
    title.innerHTML = 'sign In';
    text.innerHTML = 'Lost Password';
    signUpBtn.classList.add('disable');
    signInBtn.classList.remove('disable');
    underline.style.transform = 'translateX(35px)';
})
signUpBtn.addEventListener('click',()=>{
    nameField.style.maxHeight = '60px';
    title.innerHTML = 'sign Up';
    text.innerHTML = 'Password Suggestions';
    signUpBtn.classList.remove('disable');
    signInBtn.classList.add('disable');
    underline.style.transform = 'translateX(0)';
})