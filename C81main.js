canvas = document.getElementById("myCanvas");
	 ctx = canvas.getContext("2d");
	 ctx.beginPath();
	 color = "red";
	 ctx.strokeStyle = color;
	 ctx.lineWidth = 2;
	 ctx.arc(200,200,40,0,2*Math.PI);
	 ctx.stroke();
    
canvas.addEventlistener("mousedown",my_mousedown);

function my_mousedown(e){
    //color = document.getElementById("color").value;
    //console.log(color)
    mouse_x = e.clientX-offsetLeft;
    mouse_y = e.clientx-offsetTop;
    console.log("X =" + mouse_x + ", Y =" + mouse_y);
    circle(mouse_x,mouse_y);
}

function circle(mouse_x,mouse_y){
    ctx.beginPath();
	 color = "red";
	 ctx.strokeStyle = color;
     ctx.lineWidth = 2;
	 ctx.arc(200,200,40,0,2*Math.PI);
	 ctx.stroke();
}