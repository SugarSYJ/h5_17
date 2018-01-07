;(function($){
    // 搜索
    var productWord = document.querySelector('#productWord');
    var suggest = document.querySelector('#suggest');
    window.getData = function(data){
        // console.log(data);
        suggest.innerHTML = data.s.map(item=>{
            return `<li>${item}</li>`
        }).join('');
        document.body.removeChild(script);
        suggest.style.display = 'block';
    }
    var script;
    productWord.oninput = function(){
        _productWord = productWord.value;
        script = document.createElement('script');
        script.src = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?json=1&cb=getData&wd=" + _productWord;
        document.body.appendChild(script);
    }
    suggest.onclick = function(e){
        if(e.target.tagName.toLowerCase()==='li'){
            productWord.value = e.target.innerText;
            suggest.style.display = 'none';
        }
    }
    suggest.onmouseover = function(e){
        if(e.target.tagName.toLowerCase()==='li'){
            e.target.className = 'liang';
        }
    }
    suggest.onmouseout = function(e){
        if(e.target.tagName.toLowerCase()==='li'){
            e.target.className = '';
        }
    }
})(jQuery);