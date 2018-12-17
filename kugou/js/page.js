
$(function(){
    // 更多
    var t;
    let widthC = $(window).width();
    $('body,.head,.carousel').css('width', $(window).width());
    $("#more").mouseover(function(){
        $(".morePage").show();
        $("#more i").addClass("transformIcon");
        clearInterval(t);
    })
    $("#more").mouseout(function(){
        $(".morePage").show();
        t = setInterval(function(){
            $(".morePage").hide();
            $("#more i").removeClass("transformIcon");
        },300);
    })
    $(".morePage").mousemove(function(){
        clearInterval(t);
    })
    $(".morePage").mouseout(function(){
        t = setInterval(function(){
            $("#more i").removeClass("transformIcon");
            $(".morePage").hide();
        },300);
    })
    
    
});
    // 轮播图
$(document).ready(function(){
    var time,count = 0 ;
    var l = $(".carousel img");
    $(".carousel img:not(:first)").hide();
    time = setInterval(imgroll,2000);
    function imgroll(){
        $(".carousel img").each((index, Element)=>{$(".carousel img:eq("+index+")").hide();})
        count++;
        if(count === l.length){
            count = 0;
        }
        $(".carousel img:eq("+count+")").show();
        changLi(count);
    }
    $(".carousel").mouseover(function(){
        clearInterval(time);
        $("#turnLeft,#turnRight").show();
    })
    $(".carousel").mouseout(function(){
        $("#turnLeft,#turnRight").hide();
        time = setInterval(imgroll,2000);
    })
    //圆点效果
    function changLi(index){
        $(".listImg .icon").removeClass("listImgBg");
        $(".listImg .icon:eq("+index+")").addClass("listImgBg");
    }
    //圆点点击效果
    $('.listImg .icon').each((index,Element)=>{
        $(".listImg .icon:eq("+index+")").mouseover(function(){ 
            changLi(index);
            $(".carousel img").each((index, Element)=>{$(".carousel img:eq("+index+")").hide();})
            $(".carousel img:eq("+index+")").show();
        })
    });
    //向左向右

    $('#turnLeft').click(function turnLeft(){
        var z = $(".listImg .icon").index($(".listImgBg"));
        if(z ===  0){
            z = 4;
        }
        z--;
        $(".carousel img").each((index, Element)=>{$(".carousel img:eq("+index+")").hide();})
        $(".carousel img:eq("+z+")").show();
        changLi(z);
    });
    $('#turnRight').click(function turnRight(){
        var z = $(".listImg .icon").index($(".listImgBg"));
        if(z === 3){
            z = -1;
        }
        z++;
        $(".carousel img").each((index, Element)=>{$(".carousel img:eq("+index+")").hide();})
        $(".carousel img:eq("+z+")").show();
        changLi(z);
    });
})
// 鼠标移动效果
$(document).ready(function(){
    // 鼠标移动播放键出现在左下脚
    $(".play_in").hide();
    function mousePlay(element){
        element.hover(function(){
            $(this).find($(".play_in")).show();
        },function(){
            $(this).find($(".play_in")).hide();
        });
    }
    //播放键函数调用
    $(".play_in").each((index,Element)=>{
        mousePlay($(".play_in").parent().eq(index))
    });
    $(".topList").each((index,Element)=>{
        mousePlay($(".play_in").parent().eq(index))
    });
})

