let start_img, reset_img, joya_img, joya_sound, offsetX = 0, offsetY = 0;
let count = 0, is_hitting = false;
const count_max = 108;


function preload() {
  start_img = loadImage("assets/start.png");
  reset_img = loadImage("assets/reset.png");
  joya_img = loadImage("assets/joyanokane.png");
  joya_sound = loadSound('assets/Budda_large_bell.mp3');
}

function setup() {
  pixelDensity(1);
  const myCanvas = createCanvas(windowWidth * 0.6, windowHeight * 0.75);
  myCanvas.parent('sketch-holder');

  joya_img.resize(height / 2, height / 2);
  imageMode(CENTER);

  joya_sound.setVolume(0.1);
  joya_sound.playMode('sustain');

  count = 0;
  background(255);
}

function draw() {
  background(255,64);


  push();
  if (is_hitting) {
    offsetX = random(- width / 64, width / 64);
    offsetY = random(- width / 64, width / 64);
    translate(offsetX, offsetY);
  }
  image(joya_img, width / 2, height / 2);  
  pop();

  if (is_hitting) {
    joyaHit();
  }

  fill(0);
  textSize(24);
  textAlign(CENTER);
  text(`${count} HIT`, width / 2, height * 0.8);

  if (!is_hitting) {
    if (count == 0) {
      image(start_img, width / 2, height / 2);
    }
    else {
      image(reset_img, width / 2, height / 2);
    }
  }
}

function mouseClicked() {
  if (!is_hitting) {
    if (count == 0) {
      is_hitting = true;
      clear();
    }
    else if (count >= 108) {
      count = 0;
    }
  }
}

function joyaHit() {
  joya_sound.play();
  count += 1;
  if (count >= 108) {
    is_hitting = false;
  }
}