
require(["jquery"],function(){
	
	$(".show-t").toggle(function(){
		$(this).children().eq(0).html("关闭");
		$(this).next().addClass("selset");
	},function(){
		$(this).children().eq(0).html("首页")
		$(this).next().removeClass("selset");
	})
	
	//向上
	$("#top1").click(function(){		
		$('html,body').animate({scrollTop:0},'slow');
	})
	//改变why
	$(".why-b").on("mouseover","li",function(){
		var count=$(this).index();
		$(this).css({
			backgroundColor:"#cccccc",
		}).children().children().eq(1).css("color","#fff");
		$(this).children().children().eq(0).attr("src","img/bei"+(count+1)+".png")
	})
	$(".why-b").on("mouseout","li",function(){
		var count=$(this).index();
		$(this).css({
			backgroundColor:"#fff",
		}).children().children().eq(1).css("color","#000");
		$(this).children().children().eq(0).attr("src","img/tu"+(count+1)+".png")
	})
	
	//鼠标
	
})
