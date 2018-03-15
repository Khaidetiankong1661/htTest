window.onload = function(){
	
	function $(id) {return document.getElementById(id);}
	
	var js_slider = $("js_slider");
	var slider_main_block = $("slider_main_block");
	var imgs = slider_main_block.children;
	var slider_ctrl = $("slider_ctrl");
	
	for (var i = 0; i<imgs.length; i++) {
		
		var span = document.createElement("span");
		span.className = "slider-ctrl-con";
		span.innerHTML = imgs.length - i;
		slider_ctrl.insertBefore(span, slider_ctrl.children[1]);
	}
	var spans = slider_ctrl.children;
	spans[1].setAttribute("class","slider-ctrl-con current");
	
	var scrollWidth = js_slider.scrollWidth;
	for (var i = 1; i < imgs.length; i++) {
		imgs[i].style.left = scrollWidth +"px";
	}
	
	var iNow = 0;
	for (var k in spans) {
		spans[k].onclick = function(){
			if (this.className == "slider-ctrl-prev") {
				animates(imgs[iNow], {left: scrollWidth});
				
				--iNow < 0 ? iNow = imgs.length -1 : iNow;
				
				imgs[iNow].style.left = -scrollWidth +"px";		
				animates(imgs[iNow], {left: 0});
				
				setSqure();
				
			} else if(this.className == "slider-ctrl-next"){
				
				autoplay();
			} else { // 小方块的点击事件
				
				var that = this.innerHTML - 1;
				
				if (that > iNow) {
					animates(imgs[iNow], {left: -scrollWidth});
					imgs[that].style.left = scrollWidth +"px";
					
				} else {
					animates(imgs[iNow], {left: scrollWidth});
					imgs[that].style.left = -scrollWidth +"px";	
				}
				iNow = that;
				animates(imgs[iNow], {left: 0});
				
				setSqure();
			}
		}
	}
	
	function setSqure(){
		for (var i = 1; i < spans.length -1; i++) {
			spans[i].className = "slider-ctrl-con";
		}
		spans[iNow +1].className = "slider-ctrl-con current";
		
	}
	
	var timer = null;
	timer = setInterval(autoplay, 2000);
	function autoplay() {
		animates(imgs[iNow], {left: -scrollWidth});
				
 		++iNow > imgs.length - 1  ? iNow = 0 : iNow;
				
		imgs[iNow].style.left = scrollWidth +"px";		
		animates(imgs[iNow], {left: 0});
				
		setSqure();
	}
	
	js_slider.onmouseover = function(){
		clearInterval(timer);
	}
	js_slider.onmouseout = function(){
		clearInterval(timer);
		timer = setInterval(autoplay, 2000);
	}
	
}
