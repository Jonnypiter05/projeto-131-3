img = "";
objects = [];
modelStatus = "";

function preload(){
  img = loadImage('dog_cat.jpg');
}


function setup() {
  canvas = createCanvas(640, 420);
  canvas.center();
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status: Detectando Objetos";
}

function modelLoaded() {
  console.log("Modelo Carregado!")
  modelStatus = true;
  objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
  if (error) {
    console.log(error);
  }
  console.log(results);
  objects = results;
}


function draw() {
  image(img, 0, 0, 640, 420);

      if(modelStatus != "")
      {
        for (i = 0; i < objects.length; i++) {
          document.getElementById("status").innerHTML = "Status: Objeto Detectado";
    
          fill("#FF0000");
          percent = floor(objects[i].confidence * 100);
          text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
          noFill();
          stroke("#FF0000");
          rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
      }
      fill("#FF0000");
      text("ar", 526, 281);
      noFill();
      stroke("#FF0000");
      rect(30, 60, 450, 350 );
      fill("#FF0000");
      text("sofa", 496, 281);
      noFill();
      stroke("#FF0000");
      rect(300, 90, 270, 320 );
      fill("#FF0000");
      text("cubo", 132, 80);
      noFill();
      stroke("#FF0000");
      rect(300, 90, 270, 320 );
      fill("#FF0000");
      text("pet", 132, 168);
      noFill();
      stroke("#FF0000");
      rect(300, 90, 270, 320 );
      fill("#FF0000");     
      text("nintendo", 132, 80);     
      noFill();     
      stroke("#FF0000");     
      rect(300, 90, 270, 320 );
      fill("#FF0000");     
      text("tv", 132, 80);     
      noFill();     
      stroke("#FF0000");     
      rect(300, 90, 270, 320 );                                                   
}