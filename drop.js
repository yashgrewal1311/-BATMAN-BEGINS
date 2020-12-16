class Drop {
    constructor(x, y) {
        var options = {
            restitution: 0.4,
            friction: 0.7,
            density: 1.2
        }
        this.body = Bodies.circle(x, y, 5, options);
        World.add(world, this.body);
    }

    update() {
        if (this.body.position.y > height) {
            Body.setPosition(this.body, { x: random(10, width), y: 0 });
        }
    }

    display() {
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, 5);
    }
}