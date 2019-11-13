define(function() {
    'use strict';
    class Toast{
        constructor(options){
            this.t = options.ap;
            this.init();
        }
        
        init(){
            var that =this;
            // this.p.click(function(){
            //     // console.log($);
            //    // console.log(that.p);
            //     alert($(this).html());
            // })
            console.log(this.t);
            console.log($("html"));
            $("html").scroll(function() {
                console.log(1);
                if($(document).scrollTop() = 1537){

　　　　         $(".sxyp").children("a").addClass("active").parent().siblings().children("a").removeClass("active");

　　            }else if($(document).scrollTop() = 1989){
    　　　　         $(".wjcc").children("a").addClass("active").parent().siblings().children("a").removeClass("active");
            }
            });




        }
    }
    return Toast;
});