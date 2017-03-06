/**
 * Created by lenovo on 2017/3/3.
 */
$(function () {
    /* $(".busi-nav").hover(function () {
     // alert("移入");
     $(".busi-nav-panel").show();
     }, function () {
     // alert("移出");
     $(".busi-nav-panel").hide();
     })*/
    $(".img li:eq(0)").show();
    $(".num li").mousemove(function () {
        $(this).addClass("active").siblings().removeClass("active");
        var num = $(this).index();
        i = num;
        $(".img li:eq(" + num + ")").show().siblings().hide();
    })
    //计时器
    var i = 0;
    var time = setInterval(move, 2000);
    //自动播放函数
    function move() {
        i++;
        if (i == 2) {
            i = 0;
        }
        $(".num li:eq(" + i + ")").addClass("active").siblings().removeClass("active");
        $(".img li:eq(" + i + ")").show().siblings().hide();
    }

    //鼠标移入暂停轮播
    $(".sec-main-lunbo").hover(function () {
        clearInterval(time);
    }, function () {
        time = setInterval(move, 2000);
    })
    $(".xiaobg").hover(function () {
        $(".bgfanli").show();
        $(".gaoganli").show();

    }, function () {
        $(".bgfanli").hide();
        $(".gaoganli").hide();
      
    })
    $(".xiaobg2").hover(function () {

        $(".bgfanli2").show();
        $(".gaoganli2").show();
    }, function () {

        $(".bgfanli2").hide();
        $(".gaoganli2").hide();
    })
})