console.debug("Loaded boid.js")

increment = 0;

function randomColor() {
	return Math.floor(Math.random() * 16777215).toString(16);
}

; Boid = (function () {
	var C = function () { return constructor.apply(this, arguments); }
	var p = C.prototype;

	//list the attributes
	p.x;
	p.y;
	p.angle; //rad
	p.color;
	p.velocity;

	//construct
	function constructor(x,y,angle,color) {
		this.x = x;
		this.y = y;
		this.angle = angle;
		this.color = "#" + randomColor();
		this.velocity = Math.floor(Math.random() * 10) + 10; //10-20
	}

	p.debug = function () {
		console.log("B")
	}

	p.render = function () {
		canvas.drawTriangle(this.x, this.y, yhis.angle)
	}

	p.move = function () {
		this.x = this.x + 10;
		this.y = this.y
	}



	//unleash your class
	return C;
})();