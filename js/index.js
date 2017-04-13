

window.onload=function(){
	//导航
	function addbg(){
		var nav=document.getElementsByTagName("nav")[0];
		var li=nav.getElementsByTagName("li");
		for(var i=0;i<li.length;i++){
			li[i].innerHTML+='<div class="li_bg"></div>'
		}
	}
	$("nav li").hover(function(){
		$(this).find(".zh").stop().fadeOut(400,function(){
			$(this).siblings().stop().fadeIn(400);
		})
		$(this).find(".li_bg").stop().animate({height:"92px"},400)
	},function(){
		$(this).find(".en").stop().fadeOut(400,function(){
			$(this).siblings().stop().fadeIn(400);
		})
		$(this).find(".li_bg").stop().animate({height:0},400)
	});
	addbg();














}