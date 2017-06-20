
require(["banner","jquery"],function(banner){
	
	$(".show-t").toggle(function(){
		$(this).children().eq(0).html("关闭");
		$(this).next().addClass("selset");
	},function(){
		$(this).children().eq(0).html("首页")
		$(this).next().removeClass("selset");
	})
	
	
	//
	$(window).scroll(function () {
        var scrollValue = $(window).scrollTop();
        scrollValue > 100 ? $('#top1').fadeIn() : $('#top1').fadeOut();
    });
    
	//向上
	$("#top1").click(function(){		
		$('html,body').animate({scrollTop:0},'slow');
	})
	
	
	//触摸出现梦层
	$(".case-b").on("mouseenter","li a",function(){
		$(this).children().eq(1).slideDown(300)
		$(this).children().eq(0).animate({"width":"110%","height":"110%"},300)
	})
	$(".case-b").on("mouseleave","li a",function(){
		$(this).children().eq(1).slideUp(300);
		$(this).children().eq(0).animate({"width":"100%","height":"100%"},300)
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
	
	
	
	//
	//轮播图
	banner.constructor({
						//一、属性
						boxId:".simple-t-c",//轮播图所在容器的id
						imgArr:["img/big1.jpg","img/big2.jpg","img/big3.jpg","img/big4.jpg"],//图片数组,这里面存放着每张图片的路径
						//轮播图的宽和高
						//淡入淡出过程需要的时间；
						fadeInOutTime:2000,
						//停顿时间；
						pauseTime:1000,		
						//按钮的颜色（原始颜色，高亮颜色）；
						btnColor:"#c79ea1",
						btnHighColor : "#ff8a81",
						btnWidth :12,
						btnHeight : 12,
						btnLeft : 90,
						btnTop : 374,
						//按钮的间隔
						btnSpace :20,
						//按钮上是否有序号
						btnHasOrd : false
					});
					
					
	//
	
})
