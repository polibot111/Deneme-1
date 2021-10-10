

var x_camera_2 =document.getElementById('x-2');
var y_camera_2 =document.getElementById('y-2');
var x_camera_3=document.getElementById('x-3');
var y_camera_3 =document.getElementById('y-3');


var x_camera_1 = document.getElementById('x-1');
var y_camera_1 = document.getElementById('y-1');
function up1() {
var number = parseInt(y_camera_1.innerHTML);
y_camera_1.innerHTML = number+1;
console.log(number+1);
}
function down1() {
var number = parseInt(y_camera_1.innerHTML);
y_camera_1.innerHTML = number-1;
console.log(number-1);
}
function left1() {
var number = parseInt(x_camera_1.innerHTML);
x_camera_1.innerHTML = number-1;
console.log(number-1);
}
function right1() {
var number = parseInt(x_camera_1.innerHTML);
x_camera_1.innerHTML = number+1;
console.log(number+1);
}