window.onload=function(){
	//导航
	function addbg(){
		var nav=document.getElementsByTagName("nav")[0];
		var li=nav.getElementsByTagName("li");
		for(var i=0;i<li.length;i++){
			li[i].innerHTML+='<div class="li_bg"></div>';
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

	$('.line_down').animate({width: '270px'},1400);
	$('.line_up').animate({width: '220px'},1400,function(){
		$('.ball').fadeIn(800);
	});
	$('.love').addClass('loved');
	$('.textbox p').delay(1000).fadeIn(800);
	
	$('.flower_box').hover(function() {
		$(this).find('.text_flower').addClass('text_hover');
		$(this).find('.img_flower').stop().animate({opacity:'0'}).addClass('img_hover');
	}, function() {
		$(this).find('.text_flower').removeClass('text_hover');
		$(this).find('.img_flower').stop().delay(200).animate({opacity:'1'}).removeClass('img_hover');
	});
	
	
//控制蛋糕位置，第二部分
	//2
	var cake = document.getElementsByClassName('cakes');
	var speed = Math.random();
	var deer = document.getElementById('deer');
	//3
	var imgs = document.getElementsByClassName('f3img');
	var speed3 = Math.random();
	//4
	var bis = document.getElementsByClassName('biscuits');
	var speed4 = Math.random();
	
	window.onscroll = function(){
		var scr = document.documentElement.scrollTop||document.body.scrollTop;
		//2
		for(var i = 0; i<= cake.length-1;i++){
			if (i%2 ==0){
				cake[i].style.top = (scr - 1000)*(speed*(i+1)+1)+'px';
			}else{
				cake[i].style.top = -(scr - 1200)*(speed*(i+1)+1)+'px';
			}
		}
		
		var dr = scr;
		if(dr>1000){
			dr = 1000;
		}
		deer.style.right = dr-980 + 'px';
		if (scr >=3660){
			$('.rice').animate({left:'0'},1200);
			$('.cup').fadeIn(800);
		}
		
		//3
		for(var j =0 ;j<=imgs.length-1;j++){
			if (j%2 ==0){
				imgs[j].style.top = (scr - 1700)*(speed3*(j+1)+1)+'px';
			}else{
				imgs[j].style.top = -(scr - 1900)*(speed3*(j+1)+1)+'px';
			}
		}
		
		//4
		for(var k =0 ;k<=bis.length-1;k++){
			if (k%2 ==0){
				bis[k].style.top = (scr - 2700)*(speed4*(k+1)+1)+'px';
			}else{
				bis[k].style.top = -(scr - 2900)*(speed4*(k+1)+1)+'px';
			}
		}
		
	}

	//hover-img
	$(".img_box li").hover(function(){
		$(this).children('.img_mask').stop().animate({right:"0"});
	},function(){
		$(this).children(".img_mask").stop().animate({right:"100%"});
	})
	
	//more
	function more(obj,colorin,colorout){
		$(obj).hover(function(){
			$(this).find('span').stop().animate({left:0,width:"100%"},600);
			$(this).find('p').stop().animate({color:colorin});
		},function(){
			$(this).find('span').stop().animate({left:'50%',width:0},600);
			$(this).find('p').stop().animate({color:colorout});
		});
	}

	more(".more1",'#9E2544','#fff')
	more('.more2','#fff','#efa527');



//手风琴
	$(function(){
		$(".accordion li").hover(function(){
			$(this).stop().animate({width:"594px"},600);
			$(this).find(".acc_mask").stop().fadeOut();
			$(this).siblings().stop().animate({width:"131px"},600);
			$(this).siblings().find(".acc_mask").stop().fadeIn();
		})
	})
	
	
	
	$("#sub").click(function(){
		var namee=$("#namee").val();
		var rega =/(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/;
		var tell=$("#tell").val()
		var emaill=$("#emaill").val();
		var regb=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		var contt=$("#contt").val();
		//验证姓名
		if(namee==""){
			alert("亲，请写姓名!");
		}
		else if(tell==""){
			alert("亲，请输入您的电话!");
		}
		else if(!rega.test(tell)){
			alert("亲，请输入正确的电话!");
		}
		else if(emaill==""){
			alert("亲，请输入邮箱!")
		}
		else if(!regb.test(emaill)){
			alert("亲，请输入正确的邮箱!");
		}
		else if(contt==""){
			alert("亲，请输入内容！")
		}
		else if{
			alert(1)
			$("#namee").val().empty();
//			tell.empty();
//			emaill.empty();
//			contt.empty();
		}
	})
	
	
	
	//回顶部
	function gotoTop(){
		$("#gotop").click(
			function(){
				$('html,body').animate({scrollTop:0},700);
		}).hover(
			function(){
				$(this).addClass("hover");
			},
			function(){
				$(this).removeClass("hover");
			});
		};
		gotoTop();
	
	
	
	
	
	
	
	

}