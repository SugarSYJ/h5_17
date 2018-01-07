;(function($){
    // 头部
    $('.Nheader').load('../html/head.html',function(){
        $('.big').gdsZoom();
    });
    // 中间部分
    // 接收参数
    var tit = document.querySelector('.tit');
    var titlecon = document.querySelector('.titlecon');
    // var tu1 = document.querySelector('.tu1');
    // var tu2 = document.querySelector('.tu2');
    var tu3 = document.querySelector('.tu3');
    var p_new = document.querySelector('.p_new');
    var p_old = document.querySelector('.p_old');
    var params = decodeURI(location.search);
    params = params.slice('1');
    // console.log(params);
    params = params.split('&');
    var date = {};
    params.forEach(function(item){
        var arr = item.split('=');
        date[arr[0]] = arr[1];
    });
    // tu1.src = date.imgurl;
    // tu2.src = date.imgurl;
    tu3.src = date.imgurl;
    console.log(date);
    tit.innerHTML = date.title;
    titlecon.innerHTML = date.title;
    p_new.innerHTML = date.price;
    p_old.innerHTML = date.off;
    var id = date.id;
    // 图片切换、放大镜
    $('.small').children().eq(0).addClass('active');
    $('.small img').mouseover(function(){
        $(this).addClass('active').siblings().removeClass('active');
        $('.big img').attr({
            'src':this.src,
            'data-big':this.src || $(this).attr('data-big')
        });
    });
    // 数量加减
    $('.r').on('click',function(){
        $('.c').text($('.c').text()*1 + 1);
    });
    $('.l').on('click',function(){
        $('.c').text($('.c').text()*1 - 1);
        if($('.c').text()*1<=1){
            $('.c').text(1);
        }
    });
    // 用于保护购物车的信息
    var date = [];
    var cookies = document.cookie;
    if(cookies.length){
        cookies = cookies.split('; ');
        cookies.forEach(function(item){
            var arr = item.split('=');
            if(arr[0]==='date'){
                date = JSON.parse(arr[1]);
            }
        })
    }
    var btn = document.querySelector('.btn');
    btn.onclick =function(){
        // 判断details是否有相同的商品
        for(var i=0;i<date.length;i++){
            if(date[i].id === id){
                break;
            }
        }
        if(i===date.length){
            var goods ={
                id:id,
                imgurl:tu3.src,
                name:tit.innerHTML,
                price:p_new.innerHTML,
                off:p_old.innerHTML,
                qty:$('.c').text()*1
            }
            date.push(goods);
        }else{
            date[i].qty = date[i].qty + $('.c').text()*1;
        }
        var now = new Date();
        now.setDate(now.getDate()+3);
        document.cookie = 'date=' + JSON.stringify(date) + ';expires=' + now.toUTCString();
        console.log(document.cookie);
        // 飞入购物车
        var $shopcar = $('.shopcar');
        var $img = $('.tu3');
        var $copyImg = $img.clone();
        var $copyImg1 = $img.clone();
        $copyImg.css({
            position:'absolute',
            left:$img.offset().left,
            top:$img.offset().top,
            width:$img.width()
        });
        $copyImg.appendTo('body');
        $copyImg.animate({
            width:50,
            left:$shopcar.offset().left,
            top:$shopcar.offset().top+$shopcar.height()
        },function(){
            $copyImg.remove();
        });
    };
    // 尾部
    $('.Nfooter').load('../html/footer.html');
})(jQuery);