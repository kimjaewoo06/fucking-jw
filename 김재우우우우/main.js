var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth- 100;
canvas.height = window.innerHeight - 100;

ctx.fillStyle = 'yellow';
ctx.fillRect(800,150,1000,1000);