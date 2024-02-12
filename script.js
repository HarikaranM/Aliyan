$(document).ready(function(){

    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('nav').toggleClass('nav-toggle');

    });
    $('.i33').click(function(){
        $(this).next('.i44').slideToggle();
        $(this).next('.fa-caret').toggleClass('rotate');
        
    });
});