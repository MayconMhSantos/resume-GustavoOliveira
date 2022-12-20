
$(document).ready(function(){

    // quando clicar no icon menu de navegação, ira remover
    // a classe menu e inserir o a classe do icon X de navegação.

    $('.fa-bars').click(function() { 
        $(this).toggleClass('fa-times');
        $('.nav-bar').toggleClass('nav-toggle');
    });

    // se clicar no icon do menu e abrir a navegação e mecher
    // no scroll automaticamente ira remover o menu e escondelo
    // voltando na possição start.

    $(window).on('scroll load', function(){
        $('.fa-bars').removeClass('fa-times');
        $('.nav-bar').removeClass('nav-toggle');
        




        // Quando o scroll não estiver na possição 0 ele vai remover
        // o border-radius e colocar um width de 100% colando no topo
        // da pagina quando a mesma não estiver mais na possição start.

        if($(window).scrollTop() > 30){
            $('header').addClass('header-active');
            }else{
                $('header').removeClass('header-active');
            }
    })
})



new TypeIt("#type1", {
    speed: 120,
    loop: true,
    waitUntilVisible: true,
})
.type("A mudança que você quer pode estar na decisão que você toma.", { delay: 800 })
.pause(1000)
.delete(60)
.type("Apaixone-se por cuidar de você mesmo.", { delay: 600 })
.pause(2000)
.delete()
.go();


 
var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      650: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
});



window.sc = ScrollReveal({ reset: true });

sc.reveal('.section-home-h2', { rotate: {
    x:0 , y:80, z:0
}, duration: 500 });

sc.reveal('.section-home-h1', 
{ rotate: { x:0 , y:80, z:0 },
 duration: 900 });

sc.reveal('#type1', { rotate: {
    x:0 , y:80, z:0
}, duration: 1200 });

sc.reveal('.about-txt-one', { rotate: {
    x:80 , y:0, z:0
}, duration: 1300 });

sc.reveal('.about-img-div', { rotate: {
    x:0 , y:80, z:0
}, duration: 1300 });

sc.reveal('.skill-items', { rotate: {
    x:10 , y:30, z:0
}, duration: 1300 });

sc.reveal('.card-plano', { rotate: {
    x:10 , y:30, z:0
}, duration: 1300 });

sc.reveal('.card-plano', { rotate: {
    x:10 , y:30, z:0
}, duration: 1300 });

sc.reveal('.hero-p', { rotate: {
    x:0 , y:80, z:0
}, duration: 1300 });

sc.reveal('.container-contact', { rotate: {
    x:0 , y:80, z:0
}, duration: 1300 });

sc.reveal('.li-icons', { rotate: {
    x:0 , y:80, z:0
}, duration: 2000 });



