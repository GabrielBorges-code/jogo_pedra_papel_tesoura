let entradaUsuario = prompt("escolha: 1 - pedra | 2 - papel | 3 - tesoura");
let entradaMaquina = Math.ceil(Math.random() * 3);

let usuarioEscolha = "";
let maquinaEscolha = "";

let vencedor = "";

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

console.log(entradaUsuario);
console.log(entradaMaquina);
console.log(vencedor);