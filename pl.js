//pl = createSprite(width/2, height/2, 0, 0)
function Pl(x, y, r) {
  this.pos = createVector(x, y);
  this.r = r;
  this.vel = createVector(0, 0);




//pl.addImage(img1)
//pl.scale = 0.071
//pl.setCollider("circle", 0, 0, 330);
//pl.debug = true;
this.update = function() {
  var newvel = createVector(mouseX -width/2,  mouseY-height/2);
  newvel.setMag(4);
  this.vel.lerp(newvel, 0.95);
  this.pos.add(this.vel);
}

this.eats = function(other) {
  let v = createVector(other.position.x, other.position.y)
  var d = p5.Vector.dist(this.pos, v);
  //10 for other.r
  if (d < this.r + 10) {
    var sum = PI * this.r *this.r + PI * 10 * 10
    this.r = sqrt(sum/PI)
    //this.r += 2

    return true;
  } else {
    return false;
  }
}

this.show = function() {
   fill(0);
   ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2);
 }
}
