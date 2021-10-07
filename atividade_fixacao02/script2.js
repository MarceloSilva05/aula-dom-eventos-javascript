let minhaFuncao=()=>{
    
  let texto=document.getElementById("boas-vindas");
   texto.innerHTML="Olá, Seja bem vindo ao mundo JS!";
}
 const minhaFuncao2=()=>{
    let primeiroElementoP=document.getElementsByTagName("p");
    primeiroElementoP[0].innerHTML="Olá, Seja bem vindo ao mundo JS!";
     
 }
const minhaFuncao3=()=>{
var maiuscula=document.getElementsByClassName("frase");
var valor=document.getElementsByClassName("resultado");

 for (let index = 0; index < maiuscula.length; index++) {
   valor[index].innerHTML=maiuscula[index].innerHTML.toLocaleUpperCase();
 }

}
const minhaFuncao4=()=>{
    document.getElementById("titulo").style.color="red";
    
}