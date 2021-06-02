$('.menu-anchor').on('click touchstart', function(e){
    $('html').toggleClass('menu-acitve');
    e.preventDefault();
});