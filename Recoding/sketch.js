// Fonction qui dessine un carré de la densité voulue aux coordonnées voulues
  function dessin_carre(xMin, xMax, Ymin, Ymax, varMin, varMax) {
  // Double boucle de parcours du canva
  for(let i = xMin; i<=xMax; i++){
    for(let j = Ymin; j<=Ymax; j++){
      // On choisis aléatoirement une des valeurs de densité
      let n = 200;
      let i2 = floor(i/xMax*n)/n;
      let y2 = floor(j/Ymax*n)/n;
      let couleurRandom = noise(i2*40,y2*40)*255;
      // On prépare la couleur à utiliser
      stroke(couleurRandom);
      //  On dessine le point qui aura la couleur préparée
      point(i, j);
    }
  }
}

function setup() {
  createCanvas(720, 555);
  background(255, 255, 255);
}  

function draw() {
  noStroke();
  frameRate(0); 
  // Appel de la fonction aux coordonnées x allant de 0 à 720 pixels et y de 0 à 555 pixels. La couleur va elle de 0 (noir) à 100 (blanc)
  dessin_carre(0, 720, 0, 555, 0, 100); 
}