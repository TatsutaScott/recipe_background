const particle_num = 10;
const food_particles = [];

function setup() {
  createCanvas(600, 600);

  //instatiate particles
  for (let i = 0; i < particle_num; i++) {
    food_particles.push(new p5_Particle(random(width), random(height), 10));
  }
}

function draw() {
  background("gray");
  for (let p of food_particles) {
    p.show();
  }
}
