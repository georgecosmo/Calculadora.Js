
const mes = document.querySelector("#mes");
const num = document.querySelector("#num");
let numAtual = 1;

function numIncrement(){
    numAtual++;

    if(numAtual > 12){
        numAtual = 1;
    }
    num.textContent = numAtual;
    changeMes();
}

function numDecrement(){
    numAtual = numAtual - 1;

    if(numAtual < 1){
        numAtual = 12;
    }
    num.textContent = numAtual;
    changeMes();
}

function changeMes(){
        if(numAtual < 4){
            document.body.style.backgroundImage = "url('./img/inverno.jpg')"
        }else if(numAtual < 6){
            document.body.style.backgroundImage = "url('./img/primavera.webp')"
        }else if(numAtual < 9){
            document.body.style.backgroundImage = "url('./img/verao.jpg')"
        } else if(numAtual < 12){
            document.body.style.backgroundImage = "url('./img/outono.jpg')"
        }

        

        switch (numAtual){
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