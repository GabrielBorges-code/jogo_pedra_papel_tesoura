let entradaUsuarioPedra = document.querySelector("#pedra").innerHTML;
let entradaUsuarioPapel = document.querySelector("#papel").innerHTML;
let entradaUsuarioTesoura = document.querySelector("#tesoura").innerHTML;
let campoResultado = document.querySelector(".resultado");
let campoUsuario = document.querySelector(".usuario");
let campoMaquina = document.querySelector(".maquina");
//warley
let empate = document.querySelector(".empate");

//warley

let virotiaUsuario = document.querySelector(".player1");
let virotiaMaquina = document.querySelector(".player2");

//warley
let ganhou = document.querySelector(".ganhou");
let perdeu = document.querySelector(".perdeu");
let empatou = document.querySelector(".empatou");
//warley

//antes
let entradaUsuario = 0;
let entradaMaquina = 0;

let saidaMaquina = "";
let saidaUsuario = "";

// let vencedor = "";
//antes

//warley
let scoreUsuario = 0;
let scoreMaquina = 0;
let scoreEmpate = 0;

let number1 = "Usuario Venceu";
let number2 = "Maquina Venceu";
let number0 = "empate";

let vencedor = 0;

//warley
function showGanhou() {
    ganhou.style.display="block";
    campoResultado.style.display="block";
    delay();

}

function showPerdeu() {
    perdeu.style.display="block";
    campoResultado.style.display="block";
    delay();

}

function showEmpatou() {
    empatou.style.display="block";
    campoResultado.style.display="block";
    delay();

}

function resultadoDisappear(){
    campoResultado.style.display="none";
    ganhou.style.display="none";
    perdeu.style.display="none";
    empatou.style.display="none";

  }

function delay(){
  setTimeout(function(){resultadoDisappear()}, 3000);

}
//warley

//antes
function EntradaUsuarioPedra () {
    entradaMaquina = Math.ceil(Math.random() * 3)
    entradaUsuario = 1;

    SaidaResultados(entradaUsuario, entradaMaquina);
    Jogar();
    
}

function EntradaUsuarioPapel () {
    entradaMaquina = Math.ceil(Math.random() * 3)
    entradaUsuario = 2;

    SaidaResultados(entradaUsuario, entradaMaquina);
    Jogar();

}

function EntradaUsuarioTesoura () {
    entradaMaquina = Math.ceil(Math.random() * 3)
    entradaUsuario = 3;

    SaidaResultados(entradaUsuario, entradaMaquina);
    Jogar();
}

function Jogar () {
    if (entradaUsuario > 3) {
        vencedor = "Valor Invalido"; 
    
    } else if (entradaUsuario == 1 && entradaMaquina == 3) {
        vencedor = number1;
        showGanhou();
    
    } else if (entradaUsuario == 2 && entradaMaquina == 1) {
        vencedor = number1;
        showGanhou();
            
    } else if (entradaUsuario == 3 && entradaMaquina == 2) {
        vencedor = number1;
        showGanhou();
    
    } else if (entradaUsuario == 1 && entradaMaquina == 2) {
        vencedor = number2;
        showPerdeu();
    
    } else if (entradaUsuario == 2 && entradaMaquina == 3) {
        vencedor = number2;
        showPerdeu();
    
    } else if (entradaUsuario == 3 && entradaMaquina == 1) {
        vencedor = number2;
        showPerdeu();
    
    } else {
        vencedor = number0;
        showEmpatou();

    }

    if (vencedor === number1) {
        scoreUsuario++;
    } else if (vencedor === number2) {
        scoreMaquina++;
    } else if (vencedor != number1 && vencedor != number2) {
        scoreEmpate++;
    }

    virotiaUsuario.innerHTML = scoreUsuario;
    virotiaMaquina.innerHTML = scoreMaquina;
    empate.innerHTML = scoreEmpate;

}

function SaidaResultados (num1, num2) {
    saidaUsuario = num1;
    saidaMaquina = num2;

    if (entradaMaquina == 1) {
        saidaMaquina = "<img src='/assets/pedra.png'>";

    } else if (entradaMaquina == 2) {
        saidaMaquina = "<img src='/assets/papel.png'>";

    } else if (entradaMaquina == 3) {
        saidaMaquina = "<img src='/assets/tesoura.png'>";

    }

    if (entradaUsuario == 1) {
        saidaUsuario = "<img src='/assets/pedra.png'>";

    } else if (entradaUsuario == 2) {
        saidaUsuario = "<img src='/assets/papel.png'>";

    } else if (entradaUsuario == 3) {
        saidaUsuario = "<img src='/assets/tesoura.png'>";

    }

    campoMaquina.innerHTML = saidaMaquina;
    campoUsuario.innerHTML = saidaUsuario;

}
