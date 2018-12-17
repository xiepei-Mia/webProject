$(document).ready(function(){
    // 默认显示中国音乐的第一个页面
    $(".songLists ul:not(:first)").hide();
    $(".countryMune li:first").css("color","#169af3");
    $(".countryMune li").each((index,element)=>{
        $(".countryMune li").eq(index).mouseover(function(){
            MusicCountry(index);
        });
    })
    //标题鼠标移动事件
    function MusicCountry(index){
        $(".countryMune li").css("color","#252b34");
        $(".countryMune li").eq(index).css("color","#169af3");
        $(".chineseSong ul").hide();
        $(".chineseSong:eq("+index+") ul:first").show();
    }
    //行列鼠标移动事件
    $(".lineStyle").each((index,element)=>{
        $('.lineStyle .downlond_play').eq(index).hide();
        $(".lineStyle .icon-huaban").eq(index).show();
        
        $(".lineStyle").eq(index).hover(function (){
            $(".lineStyle .icon-huaban").eq(index).hide();
            $('.lineStyle .downlond_play').eq(index).show();
            $(".lineStyle").eq(index).addClass('bg-color');
        },function () {
            $('.chineseSong ul li .downlond_play').eq(index).hide();
            $(".chineseSong ul li .icon-huaban").eq(index).show();
            $(".lineStyle").eq(index).removeClass('bg-color');
            
        })
    })
    //页码的赋值
    $('.runPage .page1').each((index,element)=>{
        let pageNum =  1+index%3;
        console.log(pageNum);
        $('.page1').eq(index).text(pageNum);
    })
    //像左键点击，页码变小
    $('.runPage .icon-arrow_left').each((index,element)=>{
        let pageNum = 1 + index % 3;
        $('.runPage .icon-arrow_left').eq(index).click(function () {
            switch (pageNum) {
                case 1: break;
                case 2: 
                case 3: $(".chineseSong ul").eq(index).hide();
                    $(".chineseSong ul").eq(index - 1).show();break;
            }
        })
    })
    //像右键点击，页码变大；
    $('.runPage .icon-arrow_right').each((index, element) => {
        let pageNum = 1 + index % 3;
        $('.runPage .icon-arrow_right').eq(index).click(function () {
            switch (pageNum) {
                case 3: break;
                case 2:
                case 1: $(".chineseSong ul").eq(index).hide();
                    $(".chineseSong ul").eq(index + 1).show(); break;
            }
        })
    })
})