// put setup code here
function setup() {
  print('hello world 🐢🐢🐢');
  
  // Taille de la fenetre
  createCanvas(500,500);
  
  // Couleur de fond
  background(20, 90, 100);
  // background(random(100));
  
  // Changer le nombre d'images par seconde
  frameRate(); 
  
  // Changer le mode de définission des couleurs
  colorMode(); // HSB...
}

// put drawing code here
function draw() {
  // Gestion des bordures
  noStroke();
  stroke(255,0,0);

  // Gestion de la couleur
  fill(50,60,70);
  
  // Création d'une ellipse (tailleX, tailleY, positionX, positionY)
  ellipse(55,55,55,55);

  // Gestion de la couleur
  fill(60,120,100);

  // Création d'un rectangle (tailleX, tailleY, positionX, positionY)
  rect(100, 50, 200, 300)
}

// Prendre un exemple et modifier cet exemple + commenter sur la réflexion sur l'exo et ce qu'on en a compris + publier le code sur GIT