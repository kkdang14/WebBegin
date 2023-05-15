// Người viết: Kim Khánh Đăng-B2113306
// Tham khảo: Youtube, w3school.com 

headerbars = document.querySelector(".header-bars");
headerbars.onclick = function(){
    headernav = document.querySelector(".header-nav");
    headernav.classList.toggle("active");
}