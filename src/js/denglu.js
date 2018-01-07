;(function($){
    $('.btnCheck').on('click',function(){
        var $num = $('.num').val();
        if($num === ''){
            alert('请输入手机号码');
            return false;
        }
        var reg = /^1[34578]\d{9}$/;
        if(!reg.test($num)){
            alert('手机号不合法');
            return false;
        }
        var $code = $('.code').val();
        if($code === ''){
            alert('请输入短信验证码');
            return false;
        }
    });
})(jQuery);