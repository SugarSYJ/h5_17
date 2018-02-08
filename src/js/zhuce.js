;require(['config'],function(){
    require(['jquery'],function($){
        $('.btnCheck').on('click',function(){
            var $num = $('.num').val();
            if($num === ''){
                alert('请输入手机号码');
                return false;
            }
            var reg = /^1[34578]\d{9}$/;
            if(!reg.test($num)){
                alert('手机号格式不正确');
                return false;
            }
            var $code = $('.code').val();
            if($code === ''){
                alert('请输入短信验证码');
                return false;
            }
            var $password = $('.password').val();
            if($password === ''){
                alert('请输入密码');
                return false;
            }
            var reg = /^\S{1,20}$/;
            if(!reg.test($password)){
                alert('密码格式不正确');
                return false;
            }
            var $passWord = $('.passWord').val();
            if($passWord === ''){
                alert('请再输入密码');
                return false;
            }
            if($password!=$passWord){
                alert('两次密码输入不一致');
                return false;
            }
            var $checkbox = $('.checkbox');
            if(!$checkbox.is(':checked')){
                alert('请勾选我已阅读并接受');
                return false;
            }
            $.ajax({
                url:'../mysql/reg.php',
                data:{
                    num:$num,
                    password:$password
                },
                success:function(data){
                    if(data === 'fail'){
                        return;
                    }
                    console.log(data);
                    alert(data);
                }
            });
        });
    });
});