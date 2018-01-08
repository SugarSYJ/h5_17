;(function($){
    // 头部
    $('.Nheader').load('head.html');
    // 中间部分
    var $goodslist = $('.goodslist');
    var $page = $('.page');
    var pageNo = 1;
    var qty = 40;
    $.post('../mysql/list.php',{pageNo:pageNo,qty:qty},function(data){
        function arr(data){
            var _data = data;
            // console.log(_data);
            var $ul = $('<ul/>').html(function(){
                return _data.data.map(function(item){
                    return `
                        <li data-id="${item.id}">
                            <img src="${item.imgurl}">
                            <div class="bmfo">
                                <div class="price">
                                    <span class="new">￥${item.price}</span>
                                    <span class="old">￥${item.off}</span>
                                </div>
                                <div class="tit">${item.title}</div>
                                <div class="desc"><span>${item.desc}</span>${item.dds}</div>
                            </div>
                        </li>
                    `
                }).join('');
            });
            $goodslist.text('');
            $goodslist.append($ul);
            // 分页
            $page.text('');
            var pageQty = Math.ceil(_data.total/_data.qty);
            for($i=1;$i<=pageQty;$i++){
                var $span = $('<span/>');
                $span.html($i);
                if($i===pageNo){
                    $span.addClass('active');
                }
                $page.append($span);
            }
            // 传参
            $ul.on('click','li',function(item){
                var id = $(this).attr('data-id');
                // console.log(id);
                var params = '?';
                // console.log(_data.data);
                _data.data.map(function(item){
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
                        // alert(params);
                    }
                })
            });
        }
        arr(data);
        // 点击分页切换
        $page.on('click','span',function(){
            span = pageNo = this.innerText*1;
            // console.log(span);
            $.post('../mysql/list.php',{pageNo:span,qty:qty},function(data){
                arr(data);
            },"json");
        });
    },"json");
    // 尾部
    $('.Nfooter').load('footer.html');
})(jQuery);