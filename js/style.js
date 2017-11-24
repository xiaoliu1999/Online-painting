 
 //设置自适应高度
window.onload=function(){
	//获取可视像素
	    var h=document.documentElement.clientHeight;
		var w=document.documentElement.clientWidth;
 		//设置顶部条高度
		var top=document.getElementsByClassName('top')[0];
		top.style.height=0.1*h+'px';
		//设置画布宽高
		var m=document.getElementById('map');
		m.setAttribute('width',w+'px');
		m.setAttribute('height',0.8*h+'px');
		//设置bottom高度
		var b=document.getElementsByClassName('bottom')[0];
		b.style.height=0.08*h+'px';
		//设置菜单bottom值与高
		var f=document.getElementsByClassName('first_tab')[0];
		var s=document.getElementsByClassName('second_tab')[0];
		f.style.bottom=0.08*h+'px';
		f.style.height=0.07*h+'px';
		s.style.bottom=0.15*h+'px';
		s.style.height=0.07*h+'px';
		//输入框高度
		var i=document.getElementsByClassName('txt_input')[0].getElementsByTagName('input')[0];
		i.style.height=0.07*h-2+'px';
		//list框
		var list=document.getElementsByClassName('top_list_menu')[0];
		list.style.top=(0.1*h+18)+'px';
		//save
		var save=document.getElementsByClassName('save')[0];
		save.style.top=0.1*h+'px';
		save.style.height=0.9*h+'px';
		save.style.width=w+'px';
}

var icon=document.getElementsByClassName('icon');//底部图标
var first=document.getElementsByClassName("first_tab")[0];//第一个二级菜单
var second=document.getElementsByClassName("second_tab")[0];//第二个二级菜单
var color_brush=document.getElementsByClassName('brush')[0].getElementsByClassName('color');//笔刷色块
var color_text=document.getElementsByClassName('text')[0].getElementsByClassName('color');//文字色块
var color_shape=document.getElementsByClassName('shape_color')[0].getElementsByClassName('color');//形状色块
var color_bg=document.getElementsByClassName('bg')[0].getElementsByClassName('color');//背景色块
var brush=document.getElementsByClassName('brush')[0];//笔刷
var txt=document.getElementsByClassName('text')[0];//文本
var txt_input=document.getElementsByClassName('txt_input')[0];//文本输入框
var shape=document.getElementsByClassName('shape')[0];//形状
var shape_color=document.getElementsByClassName('shape_color')[0];//形状色块
var shape_i=document.getElementsByClassName('shape_i');//图形
var shape_p=shape.getElementsByTagName('p');//填充方式
var bg=document.getElementsByClassName('bg')[0];//背景
var top_list=document.getElementsByClassName('top_list')[0];//顶部列表
var top_list_menu=document.getElementsByClassName('top_list_menu')[0];//顶部列表菜单
 //设置icon选中样式
 var Icon='brush';
 var icons=['brush','text','shape','bg','eraser','back'];
for(var i=0;i<icon.length;i++)
{
	(function(i){
 		icon[i].ontouchstart=function(){
 			Icon=icons[i];
 			top_list_menu.setAttribute('class', 'top_list_menu');
   			if(i==1||i==2){
 				first.setAttribute('class','row first_tab first_tab_active');
 				second.setAttribute('class','row second_tab second_tab_active');
 			}
 			else if(i==0||i==3)
 			{
 				first.setAttribute('class','row first_tab first_tab_active');
 				second.setAttribute('class','row second_tab');
 			}
 			else{
 				first.setAttribute('class','row first_tab');
 				second.setAttribute('class','row second_tab');
 			}
 			switch (i){
 				case 0:{
  					brush.setAttribute('class','row brush brush_active');
   					txt.setAttribute('class','row text');
  					txt_input.setAttribute('class','txt_input');
  					shape_color.setAttribute('class','row shape_color');
  					shape.setAttribute('class','row shape');
  					bg.setAttribute('class','row bg');
  				}break;
 				case 1:{
 					brush.setAttribute('class','row brush');
  					txt.setAttribute('class','row text text_active');
  					txt_input.setAttribute('class','txt_input txt_input_active');
  					shape.setAttribute('class','row shape');
  					shape_color.setAttribute('class','row shape_color');
  					bg.setAttribute('class','row bg');
   				}break;
 				case 2:{
 					brush.setAttribute('class','row brush');
  					txt.setAttribute('class','row text');
  					txt_input.setAttribute('class','txt_input');
  					shape.setAttribute('class','row shape shape_active');
  					shape_color.setAttribute('class','row shape_color shape_color_active');
  					bg.setAttribute('class','row bg');
 				}break;
 				case 3:{
 					brush.setAttribute('class','row brush');
  					txt.setAttribute('class','row text');
  					txt_input.setAttribute('class','txt_input');
  					shape.setAttribute('class','row shape ');
  					shape_color.setAttribute('class','row shape_color');
  					bg.setAttribute('class','row bg bg_active');
 				}
 				 
 			}
 			for(var m=0;m<icon.length;m++)
			{
				if(m==i)
 					icon[m].setAttribute('class','icon icon_active');
				else
					icon[m].setAttribute('class','icon');
			}
			setTimeout(function(){
 				icon[5].setAttribute('class','icon');
 			},500);
			
		}
	})(i);
}

//设置形状选中样式
var Shape='直线';
var shape_style='描边'
var shapes=['直线','矩形','圆'];
var shape_s=['描边','填充'];
 for(var i=0;i<shape_i.length;i++){
 	(function(i){
 		shape_i[i].ontouchstart=function(){
 			Shape=shapes[i];
 			for(var m=0;m<shape_i.length;m++)
			{	 
				if(m==i)
 					shape_i[m].setAttribute('class','shape_i shape_i_active');
				else
					shape_i[m].setAttribute('class','shape_i');
			}
		}
 	})(i);
 	shape_p[0].ontouchstart=function(){
 		shape_p[1].removeAttribute("class");
 		shape_p[0].setAttribute("class","shape_p_active");
 		shape_style="描边";
 	}
 	shape_p[1].ontouchstart=function(){
 		shape_p[0].removeAttribute("class");
 		shape_p[1].setAttribute("class","shape_p_active");
 		shape_style="填充";
 	}
}
 //设置色块选中样式
 var Color='#000000';
 var colors=['#000000','#ffffff','#FF9900','#CC6699','#009966','#996600','#FF6600','#FF33CC'];
for(var i=0;i<color_brush.length;i++){
	(function(i){
 		color_brush[i].ontouchstart=function(){
 			Color=colors[i];
 			for(var m=0;m<color_brush.length;m++)
			{	 
				if(m==i)
 					color_brush[m].setAttribute('class','color color'+ m+' color_active');
				else
					color_brush[m].setAttribute('class','color color'+m);
			}
		}
  		color_text[i].onclick=function(){
 			Color=colors[i];
			for(var m=0;m<color_text.length;m++)
			{	 
				if(m==i)
 					color_text[m].setAttribute('class','color color'+ m+' color_active');
				else
					color_text[m].setAttribute('class','color color'+m);
			}
		}
  		color_shape[i].ontouchstart=function(){
 			Color=colors[i];
			for(var m=0;m<color_shape.length;m++)
			{	 
				if(m==i)
 					color_shape[m].setAttribute('class','color color'+ m+' color_active');
				else
					color_shape[m].setAttribute('class','color color'+m);
			}
		}
  		color_bg[i].ontouchstart=function(){
 			Color=colors[i];
 			document.body.style.backgroundColor=Color; 
 			for(var m=0;m<color_bg.length;m++)
			{	 
				if(m==i)
 					color_bg[m].setAttribute('class','color color'+ m+' color_active');
				else
					color_bg[m].setAttribute('class','color color'+m);
			}
		}
	})(i);
}
//菜单栏
top_list.ontouchstart = function() {
		var curr = top_list_menu.getAttribute('class');
		if(curr.indexOf('top_list_menu_active') != -1) {
			top_list_menu.setAttribute('class', 'top_list_menu');
 		} else {
			top_list_menu.setAttribute('class', 'top_list_menu top_list_menu_active');
 			brush.setAttribute('class','row brush');
   			txt.setAttribute('class','row text');
  			txt_input.setAttribute('class','txt_input');
  			shape_color.setAttribute('class','row shape_color');
  			shape.setAttribute('class','row shape');
  			bg.setAttribute('class','row bg');
  			first.setAttribute('class','row first_tab');
 			second.setAttribute('class','row second_tab');
 		}
}
 