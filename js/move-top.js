$(function(){
	//首页图片切换
	$(document).ready(function(){
		var oImg = document.getElementById("oImg");
		var time = null;
		var Imgs = ["images/1.jpg","images/2.jpg"];
		var num = 0;
		oImg.src = Imgs[num];
			time= setInterval(function(){
				num++
				if(num>=Imgs.length){
					num=0;
				}
				oImg.src=Imgs[num];
			},3500)
	})
	

})
