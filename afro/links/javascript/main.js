var kursorx=new kursor({color:"#562AE5",type:5});function change(){document.querySelector("body").classList.toggle("font-change")}$(document).on("click",'a[href^="#"]',(function(o){o.preventDefault(),$("html, body").animate({scrollTop:$($(this).attr("href")).offset().top},400)}));