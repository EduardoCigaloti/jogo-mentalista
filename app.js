function Chutar(){
    let numeroSecreto = 3
    let chute = parseInt(document.querySelector ("#valor").value)
    console.log(numeroSecreto, chute)

if(numeroSecreto==chute){
document.querySelector(".resultado").innerHTML = "Você Acertou  "

}

else
{
    document.querySelector(".resultado").innerHTML = "Você Errou  "

}
}