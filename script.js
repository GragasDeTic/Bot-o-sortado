var pecas = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var correto = Array.from({length: 1], () => Math.floor(Math.random() pecas.length+1"));
//console.log( correto é "+correto);
                                                       
function novoJogo(){
  for (let k=1; k<=pecas.length; k++){
    const btt = document.createElement("button");
    btt.classlist.add ('botao');
    btt.value = [k];
    btt.innerHTML = [k];
    var pontos =0;
    btt.addEventListener("click", function (){
      if(btt.value == correto){
        pontos = pontos;
        contador.innterHTML = pontos;
        btt.style.background = "green";
        alert("parabéns! Você encontrou um botão sorteado! Você clicou em "+ pontos +" botões antes de achá-lo!");
        jogo.innerHTML = "";
      }else{
        btt.style.backgroundColor = "red";
        btt.disabled = true;
        pontos = pontos +1;
        contador.innerHTML = pontos;
      };
    });
    const jogo = document.querySelector("#jogo");
    jogo.appendChild(btt);
  };
};

bttR = document.querySelector("#bttR");
bttR.addEventlistener("click", function() {
  alert("o jogo será reiniciado.");
  location.reload();
});

  
