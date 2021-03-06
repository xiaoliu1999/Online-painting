var Map = document.getElementById('map');
var cvs = Map.getContext('2d');

var brush_fontsize;
var text_fontsize;
var shape_fontsize;
var text_input;

var X, Y, sx, sy;
var curr_img;
var h = document.documentElement.clientHeight;
var w = document.documentElement.clientWidth;
var paint=false;
Map.onmousedown = function(e) {
	paint=true;
	//清屏
	top_list_menu.setAttribute('class', 'top_list_menu');
	brush.setAttribute('class', 'row brush');
	txt.setAttribute('class', 'row text');
	txt_input.setAttribute('class', 'txt_input');
	shape_color.setAttribute('class', 'row shape_color');
	shape.setAttribute('class', 'row shape');
	bg.setAttribute('class', 'row bg');
	first.setAttribute('class', 'row first_tab');
	second.setAttribute('class', 'row second_tab');

	//获取数据
	brush_fontsize = brush.getElementsByTagName('input')[0].value;
	text_fontsize = txt.getElementsByTagName('input')[0].value;
	shape_fontsize = shape_color.getElementsByTagName('input')[0].value;
	text_input = txt_input.getElementsByTagName('input')[0].value;
	X = e.pageX;
	Y = e.pageY;
	cvs.beginPath();
	switch(Icon) {
		case "brush":
			{
				drawbrush(brush_fontsize, Color, X, Y - 0.1 * h);
			}
			break;
		case "text":
			{
				drawtext(text_fontsize, Color, text_input, X, Y - 0.1 * h);
			}
		case "shape":
			{
				sx = X;
				sy = Y;
				curr_img = cvs.getImageData(0, 0, w, h);
			}
			break;
		case "eraser":
			{
				cvs.clearRect(X, Y - 0.1 * h, text_fontsize, text_fontsize);
			}
			break;
	}
}
Map.onmousemove = function(e) {
	X = e.pageX;
	Y = e.pageY;
	if(paint==true){
		switch(Icon) {
		case "brush":
			{
				drawbrush(brush_fontsize, Color, X, Y - 0.1 * h);
			}
			break;
		case "text":
			{

			}
			break;
		case "shape":
			{
				switch(Shape) {
					case "直线":
						{
							shape_line(shape_fontsize, Color, sx, sy - 0.1 * h, X, Y - 0.1 * h)
						}
						break;
					case "矩形":
						{
							drawshape_rect(shape_fontsize, Color, sx, sy - 0.1 * h, X, Y - 0.1 * h,shape_style);
						}
						break;
					case "圆":
						{
							shape_arc(shape_fontsize, Color, sx, sy - 0.1 * h, X, Y - 0.1 * h,shape_style);
						}
				}
			}
			break;
		case "eraser":
			{
				cvs.clearRect(X, Y - 0.1 * h, text_fontsize, text_fontsize);
			}
	}
	}
}
Map.onmouseup=function(){
	paint=false;
}
//撤销操作
var back = document.getElementsByClassName('icon')[5].getElementsByTagName('i')[0];
var pre_map = new Array;
var ti = 0; //绘图次数
var bs = 0; //撤销步数
Map.onclick = function() {
	bs = 0;
	ti++;
	pre_map[ti] = cvs.getImageData(0, 0, w, h);
}
back.onclick = function() {
	cvs.clearRect(0, 0, w, h);
	cvs.putImageData(pre_map[ti - (1 + bs)], 0, 0);
	bs++;
}
//重做
var renew=document.getElementById('new');
renew.onclick=function(){
	cvs.clearRect(0,0,w,h);
	document.body.style.backgroundColor="#fff";
	save_div.setAttribute('class',"save");
 }
//保存
var save=document.getElementById('save');
var save_div=document.getElementsByClassName('save')[0];
var save_img=save_div.getElementsByTagName('img')[0];
save.onclick=function(){
	var ddd=Map.toDataURL();
	save_img.src=ddd;
    save_div.setAttribute('class',"save save_active");
 }
//关于
var about=document.getElementById('about');
about.onclick=function(){
	alert(" Copyright © 2017 Michael. All rights reserved. ");
}

 
 


function drawbrush(width, color, x, y) {
	cvs.strokeStyle = color;
	cvs.lineWidth = width;
	cvs.lineTo(x, y);
	cvs.stroke();

}

function drawtext(width, color, txt, x, y) {
	cvs.fillStyle = color;
	cvs.lineWidth = width;
	cvs.font = width + 'px Arial';
	cvs.fillText(txt, x, y);
}

function shape_line(width, color, sx, sy, x, y) {
	cvs.fillStyle = color;
	cvs.lineWidth = width;
	cvs.clearRect(0, 0, w, h);
	cvs.putImageData(curr_img, 0, 0);
	cvs.beginPath();
	cvs.moveTo(sx, sy);
	cvs.lineTo(x, y);
	cvs.closePath();
	cvs.stroke();
}

function drawshape_rect(width, color, sx, sy, x, y,style) {
 	cvs.lineWidth = width;
	cvs.clearRect(0, 0, w, h);
	cvs.putImageData(curr_img, 0, 0);
	cvs.beginPath();
	cvs.rect(sx, sy, x - sx, y - sy);
	if(style=="描边")
	{ 
		cvs.strokeStyle = color;
		cvs.stroke();
	}
	else
	{	cvs.fillStyle = color;
		cvs.fill();
	}
	
}

function shape_arc(width, color, sx, sy, x, y,style) {
	
	cvs.lineWidth = width;
	var a = (x - sx) / 2;
	var b = (y - sy) / 2;
	var x = (x + sx) / 2;
	var y = (y + sy) / 2;
	var r = 0;
	cvs.clearRect(0, 0, w, h);
	cvs.putImageData(curr_img, 0, 0);
	cvs.beginPath();
	for(r; r < 2 * Math.PI; r += ((10 / 180) * Math.PI)) {
		cvs.lineTo(x + a * Math.cos(r), y + b * Math.sin(r));
		if(style=="描边"){
			cvs.strokeStyle = color;
			cvs.stroke();
		}
		else{
			cvs.fillStyle = color;
			cvs.fill();
		}
		
	}
}