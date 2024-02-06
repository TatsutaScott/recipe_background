class p5_Particle {
  /**make a particle
   * @param {Number} x - x position
   * @param {Number} y - y position
   * @param {Number} r - radius
   */
  constructor(x, y, r) {
    this.position = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.radius = r;
  }

  show() {
    circle(this.position.x, this.position.y, this.radius);
  }

  wrap() {
    if (this.position.x >= width) {
      this.position.x = 0;
    } else if (this.position.x <= 0) {
      this.position.x = width;
    }

    if (this.position.y >= height) {
      this.position.y = 0;
    } else if (this.position.y <= 0) {
      this.position.y = height;
    }
  }

  bounce() {
    if (this.position.x >= width || this.position.x <= 0) {
      this.velocity.x *= -1;
    }

    if (this.position.y >= height || this.position.y <= 0) {
      this.velocity.y *= -1;
    }
  }

  applyForce(force) {
    this.acceleration.add(force);
  }
}
