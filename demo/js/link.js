
require(["jquery"],function(){
	
	// 百度地图API功能
		var map = new BMap.Map("mapping");  // 创建Map实例
		map.centerAndZoom("西安");      // 初始化地图,用城市名设置地图中心点
	
		//	var map = new BMap.Map("allmap");    // 创建Map实例
		//	map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
		map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
		//	map.setCurrentCity("西安");          // 设置地图显示的城市 此项是必须设置的
		map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
		map.addControl(new BMap.ScaleControl());    //比例尺
		
		
		map.addControl(new BMap.NavigationControl());//缩放平移控件
		map.addControl(new BMap.ScaleControl());    //比例尺
		map.addControl(new BMap.OverviewMapControl());//缩略图
		

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
	
	//表单验证
	//注册
	email   =/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/,
    pwd     = /^[\w]{8,32}$/,
    pass    =/^[a-zA-Z][a-zA-Z0-9_-]{5,19}$/
    chn     = /^[\u0391-\uFFE5]+$/,
    idcard  = /^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/,
    mobile  = /^13[0-9]{1}[0-9]{8}$|15[0-9]{1}[0-9]{8}$|18[0-9]{1}[0-9]{8}$|17[0-9]{1}[0-9]{8}$/
    prove   =/^[a-zA-Z0-9]{4}$/
    
    var istrue=true;
    $("#userName").blur(function(){
    	var name=$(this).val();	
		if(!chn.test(name)){
				istrue=false;
    			$(".userName1").html("请输入正确的姓名格式")
    	}else {
			istrue=true;
			$(".userName1").html("");
		}
	});	
	
	$("#userTel").blur(function(){
    	var tel=$(this).val();	
		if(!mobile.test(tel)){
				istrue=false;
    			$(".userTel1").html("请输入的电话号")
    	}else {
			istrue=true;
			$(".userTel1").html("");
		}
	});	
	
	$("#userEmail").blur(function(){
    	var email=$(this).val();	
		if(!mobile.test(email)){
				istrue=false;
    			$(".userEmail1").html("请输入的邮箱")
    	}else {
			istrue=true;
			$(".userEmail1").html("");
		}
	});
	
	$("#send").click(function(){
		var name=$("#userName").val();
		var tel=$("#userTel").val();
		var email=$("#userEmail").val();
		if(name!="" || tel!="" || email!=""){
			if(istrue==true){
				alert("发送成功")
			}
		}else{
			$(".userTel1").html("请输入的电话号");
			$(".userName1").html("请输入正确的姓名格式");
			$(".userEmail1").html("请输入的邮箱")
		}
	})
   	
})
