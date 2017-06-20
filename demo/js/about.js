
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

	//鼠标
})
