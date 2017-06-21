window.requestAnimationFrame = (function(){
    return  window.requestAnimationFrame       ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        function( callback ){
            window.setTimeout(callback, 1000 / 60);
        };
})();


var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
var w = canvas.offsetWidth;
var h = canvas.offsetHeight;
canvas.width = w;
canvas.height = h;

var arr = [];

for(var i=0; i<150; i++){
    arr.push(new Point(Math.random() * w, Math.random() * h));
}

function Point(x,y){
    this.x = x;
    this.y = y;
    this.r = 1 + Math.random() * 2;
    this.sx = Math.random() * 2 - 1;
    this.sy = Math.random() * 2 - 1;

    this.draw = function(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI)
        ctx.fillStyle = '#aaa'
        ctx.fill()
    }
    this.move = function(){
        this.x += this.sx/2;
        this.y += this.sy/2;
        if(this.x > w) this.sx = -Math.abs(this.sx)
        else if(this.x < 0) this.sx = Math.abs(this.sx)
        if(this.y > h) this.sy = -Math.abs(this.sy)
        else if(this.y < 0) this.sy = Math.abs(this.sy)
    }
    this.drawLine = function(p){
        var dx = this.x - p.x
        var dy = this.y - p.y
        var d = Math.sqrt(dx * dx + dy * dy)
        if(d < 100) {
            var alpha = (100 - d) / 100 * 1
            ctx.beginPath()
            ctx.moveTo(this.x, this.y)
            ctx.lineTo(p.x, p.y)
            ctx.closePath()
            ctx.strokeStyle = 'rgba(170, 170, 170, ' + alpha + ')'
            ctx.strokeWidth = 1
            ctx.stroke()
        }
    }
}

function begin(){
    ctx.clearRect(0, 0, w, h);
    for(var i=0; i<arr.length; i++){
        arr[i].move();
        arr[i].draw();
        for(var j = i + 1; j < arr.length; j++) {
            arr[i].drawLine(arr[j])
        }
    }
}

function loop(){
    requestAnimationFrame(loop);
    begin();
}
loop();
