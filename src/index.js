import cipher from './cipher.js';

console.log(cipher);

function encrypt() {
  const originalText = document.getElementById("originalText").value;  /* box de digitar a mensagem*/
  const shift = parseInt(document.getElementById("shift").value);      /* botao de deslize do valor*/
  const resultText = cipher.encode(shift, originalText);         /* resultado puxando do cipher.js*/
  document.getElementById("resultText").value = resultText;            /* lançando para o box do resultado*/
}

function decrypt() {
  const originalText = document.getElementById("originalText").value;  /* pegando o que foi escrito no encript*/
  const shift = parseInt(document.getElementById("shift").value);      /* pegando o valor do off set*/
  const resultText = cipher.decode (shift, originalText);    /* realizando o calculo*/
  document.getElementById("resultText").value = resultText;            /* resultado*/
}

document.getElementById("botaoencryp").addEventListener ("click",encrypt);
document.getElementById("botaodescrypt").addEventListener ("click",decrypt);  /* botoes */
