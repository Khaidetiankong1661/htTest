function Product(){
	this.name = '';
	this.price = '';
	this.description = '';
	this.youhuijia = '';
	this.zhekou = '';
	this.sales = '';
	this.image = '';
}

Product.prototype={
	bindDom:function(){
		var str = '';
		str+='<dl>'
			str+='<dt><a><img src="'+this.Image+'" width="384" height="225"/></a></dt>'
			str+='<dd>'
                str+='<span><a><em>'+this.zhekou+'折扣/</em>'+this.name+'</a></span>'
            str+='</dd>'
            str+='<dd class="price">'
                str+='<em>价格'+this.price+'</em>'
                str+='<del>优惠价'+this.youhuijia+'</del>'
                str+='<i>减了多少'+this.sales+'</i>'
            str+='</dd>'
        str+='</dl>'
        return str;
	},
	bindEvents:function(){
		
	}
}

window.onload = function(){
	
	var products = [
	{name:'sdfsfd', price:111, youhuijia:1000,sales:23,zhekou:2.3,image:''},
	{name:'sdfsfd', price:111, youhuijia:1000,sales:23,zhekou:2.3,image:''},
	{name:'sdfsfd', price:111, youhuijia:1000,sales:23,zhekou:2.3,image:''},
	{name:'sdfsfd', price:111, youhuijia:1000,sales:23,zhekou:2.3,image:''},
	{name:'sdfsfd', price:111, youhuijia:1000,sales:23,zhekou:2.3,image:''},
	{name:'sdfsfd', price:111, youhuijia:1000,sales:23,zhekou:2.3,image:''},
	]
	var str = '';
	for (var i = 0; i< products.length; i++) {
		var product = new Product();
		product.name = products[i].name;
		product.price = products[i].price;
		product.youhuijia = products[i].youhuijia;
		product.zhekou = products[i].zhekou;
		product.sales = products[i].sales;
		product.image = products[i].Image;
		
		str+= product.bindDom()
	}
	var container = document.getElementById("cont");
	container.innerHTML = str;
}
