const numMes = document.getElementById("numMes");
const mes = document.getElementById("mes");
const btnExibir = document.getElementById("btnExibir");
const btnLimpar = document.getElementById("btnLimpar");
const btnMenu = document.getElementById("btnMenu");

function auth(){
    if(isNaN(numMes.value) || numMes.value == ""){
        alert("Digite apenas numeros!")
    } else if (numMes.value <= 0 || numMes.value > 12){
        alert("Digite um número entre 1 e 12!")
    } else{
        return true;
    }
}



function exibir(){
    switch (parseInt(numMes.value)){
        case 1:
            mes.textContent = "Janeiro";
            break;
        case 2:
            mes.textContent = "Fevereiro";
            break;
        case 3:
            mes.textContent = "Março";
            break;
        case 4:
            mes.textContent = "Abril";
            break;
        case 5:
            mes.textContent = "Maio";
            break;
        case 6:
            mes.textContent = "Junho";
            break;
        case 7:
            mes.textContent = "Julho";
            break;
        case 8:
            mes.textContent = "Agosto";
            break;
        case 9:
            mes.textContent = "Setembro";
            break;
        case 10:
            mes.textContent = "Outubro";
            break;
        case 11:
            mes.textContent = "Novembro";
            break;
        case 12:
            mes.textContent = "Dezembro";
            break;
    }
}

btnExibir.addEventListener("click", () => {
    if(auth()){
        exibir();
    }
})

btnLimpar.addEventListener("click", () => {
    numMes.value = "";
    mes.textContent = "";
})
