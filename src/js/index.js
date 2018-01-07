;$(document).ready(function(){
    // 头部
    $('.Nheader').load('../html/head.html');
    // 轮播图
    $('.Nbanner').syjCarousel({
        img:['../images/banner1.jpg','../images/banner2.jpg','../images/banner3.jpg'],
        buttons:true
    });
    // 推荐
    var $tuijian_goods = $('.tuijian_goods');
    var $status = [200,304];
    var $xhr_tuijian = new XMLHttpRequest();
    $xhr_tuijian.onload = function(){
        if($status.includes($xhr_tuijian.status)){
            var $data = JSON.parse($xhr_tuijian.responseText);
            // console.log($data);
            var $ul = $('<ul/>');
            $ul.html($data.map(function(item){
                return `
                    <li data-id="${item.id}">
                        <img class="gds_img" src="${item.imgurl}">
                        <div class="rim">
                            <p class="tit">${item.title}</p>
                            <div class="desc">${item.desc}</div>
                            <div class="price">
                                <span class="new">￥${item.price}</span>
                                <span class="old">￥${item.off}</span>
                            </div>
                            <div class="buy">${item.price}人已购买</div>
                        </div>
                    </li>
                `
            }).join(''));
            $ul.appendTo($tuijian_goods);
            // 传参
            $ul.on('click','li',function(item){
                var id = $(this).attr('data-id');
                // console.log(id);
                var params = '?';
                // console.log($data);
                $data.map(function(item){
                    if(item.id == id){
                        for(var attr in item){
                            params += attr + '=' + item[attr] + '&';
                        }
                        // 删除多余的&
                        params = params.slice(0,-1);
                        // console.log(params);
                        // 跳转页面
                        location.href = '../html/xiangqingye.html' + encodeURI(params);
                        //弹窗
                        alert(params);
                    }
                })
            });
        }
    };
    $xhr_tuijian.open('get','../api/tuijian.php',true);
    $xhr_tuijian.send();
    // 今日特卖
    var $temai_goods = $('.temai_goods');
    $.post('./api/temai.php',function(data){
        var _data = data;
        // console.log(_data);
        var $ul = $('<ul/>').html(function(){
            return $(_data).map(function(){
                return `
                    <li data-id=${this.id}>
                        <div class="bigban">
                            <img src="${this.imgurl}">
                        </div>
                        <div class="rank">
                            <div class="rank_r">
                                <div class="gds_img">
                                    <img src="${this.imgurl1}">
                                </div>
                                <div class="content">
                                    <p>${this.title1}</p>
                                    <div class="price">
                                        <span class="new">￥${this.price1}</span>
                                        <span class="old">￥${this.off1}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="rank_r">
                                <div class="gds_img">
                                    <img src="${this.imgurl2}">
                                </div>
                                <div class="content">
                                    <p>${this.title2}</p>
                                    <div class="price">
                                        <span class="new">￥${this.price2}</span>
                                        <span class="old">￥${this.off2}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="rank_r">
                                <div class="gds_img">
                                    <img src="${this.imgurl3}">
                                </div>
                                <div class="content">
                                    <p>${this.title3}</p>
                                    <div class="price">
                                        <span class="new">￥${this.price3}</span>
                                        <span class="old">￥${this.off3}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                `
            }).get().join('');
        });
        $temai_goods.append($ul);
        $ul.on('click','li',function(item){
            var id = $(this).attr('data-id');
            console.log(id);
            var params = '?';
            console.log($(_data));
            $(_data).map(function(item){
                if(item.id == id){
                    for(var attr in item){
                        params += attr + '=' + item[attr] + '&';
                    }
                    // 删除多余的&
                    params = params.slice(0,-1);
                    console.log(params);
                    // 跳转页面
                    // location.href = '../html/xiangqingye.html' + encodeURI(params);
                    location.href = '#' + encodeURI(params);
                    //弹窗
                    alert(params);
                }
            })
        });
    },"json");

    // 尾部
    $('.Nfooter').load('../html/footer.html');
});