const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click",() => {
    document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click",() => 
    menuOpenButton.click());

//Initializa Swiper
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 25,

    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
    },
      
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView:1
        },
        768: {
            slidesPerView:2
        },
        1024: {
            slidesPerView:3
        }
    }
});

document.getElementById("emailForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
let message = document.getElementById("message").value;
let gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=info@cansuanimasyon.com&su=Talep/Teklif/Bilgi Talebi&body=${encodeURIComponent(message)}`;
      
window.open(gmailLink, "_blank"); // Yeni sekmede Gmail'i açar
});