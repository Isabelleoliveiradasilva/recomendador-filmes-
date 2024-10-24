// romance, comedia, açao

// minha mae é uma peça , +12, comedia
// como eu era antes de você, +12, romance, drama
// minha irmã e eu , 14, comédia
// velozes e furiosos, 14, ação , crime 
// guardiões da galáxia, 14, romance, aventura
// uma ideia de você, 12, drama, comédia
// o menino que descobriu o vento, 14, drama


let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("blue");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "velozes e furiosos";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "minha mãe é uma peça";          
        } else{
         return "minha irma e eu";
        }
      } else {
        if (gostaDeFantasia) {
          return "uma ideia de você";
        } else {
          return "como eu era antes de voce";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "o menino que descobriu o vento";
    } else {
      return "guardiões da galáxia";
    }
  }
}



