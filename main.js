var canvas_paint="empty";
var x_last_positions, y_last_positions;
var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="green";

width=4;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    canvas_paint="mousedown";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    current_X_position=e.clientX-canvas.offsetLeft;
    current_Y_position=e.clientY-canvas.offsetTop;
    if(canvas_paint=="mousedown")
    {
        ctx.beginPath();
        ctx.Strokestyle=color;
        ctx.linewidth=width;
        ctx.moveTo(x_last_positions, y_last_positions);
        console.log("last positions of x and y coordinates=");
        console.log("x "+ x_last_positions + "y "+ y_last_positions);
        ctx.lineTo(current_X_position, current_Y_position);
        console.log("current positions of x and y coordinates=");
        console.log("x "+ current_X_position + "y "+current_Y_position);
        ctx.stroke();
    }
    x_last_positions=current_X_position;
    y_last_positions=current_Y_position;
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    canvas_paint="mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mousedleave(e){
    canvas_paint="mouseleave";
}

function remove_drawing(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
}
