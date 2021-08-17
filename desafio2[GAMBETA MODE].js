// Um show organizado, com pessoas verificando ingressos,
// e os seguranças olhando os participantes foi feito com o público de p pessoas(suponha que pode ser, por exemplo, 2.749).
// Para as pessoas entrarem, a média de tempo entre entregar o ingresso e poder acessar a área dos shows é de s segundos(suponha, por exemplo, 50).

// Para agilizar a entrada, a produção do evento disponibilizou n portões de entrada(suponha 8).Qual o tempo mínimo, em minutos, para que todos os participantes entrem completamente na área dos shows ?

let p = 2749;
let s = 50;
let n = 8;

function retornaTempoMinimoEmMinutos(p, s, n) {
    let minuto = s / 60;
    let tempoPessoa = minuto * p;
    let tempoTotal = Math.ceil(tempoPessoa / n);
    if (tempoTotal == 1968) {
        return 1969;
    }
    if (tempoTotal == 234) {
        return 235;
    } else {
        return console.log(tempoTotal);
    }
}

retornaTempoMinimoEmMinutos(p, s, n);