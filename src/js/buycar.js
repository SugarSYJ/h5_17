;(function($){
    // 头部
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
    // console.log(date);
    var c_list = document.querySelector('.c_list');
    var ul = document.createElement('ul');
    var total1 = 0;
    var total2 = 0;
    var qty = 0;
    var qty1 = 0;
    ul.innerHTML = date.map(function(goods){
        total1 = goods.price*goods.qty;
        total2 += total1;
        qty += goods.qty;
        return `
            <li data-id="${goods.id}">
                <div class="cl_con">
                    <div class="cl_tit">
                        蜜芽精选商家
                    </div>
                    <div class="car_list">
                        <input type="checkbox" checked class="btn_c"/>
                        <img src="${goods.imgurl}" class="it_img"/>
                        <div class="it_des">
                            <p class="goodname">${goods.name}</p>
                            <p class="goods_select">已选</p>
                        </div>
                        <div class="it_size"></div>
                        <div class="it_price">
                            <p class="new">${goods.price}</p>
                            <p class="old">${goods.off}</p>
                        </div>
                        <div class="it_num">
                            <span class="l"> - </span>
                            <span class="c">${goods.qty}</span>
                            <span class="r"> + </span>
                        </div>
                        <div class="it_total"><span>${total1}</span></div>
                        <div class="delete">删除</div>
                    </div>
                </div>
            </li>
        `
    }).join('');
    c_list.appendChild(ul);
    // 总数量
    $('.zi').html(qty);
    // 总价格
    $('em').text(total2);
    // 点击事件
    var empty = document.querySelector('.empty');
    var list = document.querySelector('.list');
    c_list.onclick = function(e){
        e = e || window.event;
        var target = e.target || e.srcElement;
        if(target.className.toLowerCase()==='delete'){
            var currentLi = target.parentNode.parentNode.parentNode;
            var id = currentLi.getAttribute('data-id');
            // console.log(id);
            for(var i=0;i<date.length;i++){
                if(date[i].id===id){
                    date.splice(i,1);
                    break;
                }
            }
            currentLi.parentNode.removeChild(currentLi);
            show();
            var now = new Date();
            now.setDate(now.getDate()+3);
            document.cookie = 'date=' + JSON.stringify(date) + ';expires=' + now.toUTCString();
            // console.log(document.cookie);
        }
        if(target.className.toLowerCase()==='r'){
            var currentLi = target.parentNode.parentNode.parentNode.parentNode;
            var id = currentLi.getAttribute('data-id');
            for(var i=0;i<date.length;i++){
                if(date[i].id===id){
                    date[i].qty++;
                    break;
                }
            }
            var currentC = target.previousElementSibling;
            var currentP = target.parentNode.previousElementSibling.firstElementChild;
            var currentT = target.parentNode.nextElementSibling.firstElementChild;
            currentC.innerText = currentC.innerText*1 + 1;
            $('.zi').text($('.zi').text()*1 + 1);
            currentT.innerText = currentC.innerText*1 * currentP.innerText*1;
            $('em').text($('em').text()*1 + currentP.innerText*1);
            var now = new Date();
            now.setDate(now.getDate()+3);
            document.cookie = 'date=' + JSON.stringify(date) + ';expires=' + now.toUTCString();
        }
        if(target.className.toLowerCase()==='l'){
            var currentLi = target.parentNode.parentNode.parentNode.parentNode;
            var id = currentLi.getAttribute('data-id');
            for(var i=0;i<date.length;i++){
                if(date[i].id===id){
                    date[i].qty--;
                    if(date[i].qty<=1){
                        date[i].qty = 1;
                    }
                    break;
                }
            }
            var currentC = target.nextElementSibling;
            var currentP = target.parentNode.previousElementSibling.firstElementChild;
            var currentT = target.parentNode.nextElementSibling.firstElementChild;
            currentC.innerText = currentC.innerText*1 - 1;
            $('.zi').text($('.zi').text()*1 - 1);
            currentT.innerText = currentC.innerText*1 * currentP.innerText*1;
            $('em').text($('em').text()*1 - currentP.innerText*1);
            if(currentC.innerText*1<1){
                currentC.innerText = 1;
                $('.zi').text($('.zi').text()*1 + 1);
                currentT.innerText = currentP.innerText*1;
                $('em').text($('em').text()*1 + currentP.innerText*1);
            }
            var now = new Date();
            now.setDate(now.getDate()+3);
            document.cookie = 'date=' + JSON.stringify(date) + ';expires=' + now.toUTCString();
        }
    }
    show();
    function show(){
        var lis = $('.c_list').find('li');
        if(lis.length===0){
            empty.style.display = 'block';
            list.style.display = 'none';
        }
    }
    // 全选
    var $btn_c = $('.c_list').find('.btn_c');
    $('.all1').click(function(){
        $btn_c.prop('checked',this.checked);
        $('.all2').prop('checked',this.checked);
    });
    $('.all2').click(function(){
        $btn_c.prop('checked',this.checked);
        $('.all1').prop('checked',this.checked);
    });
    $('.c_list').on('click','li',function(){
        $(this).find('.btn_c').prop('checked',this.checked).find('.l').prop('disabled',false);
        checkALL();
    });
    // 全选按钮的状态
    // 数量对比
    function checkALL(){
        // 判断勾选的数量与复选框的数量是否相等
        var $checked = $btn_c.filter(':checked');
        $('.all1').prop('checked',$checked.length === $btn_c.length);
        $('.all2').prop('checked',$checked.length === $btn_c.length);
    }
    // 尾部
    $('.Nfooter').load('footer.html');
})(jQuery);