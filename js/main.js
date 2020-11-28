/*var nome = "Paul Anderson";
var n1 = 5;
var n2 = 3;
var frase = "Japão é o melhor time do mundo";

//alert(idade + idade2);
//alert(nome + " Tem " + idade + "anos");
console.log(nome);
console.log(n1 * n2);
console.log(frase.replace("Japão", "Brasil"));
console.log(frase.toUpperCase());
//alert(frase.replace("Japão", "Brasil"));
*/
//var lista = ["maça", "Pêra", "Laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista.length);
//console.log(lista.reverse());
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "));


/*var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);*/

/*var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);*/

/*var idade = prompt("Qual a sua idade? ");
if(idade > 18){
    alert("Maior de Idade");

} else{
    alert("Menor de Idade");
};*/

/*var count = 0;
while (count < 5){
    console.log(count);
    alert(count);
    count++;
};*/

/*var count;
for(count=0;count<=5; count++){
    alert(count);
}*/


//var d = new Date();
//alert(d);
//alert(d.getMonth()+1);//Sempre adicionar +1 para contagem correta, Pois sempre começa em 0.
//alert(d.getMinutes());
//alert(d.getSeconds());
//alert(d.getDay());
//alert(d.getHours());
//console.log("hj e " + d.getDate() + " / " + (d.getMonth()+1));


//----------------------Funções----------------------------

/*function soma(n1,n2){
    return n1 + n2;

}*/
/*function setReplace(frase,nome,novo_nome){
   return frase.replace(nome,novo_nome)
    
}*/



//alert(soma(5,10));
//alert(setReplace("Vai Japão", "Japão", "Brasil"));


function validaIdade(idade){
    var validar;// forma Local
    if(idade>=18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual a sua idade? ");
console.log(validaIdade(idade));
//------------------------------------------------------

/*var validar = 0;//forma Global

function validaIdade(idade){
    if(idade>=18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual a sua idade? ");
console.log(validar);*/
