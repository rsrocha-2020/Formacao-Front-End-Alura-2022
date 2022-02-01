import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

//Instanciando uma variável para a classe
const cliente1 = new Cliente();

const contaCorrenteRobson = new ContaCorrente();

//Atribuindo os valores as variáveis

contaCorrenteRobson.agencia = 1001;
contaCorrenteRobson.saldo = 0;

//Visualizando todas as informações do cliente

console.log(contaCorrenteRobson);

contaCorrenteRobson.depositar(100);

contaCorrenteRobson.sacar(50);

console.log(contaCorrenteRobson);
console.log("\n");