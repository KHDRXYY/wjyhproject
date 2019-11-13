define(function() {
    'use strict';
    class Tab{
        constructor(options){
            this.li = options.ali;
            this.louc = options.ap;

            this.init();
            console.log(this.li);
            console.log(this.louc);
        }

        init(){
            var that = this;
            // this.li.click(function(){
        
            //     $(this).addClass("active").siblings().removeClass("active");
            //     that.p.css("display","none").eq($(this).index()).css("display","block");
            $(".cel").children("li").click(function(){
                //当前点击的li 的下标
                
                var i = $(this).index();
                console.log($(this));
                console.log(i)
                $(this).children("a").addClass("active").parent().siblings().children("a").removeClass("active");
                //设置li 和 box的对应关系，点击li1时，对应box1;
                var now = $(that.louc).eq(i); 
                console.log(now);
                //设置当前box的scroolTop的值
                // var t  = now.offset().top;
                var t = now.offset().top;
                console.log(t);
                that.t = t;
                $("html").animate({
                    scrollTop:t
                });
               
            });
        }
    }
    return Tab;
    
});