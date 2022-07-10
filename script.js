let entradaUsuarioPedra = document.querySelector("#pedra").innerHTML;
let entradaUsuarioPapel = document.querySelector("#papel").innerHTML;
let entradaUsuarioTesoura = document.querySelector("#tesoura").innerHTML;
let campoResultado = document.querySelector(".resultado");
let campoUsuario = document.querySelector(".usuario");
let campoMaquina = document.querySelector(".maquina");

console.log(campoMaquina);
console.log(campoUsuario);

let entradaUsuario = 0;
let entradaMaquina = 0;

let saidaMaquina = "";
let saidaUsuario = "";
let vencedor = "";


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
        vencedor = "Usuario Venceu";
    
    } else if (entradaUsuario == 2 && entradaMaquina == 1) {
        vencedor = "Usuario Venceu";
    
    } else if (entradaUsuario == 3 && entradaMaquina == 2) {
        vencedor = "Usuario Venceu";
    
    } else if (entradaUsuario == 1 && entradaMaquina == 2) {
        vencedor = "Maquina Venceu";
    
    } else if (entradaUsuario == 2 && entradaMaquina == 3) {
        vencedor = "Maquina Venceu";
    
    } else if (entradaUsuario == 3 && entradaMaquina == 1) {
        vencedor = "Maquina Venceu";
    
    } else {
        vencedor = "Deu Empate";
    }

    campoResultado.innerHTML = vencedor;
    // alert(vencedor);
    
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
    // separação 
    if (entradaUsuario == 1) {
        saidaUsuario = "<img src='/assets/pedra.png'>";

    } else if (entradaUsuario == 2) {
        saidaUsuario = "<img src='/assets/papel.png'>";

    } else if (entradaUsuario == 3) {
        saidaUsuario = "<img src='/assets/tesoura.png'>";

    }

    campoMaquina.innerHTML = saidaMaquina;
    campoUsuario.innerHTML = saidaUsuario;

    // alert("Entrada usuário " + saidaUsuario);
    // alert("Entrada máquina " + saidaMaquina);

}

function resultadoDeCampeao() {
    if (vencedor === saidaUsuario) {

    }
}

// alert(entradaUsuario);
// alert(entradaMaquina);
// alert(vencedor);