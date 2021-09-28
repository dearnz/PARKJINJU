$(document).ready(function(){
    /* 모바일 햄버거바 메뉴 */
    $("ul.mn_nav_sub").hide();
    $('.mn_main_menu > li').hover(function(){
        $(this).children(".mn_nav_sub").show();
        },function(){
        $(this).children(".mn_nav_sub").hide();
      });
     /* 상단 메뉴 고정 */
     var $header = $('header');
     $(window).scroll(function(){
         if($(this).scrollTop() > 0){
             $header.addClass('sticky');
         }else{
             $header.removeClass('sticky');
         }
     });
});