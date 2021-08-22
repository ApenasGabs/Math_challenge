// Uma pesquisa feita com pessoas que iriam participar de um show com vários palcos, identificou que:
// 45 % gostam de ver os shows no palco A.
// 33 % gostam de ver os shows no palco B.
// 34 % gostam de ver os shows no palco C.
// 20 % gostam de ver os shows no palco A e B.
// 18 % gostam de ver os shows no palco A e C.
// 10 % gostam de ver os shows no palcos B e C.
// 3 % gostam dos três locais para ver os shows.
// Ajude a organização do show a entender qual o percentual de pessoas que não gostam de nenhum desses palcos e que gostam apenas de um único palco!
//  Se os ingressos fossem vendidos para 10 mil pessoas, quantas gostariam de shows de apenas um palco ?
//  E se fosse para 17 mil pessoas, quantas pessoas gostariam de ver shows de apenas um palco ?

function retornaPessoasPreferemUmUnicoPalco(quantidadePessoasEvento) {
    const a = quantidadePessoasEvento * 0.45;
    const b = quantidadePessoasEvento * 0.33;
    const c = quantidadePessoasEvento * 0.34;
    const ab = quantidadePessoasEvento * 0.2;
    const ac = quantidadePessoasEvento * 0.18;
    const bc = quantidadePessoasEvento * 0.1;
    const abc = quantidadePessoasEvento * 0.03;
    let aSemNada = a - (ab + ac - abc);
    let bSemNada = b - (ab + bc - abc);
    let cSemNada = c - (ac + bc - abc);
    let gostamDeUm = Math.round(aSemNada + bSemNada + cSemNada);

    return console.log(gostamDeUm);
}

retornaPessoasPreferemUmUnicoPalco(10000);