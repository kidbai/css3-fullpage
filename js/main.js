$(function (){

    $("#page-container").fullpage({
        //navigation
        'verticalCentered': true,
        'navigation': true,
        'navigationPosition': 'right',
        controlArrows: true,
        resize : false,
        anchors:['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh'],

        // Scrolling
        css3: true,
        scrollingSpeed: 400,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopTop: false,
        loopBottom: true,

        //Accessibility
        'css3': true,
        keyboardScrolling: false,
        'afterLoad': function(anchorLink, index){
            $.fn.fullpage.setAllowScrolling(false); 
            if(index == 1)
            {
                $(".section .phone").addClass('start-animation');
                $(".section .piston-body").removeClass('piston-close').addClass('start-animation');
                $(".qrcode-title").text('3E生活');
                $(".qrcode-subtitle").text('让物业伴您左右');
                $(".qrcode-text").text('家用报修、查询缴费、访客通行、公共监察...');
                $.fn.fullpage.setAllowScrolling(true);
            }
            if(index == 2)
            {
                if($(".section .pipe").hasClass('fixed'))
                {
                    $(".section .pipe").removeClass('fixed');
                }
                $(".qrcode-title").text('');
                $(".qrcode-subtitle").text('费用查询 轻松支付');
                $(".qrcode-text").text('各类费用，随时随地，掌中操作，告别跑腿');
                $(".section .middle").addClass('start-animation').removeClass('hide-middle');
                $(".section .sub-middle").addClass('start-animation').removeClass('hide-middle');
                // document.getElementsByClassName('sub-middle')[0].addEventListener('webkitAnimationEnd', function () {
                //     console.log("done");
                //     $.fn.fullpage.setAllowScrolling(true);
                // }, false);
                $.fn.fullpage.setAllowScrolling(true);
            }
            if(index == 3)
            {
                $(".qrcode-title").text('');
                $(".qrcode-subtitle").text('随报随修 从此无忧');
                $(".qrcode-text").text('预约时间，提交报修，准时上门，支持评价');
                $(".section .hand-top").addClass('start-animation');
                $(".section .hand-left").addClass('start-animation');
                $(".section .hand-right").addClass('start-animation');
                setTimeout(function (){
                    $(".section .pipe").addClass('fixed');
                }, 800)
                $.fn.fullpage.setAllowScrolling(true);
            }

            if(index == 4)
            {
                if($(".section .pipe").hasClass('fixed'))
                {
                    $(".section .pipe").removeClass('fixed');
                }
                $(".qrcode-title").text('');
                $(".qrcode-subtitle").text('宾客到访 快乐通行');
                $(".qrcode-text").text('一键提交，指令下达，身份核实，放行无阻');
                $(".section .left-door").addClass('start-animation');
                $(".section .right-door").addClass('start-animation');
                $(".section .car").addClass('start-animation');
                $.fn.fullpage.setAllowScrolling(true);
            }

            if(index == 5)
            {
                $(".qrcode-title").text('有你有我');
                $(".qrcode-subtitle").text('共建美好家园');
                $(".qrcode-text").text('一键提交，指令下达，身份核实，放行无阻');
                $(".section .city").addClass('start-animation');
                $(".section .city-phone").addClass('start-animation');
                $(".section .cloud").addClass('start-animation');
                $.fn.fullpage.setAllowScrolling(true);
            }

            if(index == 6)
            {
                $(".qrcode-title").text('');
                $(".qrcode-subtitle").text('信息指南 实时更新');
                $(".qrcode-text").text('小区动态，及时送达，办事指南，方便你我');
                $(".section .icon").addClass('start-animation');
                $.fn.fullpage.setAllowScrolling(true);
            }

            if(index == 7)
            {
                $(".qrcode-wrapper").addClass('hide');
                $.fn.fullpage.setAllowScrolling(true);
            }
        },
        'onLeave': function(index, nextIndex, direction){
            console.log(index);
            console.log(nextIndex);
            console.log(direction);
            if(index == 1 && direction == 'down')
            {
                $(".section .phone").removeClass('start-animation');
                $(".section .piston-body").removeClass('start-animation').addClass('piston-close');
                // document.getElementsByClassName('piston-body')[0].addEventListener('webkitAnimationEnd', function () {
                //     $.fn.fullpage.setAllowScrolling(true);
                // }, false);
                $(".section .phone").on('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function (){
                    $.fn.fullpage.setAllowScrolling(true);
                });
            }
            if(index == 2)
            {
                $.fn.fullpage.setAllowScrolling(true);
                $(".section .sub-middle").removeClass('start-animation').addClass('hide-middle');
                $(".section .middle").addClass('hide-middle').removeClass('start-animation');
                setTimeout( function (){
                    $.fn.fullpage.setAllowScrolling(true);
                }, 5000);
            }
            if(index == 3)
            {
                $(".section .hand-top").removeClass('start-animation');
                $(".section .hand-left").removeClass('start-animation');
                $(".section .hand-right").removeClass('start-animation');
                $(".section .pipe").removeClass('fixed');
                
            }
            if(index == 4)
            {
                $.fn.fullpage.setAllowScrolling(true);
                $(".section .left-door").removeClass('start-animation');
                $(".section .right-door").removeClass('start-animation');
                $(".section .car").removeClass('start-animation');
                $.fn.fullpage.setAllowScrolling(true);
            }

            if(index == 5)
            {
                $(".section .city").removeClass('start-animation');
                $(".section .city-phone").removeClass('start-animation');
                $(".section .cloud").removeClass('start-animation');
                $.fn.fullpage.setAllowScrolling(true);
            }

            if(index == 6)
            {
                $(".section .icon").removeClass('start-animation');
                $.fn.fullpage.setAllowScrolling(true);
            }

            if(index == 7)
            {
                $(".qrcode-wrapper").removeClass('hide');
                $.fn.fullpage.setAllowScrolling(true);
            }
        },
        afterRender: function(){
            $(".section .phone").addClass('start-animation');
            $(".section .piston-body").addClass('start-animation');
            
        },
    });
});