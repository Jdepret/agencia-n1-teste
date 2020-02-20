
$(document).ready(function(){
    

$('.icone-menu').on('click',function(){
    $('.dropdown').toggleClass('submenu');
})

$(window).on('resize',function(){

    if($(window).width() < 767){
        $('.produtos-destaque').addClass('slide-produto');
    }
})


})
console.log()