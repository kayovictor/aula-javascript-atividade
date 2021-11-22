var numero = (n) =>{
   var inserir = document.getElementsByTagName('p')[0].innerHTML;
   document.getElementsByTagName('p')[0].innerHTML = inserir + n;
}

var limpar =function(){
    var inserir = document.getElementsByTagName('p')[0].innerHTML = '';
}

function limparUm(){
    var resultado = document.getElementsByTagName('p')[0].innerHTML;
    document.getElementsByTagName('p')[0].innerHTML = resultado.substring(0, resultado.length -1);
}

var calcular = () =>{
    var resultado = document.getElementsByTagName('p')[0].innerHTML;
    if(resultado){
        document.getElementsByTagName('p')[0].innerHTML = eval(resultado);
    }
}


