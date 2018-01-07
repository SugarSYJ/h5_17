;(function($){
    $.fn.syjCarousel = function(options){
        var defaults = {
            // width:1920,
            height:480,
            page:true,
            duration:2000,
            buttons:false,
            type:'vertical',//horizontal,seamless,fade
            index:0,
            autoPlay:true
        }
        this.each(function(idx,ele){
            var $self = $(ele);
            // console.log(this);
            var opt = $.extend({},defaults,options);
            $self.addClass('syj-carousel');
            $self.css({
                width:opt.width,
                height:opt.height
            });
            var lx = {
                init:function(){
                    opt.len = opt.img.length;
                    var $ul = $('<ul/>');
                    $ul.html(opt.img.map(function(url){
                        return '<li><img src="' + url + '"/></li>'
                    }).join(''));
                    $ul.children().eq(0).clone(true,true).appendTo($ul);
                    $self.append($ul);
                    if(opt.buttons){
                        $('<span/>').addClass('btn-prev').html('&lt;').appendTo($self);
                        $('<span/>').addClass('btn-next').html('&gt;').appendTo($self);
                    }
                    var $page = $('<div/>').addClass('page').appendTo($self);
                    for($i=0;$i<opt.len;$i++){
                        var $span = $('<span/>').html($i+1);
                        // if(opt.index===$i){
                        //     $span.addClass('active');
                        // }
                        $page.append($span);
                    }
                    $self.hover(function(){
                        clearInterval($self.timer);
                    },function(){
                        lx.move();
                    }).on('click','.btn-prev',function(){
                        opt.index--;
                        lx.show();
                    }).on('click','.btn-next',function(){
                        opt.index++;
                        lx.show();
                    });
                    this.move();
                    this.show();
                    return this;
                },
                move:function(){
                    $self.timer = setInterval(function(){
                        opt.index++;
                        this.show();
                    }.bind(this),opt.duration);
                    return this;
                },
                show:function(){
                    var $ul = $self.find('ul');
                    var $page = $self.find('.page');
                    if(opt.index>opt.len){
                        $ul.css({top:0});
                        opt.index = 1;
                    }else if(opt.index<0){
                        $ul.css({top:-opt.len*opt.height});
                        opt.index = opt.len - 1;
                    }
                    $ul.animate({top:-opt.index*opt.height});
                    // for($i=0,$i<opt.len;$i++){
                    //     // $page.children().eq($i).addClass('null');
                    // }
                    // if(opt.index===opt.len){
                    //     $page.children().eq(0).addClass('active');
                    // }else{
                    //     $page.children().eq(opt.index).addClass('active');
                    // }
                    return this;
                }
            };
            lx.init();
        });
        return this;
    };
})(jQuery);