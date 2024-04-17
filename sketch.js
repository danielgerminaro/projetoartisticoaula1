let cor;
let circuloX;
let circuloY;

const numCirculos = 5;
const raioCirculo = 40;

function setup() {
  createCanvas(400, 400);
  background("#9E9E9E");
  cor = color(random(0, 255), random(0, 255));
  
  circuloX = Array.from({ length: numCirculos }, () => 0);
  circuloY = Array.from({ length: numCirculos }, () => random(height));
}

function draw() {
  fill(cor);
  
  for (let contador = 0; contador < numCirculos; contador++) {
    circle(circuloX[contador], circuloY[contador], raioCirculo);
    circuloX[contador] += random(0, 10);
    circuloY[contador] += random(-12, 10);

    if (circuloX[contador] >= width) {
      reiniciarCirculo(contador);
    }
  }

  if (mouseIsPressed) {
    cor = color(random(0, 255), random(0, 255), random(0, 255), random(0, 255));
  }
}

function reiniciarCirculo(indice) {
  circuloX[indice] = 0;
  circuloY[indice] = random(height);
}