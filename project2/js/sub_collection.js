$(document).ready(function(){
    var $header = $('header');
    $(window).scroll(function(){
        if($(this).scrollTop() > 0){
            $header.addClass('sticky');
        }else{
            $header.removeClass('sticky');
        }
    });
    /* 모바일 햄버거바 메뉴 */
    $("ul.mn_nav_sub").hide();
    $('.mn_main_menu > li').hover(function(){
        $(this).children(".mn_nav_sub").show();
        },function(){
        $(this).children(".mn_nav_sub").hide();
      });
    /*탭*/
    var tabAnchor = $('.s2_tab li a'),
        tabPanel = $('.tab_con');

    //링크를 클릭하면 할 일
    tabAnchor.click(function(e){
        e.preventDefault();

        tabAnchor.removeClass('active');
        tabPanel.removeClass('t_show');//모두빼고
        

        $(this).addClass('active');//그요소만 추가

        tabPanel.hide();

        var $target = $(this).attr('href');
        console.log($target);

        $('#'+$target).show();

        mySlider.reloadSlider();
        mySlider2.reloadSlider();

    });


    $('.tap-con-wrap').bxSlider({
        pager:true,
        controls:true,
        auto:true,
        mode:'fade',
        setPosition: 0,
        speed:2000
    });
    mySlider = $('.tap-con-wrap2').bxSlider({
        pager:true,
        controls:true,
        auto:true,
        mode:'fade',
        setPosition: 0,
    }); 
    mySlider2 = $('.tap-con-wrap3').bxSlider({
        pager:true,
        controls:true,
        auto:true,
        mode:'fade',
        setPosition: 0
    }); 

    $('.m_collection').bxSlider({
        pager:true,
        controls:true,
        auto:true,
        mode:'fade',
        setPosition: 0,
        speed:3000,
        touchEnabled:true,
    });
});

// s2_taps
// s2_tcontent
// $('ul.tabs li').click(function() { 

// //     var tab_id = $(this).attr('data-tab');
// //     /*클릭한 li에서 data-tab을 tab_id라고 부르겠다*/

// //     /*보여지고 있는 탭&내용 지우기*/
// //     $('ul.tabs li').removeClass('color');
// //     $('.tab-con').removeClass('show');
    
// //     /*클릭한 li의 탭 내용 나타내기*/
// //     $(this).addClass('color');
// //     $("#"+tab_id).addClass('show');

// // });