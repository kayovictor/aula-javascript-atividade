var butao = document.getElementsByTagName('button')[0];
var inserir = document.getElementById('senha');
var inserir01 = document.getElementById('nome');
butao.addEventListener('click', () => {  
if((inserir.value === '') || (inserir01 === '')){
  alert('*Usuário e/ou Senha estão inválidos.');
}
else{
    alert('Você será direcionado para nossa página principal.');
}
});