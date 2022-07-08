let entradaUsuarioPedra = document.querySelector("#pedra").innerHTML;
let entradaUsuarioPapel = document.querySelector("#papel").innerHTML;
let entradaUsuarioTesoura = document.querySelector("#tesoura").innerHTML;

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

    alert(vencedor);
    
}

function SaidaResultados (num1, num2) {
    saidaUsuario = num1;
    saidaMaquina = num2;

    if (entradaMaquina == 1) {
        saidaMaquina = "Pedra";

    } else if (entradaMaquina == 2) {
        saidaMaquina = "Papel";

    } else if (entradaMaquina == 3) {
        saidaMaquina = "Tesoura";

    }
    // separação 
    if (entradaUsuario == 1) {
        saidaUsuario = "Pedra";

    } else if (entradaUsuario == 2) {
        saidaUsuario = "Papel";

    } else if (entradaUsuario == 3) {
        saidaUsuario = "Tesoura";

    }

    alert("Entrada usuário " + saidaUsuario);
    alert("Entrada máquina " + saidaMaquina);

}

// alert(entradaUsuario);
// alert(entradaMaquina);
// alert(vencedor);