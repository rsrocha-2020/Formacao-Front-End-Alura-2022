import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

//Instanciando uma variável para a classe
const cliente1 = new Cliente();
const contaCorrenteRobson = new ContaCorrente();
const conta2 = new ContaCorrente();
const cliente2 = new Cliente();

//Instanciando um objeto a partir de uma classe
const conta3 = new ContaCorrente();
conta3.cliente = new Cliente();
conta3.cliente.nome = "Bruno Delicia";
conta3.cliente.cpf = 678;
conta3.agencia = 1003;


//Atribuindo os valores as variáveis
cliente1.nome = "Robson";
cliente1.cpf = 123;
contaCorrenteRobson.agencia = 1001;
contaCorrenteRobson.cliente = cliente1;
contaCorrenteRobson.depositar(200);
contaCorrenteRobson.tranferir(100, conta2);

cliente2.nome = "Rafaela";
cliente2.cpf = 345;
conta2.cliente = cliente2;
conta2.agencia = 1002;


//Visualizando todas as informações do cliente
//Informações do contaCorrenteRobson
console.log(contaCorrenteRobson);
console.log("\n");

//Informações do conta2
console.log(conta2);
console.log("\n");

//Informações do conta3
console.log(conta3);
console.log("\n");