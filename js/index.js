/**
 * Created by Administrator on 2016/9/11 0011.
 */
$(function () {
    //轮播图
     $('#sb-slider').slicebox({
        interval:5000,
        orientation : "r", //表示幻灯片的切换方向，可取 (v)垂直方向, (h)水平方向 or (r)随机方向
        perspective : 800, //透视点距离，可以通过改变其值查看效果
        cuboidsCount : 5, //幻灯片横向或纵向被切割的块数，切割的每一块将会以3D的形式切换
        cuboidsRandom : true, //是否随机 cuboidsCount 参数的值
        maxCuboidsCount : 5, //设置一个值用来规定最大的 cuboidsCount 值
        colorHiddenSides : "#333", //隐藏的幻灯片的颜色
        sequentialFactor : 150, //幻灯片切换时间（毫秒数）
        speed : 800, //每一块3D立方体的速度
        autoplay : true, //是否自动开始切换
        onBeforeChange : function(position) { return false; },
        onAfterChange : function(position) { return false; }
    });





    //精准传播
    $("tr").mouseover(function () {
        $(this).addClass("active").siblings().removeClass("active");
        var $val1=$(this).children("td").eq(1).html();
        var $val2=$(this).children("td").eq(2).html();
        var $val3=$(this).children("td").eq(3).html();
        var $val4=$(this).children("td").eq(4).html();
        $(".viewcount>.count").html($val1);
        $(".readcount>.count").html($val2);
        $(".transformcount>.count").html($val3);
        $(".regcount>.count").html($val4);
        $(".viewcount").addClass('active1');
        $(".readcount").addClass('active2');
        $(".transformcount").addClass('active3');
        $(".regcount").addClass('active4');
        console.log(1);
    });
    $("tr").mouseout(function () {
        $(".viewcount").removeClass('active1');
        $(".readcount").removeClass('active2');
        $(".transformcount").removeClass('active3');
        $(".regcount").removeClass('active4');
    })


    window.onscroll=function () {
        
        //底部连接
        if($(document).scrollTop()<600){
            $(".stairs-bg").hide(1000);
        }else if($(document).scrollTop()>600){
            $(".stairs-bg").show(1000);
        }

        // 营销有数
        if($(document).scrollTop()>2500){
            $(".sheet-line1").addClass('showin');
            $(".sheet-line2").addClass('showin');
            $(".sheet-line3").addClass('showin');
            $(".sell-list").addClass('back');
            $(".sell-score").addClass('back1');
            console.log(2);
        }
    }

    $(".stairs-bg").click(function () {
        $('body,html').stop().animate({scrollTop:0},1000);
    })
})