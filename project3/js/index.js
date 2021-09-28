$(document).ready(function(){
    /**nav**/
    $(".nav_sub").hide();
    $('ul.main_menu li').hover(function(){
        $("ul", this).show();
    },function(){
        $("ul", this).hide();
    });
    /**m_nav**/
    $(window).resize(function (){
        if ($(window).width() > 768){
            $('#m_nav').hide();
        } else {
            $('#m_nav').show();
        }
    });
    $(".mn_main_menu").hide();
    $(".toggle").click(function(){
        $(".mn_main_menu").slideToggle();
    });
    $("#m_nav ul.mn_nav_sub").hide();
    $('div.sn_title').click(function(){
        $("ul",this).slideToggle("fast");
    });

    var current;
    $(".mn_nav_sub").hide();
    $(".sn_title").click(function () {
        $(this).next(".mn_nav_sub").slideToggle("fast");
    });
    // $("ul.mn_nav_sub").hide();
    // $(".sn_title").click(
    //     function(){
    //     $("ul.mn_nav_sub").hide();
    //     $(this).next(".ul.mn_nav_sub").slideDown();
    // });
    /**메인슬라이드**/
    $('#main_s').slick({
        autoplay:true,
        autoplaySpeed:5000,
        dots:false,
    });
    /**탭메뉴**/
    $('ul.tabs li').click(function() { 
        var tab_id = $(this).attr('data-tab');
        $('ul.tabs li').removeClass('t_color');
        $('.tab-con').removeClass('t_show');
        $(this).addClass('t_color');
        $("#"+tab_id).addClass('t_show');
    });
    /**con3슬라이드**/
    $('.con3').slick({
        autoplay:true,
        autoplaySpeed:3000,
        dots:true,
        arrows:false,
        slidesToShow:3,
        slidesToScroll : 3,
        responsive:[
            {breakpoint: 768,
                settings: {
                    slidesToShow: 1.12, 
                    slidesToScroll: 1,
                    dots:false,
                }
            }
        ]
    });
    /**con4슬라이드**/
    $('.autoplay').slick({
        slidesToShow: 4.2,
        slidesToScroll: 1,
        autoplay: true,
        arrows:false,
        autoplaySpeed: 1200,
        draggable : true,
        responsive:[
            {breakpoint: 768,
                settings: {
                    slidesToShow: 1.7, 
                    slidesToScroll: 1,
                    dots:false,
                }
            }
        ]
    });
  });