const BoidArray = [];
var running = true;
function init() {
    var a = Boid(0, 0, 0);
    var b = Boid(0, 0, 0);
    var c = Boid(0, 0, 0);
    BoidArray.push(a);
    BoidArray.push(b);
    BoidArray.push(c);
}
function main() {
    init();
}

function gameloop() {
    while (running) {
        BoidArray.forEach((b) =>
            b.debug();
        //   b.render()
        b.move()
    );
    // canvas.render()

    }

}


main()