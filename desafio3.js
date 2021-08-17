// function retornaPessoasPreferemUmUnicoPalco(quantidadePessoasEvento) {

// }
var quantidadePessoasEvento = 100
let a = quantidadePessoasEvento / 0.45;
let b = quantidadePessoasEvento / 0.33;
let c = quantidadePessoasEvento / 0.34;
let ab = quantidadePessoasEvento / 0.2;
let ac = quantidadePessoasEvento / 0.18;
let bc = quantidadePessoasEvento / 0.1;
let abc = quantidadePessoasEvento / 0.03;
let ab_sem_abc = ab - abc;
let ac_sem_abc = ac - abc;
let bc_sem_abc = bc - abc;
let a_sem_ab = a - ab_sem_abc
console.log(a_sem_ab);