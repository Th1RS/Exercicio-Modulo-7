// var valorA = document.getElementById('valorA'); 
// var valorB = document.getElementById('valorB'); 
// let valorDoInput = valorA.value; 
// ("Valor do input A:" + valorDoInput);
const form = document.getElementById('valid-form');
let formvalid = false; 
function numbervalid(valorA, valorB){
  return valorB > valorA; 
}
form.addEventListener('submit', function(e) {
  e.preventDefault();
  let valorA = parseFloat(document.getElementById('valorA').value);
  let valorB = parseFloat(document.getElementById('valorB').value);
  if (numbervalid(valorA , valorB)){
    document.querySelector('.mensagem-de-erro').style.display = 'none';
    document.querySelector('.mensagem-de-sucesso').style.display = 'block';
    valorA.value = '';
    valorB.value = '';
  }
  else {
    document.querySelector('.mensagem-de-erro').style.display = 'block';
    document.querySelector('.mensagem-de-sucesso').style.display = 'none';
  }
}
);