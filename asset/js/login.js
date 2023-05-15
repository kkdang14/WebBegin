// Người viết: Kim Khánh Đăng-B2113306
// Tham khảo: Youtube, w3school.com 

const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

loginLink.addEventListener('click',  ()=> {
    wrapper.classList.add('active');
});

registerLink.addEventListener('click',  ()=> {
    wrapper.classList.remove('active');
});


