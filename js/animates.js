
function animates(obj,json,fu){
	
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var flag = true;
		for(var attr in json) {			
			
			// step
			var now = json[attr];
//			var current = parseInt(getStyle(obj, attr));
			
			if (attr == "opacity") {
				current = parseInt(getStyle(obj, attr) *100);
			} else{
				current = parseInt(getStyle(obj,attr));
			}
			
			var step = (now - current) / 10;
			
			step > 0 ? Math.ceil(step) : Math.floor(step);
			
			if (attr == "opacity") {
				if ("opacity" in obj.style) {
					obj.style.opacity = (current +step) / 100;
				} else {
					obj.style.filter = "alpha(opacity = "+(current + step)+")";
				}
				
			} else if (attr == "zIndex") {
				obj.style.zIndex = json[attr];
				
			} else {
				obj.style[attr] = current + step +"px";
			}
			
			if (current != now) {
				flag = false
			}
		}
		
		
		if (flag) {
			clearInterval(obj.timer);
			if (fu) {
				fu();
			}
		}
		
	},20);
	
}

function getStyle(obj, att) {
	if (obj.currentStyle) {
		return obj.currentStyle[att];
	} else{
		return window.getComputedStyle(obj, null)[att];
	}
}
