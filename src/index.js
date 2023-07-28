import cipher from './cipher.js';

console.log(cipher);

function encrypt() {
    const originalText = document.getElementById("originalText").value;
    const shift = parseInt(document.getElementById("shift").value);
    const resultText = cipher.ceasarCipher(originalText, shift);
    document.getElementById("resultText").value = resultText;
};

function decrypt() {
    const originalText = document.getElementById("originalText").value;
    const shift = parseInt(document.getElementById("shift").value);
    const resultText = cipher.ceasarCipher(originalText, 26 - shift); 
    document.getElementById("resultText").value = resultText;
};

document.getElementById("botaoencryp").addEventListener ("click",encrypt);
document.getElementById("botaodescrypt").addEventListener ("click",decrypt);
