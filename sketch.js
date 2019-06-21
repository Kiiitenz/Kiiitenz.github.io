let pw;
let img2;
var pl;
var zoom =1;
var play = false;
var x = 160;
var y = 130;

function preload() {
  img2 = loadImage("Img2.png");
}

function setup() {
  pw = new Group();
  //createCanvas(1000, 700);
  createCanvas(windowWidth, windowHeight)
  for (let i = 0; i < 2501; i++) {
    createSprite(random(0, 2500), random(0, 2500), 1.7, 1.7);
  }
//Player
//function pl(x, y) {
//this.pos = createVector(mouseX, mouseY);
//this.show = function()

pl = new Pl(1250, 1250, 22.1)

  for (let i = 0; i < 100; i++) {
    var s = createSprite(random(0, 2000), random(0, 4000));
    s.setSpeed(random(0.0001, 7), random(0, 45));
    pw.add(s);
    s.height = 11.1
    s.width = 11.1
  //  s.debug = true;
    s.addImage(img2)
    s.setCollider("circle", 0, 10, 7)
  }
}

function draw() {
  background(25, 23, 123);
  if(!play) {
    textAlign(CENTER)
    textSize(27)
    noStroke()
    drawSprites();
    fill(0)

    rect(width/2 - x/2, height/2 - y/2, x, y, 27.1)
    fill(255)
    rect(width/2 - 65, height/2 - 45, 130, 90, 27.1)
    if (mouseX > width/2 - 65 && mouseX < width/2 + 65 && mouseY > height/2 - 45 && mouseY < height/2 + 45) {
      x = 170
      y = 140
      stroke(10)
    } else {
    x = 160
    y = 130
    stroke(0)

    }
    if (mouseIsPressed) {
      play = true
    }
    fill(0)
    textFont("Comic Sans Ms")
    text("Play!", width/2, height/2 +5)
  } else {
    // image(img2, width/2, height/2)
    //-pl.pos.x
    translate(width/2, height/2)
    var newzoom = 29.1 / pl.r
    zoom = lerp(zoom, newzoom, 0.1);
    scale(zoom)
    translate(-pl.pos.x, -pl.pos.y)

  for (var i = pw.length -1; i >=0; i--) {
    if (pl.eats(pw[i])) {
    //epw.remove(i, 1);
    //pw.remove(n)
    pw[i].remove();
    //for (let i = 0; i < 100; i++) {
      var s = createSprite(random(0, 2000), random(0, 4000));
      s.setSpeed(random(0.0001, 7), random(0, 45));
      s.height = 11.1
      s.width = 11.1
      s.addImage(img2)
    pw.add(s);
  }
  }

  for (let i = 0; i < pw.length; i++) {
    let s = pw[i];
      if (s.position.x > 2500) {
        s.position.x = -100;
      }

      if (s.position.y > 2500) {
        s.position.y = -100;
      }
    }
  //pl.show()
    //if (player.bounce(pw)) {
      //remove(pw)
    //}
  //
  //
  drawSprites();
  pl.show()
  pl.update()
  }
  }
