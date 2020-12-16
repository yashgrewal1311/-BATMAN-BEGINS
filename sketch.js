const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var lightnings = new Array(3);
let rand;

var boy;

var drops = [];

function preload() {
  for (let i = 0; i < lightnings.length; i++) {
    lightnings[i] = loadImage(`lightning${i + 1}.png`);
  }
  // console.log(lightnings);
}

function setup() {
  createCanvas(400, 600);

  rand = floor(random(3));

  engine = Engine.create();
  world = engine.world;

  boy = new Umbrella(width / 2, height - 150);

  for (let i = 0; i < 100; i++) {
    drops.push(new Drop(random(width), random(height)));
  }
}

function draw() {
  background(0);
  Engine.update(engine);

  boy.display();
  for (let i = 0; i < drops.length; i++) {
    drops[i].display();
    drops[i].update();
  }

  if (frameCount % 30 < 10) {
    image(lightnings[rand], width / 2, 100, 100, 200);
  }else if (frameCount % 30 == 10) {
    rand = floor(random(3));
  }
}

