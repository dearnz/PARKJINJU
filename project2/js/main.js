$(document).ready(function(){
    /* 모바일 햄버거바 메뉴 */
    $("ul.mn_nav_sub").hide();
    $('.mn_main_menu > li').hover(function(){
        $(this).children(".mn_nav_sub").show();
        },function(){
        $(this).children(".mn_nav_sub").hide();
      });
    /* bxslider */
    $(window).resize(function (){
        if ($(window).width() > 768){
            $('.main_img').removeClass('slider');
        } else {
            $('.main_img').removeClass('m_slider');
        }
    });
    $('.slider').bxSlider({
        pager:true,
        controls:true,
        auto:true,
        mode:'fade',
    });

    $('.m_slider').bxSlider({
        pager:true,
        controls:true,
        auto:true,
        mode:'fade',
        slideWidth: 480,
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
    /* con1 */
    $('.m_con1_b').slick({
        autoplay:false,
        dots:false,
        arrows:false,
        slidesToShow:1,
        slidesToScroll : 1,
    });
    
    /* 동영상 재생 */
    $(".con3").hover(
        function(){
            $(".bgvideo").css("opacity","0.3");
        },//버튼위에 마우스를 올렸을때 실행문
        function(){
            $(".bgvideo").css("opacity","0");
        }//버튼위에 마우스를 올린 상태에서 버튼 밖으로 나갈때 실행문
    );
}); /*제이쿼리 끝*/