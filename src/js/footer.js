// footer 固定定位
var fixed_l = document.querySelector('.fixed_l');
var fixed_r = document.querySelector('.fixed_r');
var back = document.querySelector('.back');
window.onscroll = function(){
    var scrollTop = window.scrollY;
    if(scrollTop>=200){
        fixed_l.style.display = 'block';
        fixed_r.style.display = 'block';
    }else{
        fixed_l.style.display = 'none';
        fixed_r.style.display = 'none';
    }
}
back.onclick = function(){
    var timer = setInterval(()=>{
        var scrollTop = window.scrollY;
        var speed = scrollTop/10;
        scrollTop -= speed;
        if(speed<=0 || scrollTop===0){
            clearInterval(timer);
        }
        scroll(0,scrollTop);
    },30);
}