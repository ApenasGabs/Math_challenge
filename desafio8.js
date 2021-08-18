function retornaGuicheIngresso(ingressoNumero) {
    if (ingressoNumero == 0) {
        return 0;
    }
    var lugarDaPessoa = ingressoNumero;
    var X = 1;
    var contadoDasLinhas = 1;
    for (var N = 1; true; N = N + 2) {
        console.log("contadorDeLinhas: ", contadoDasLinhas);
        console.log("N é: ", N);
        for (var contador = 0; contador < N; X++, contador++) {
            console.log("contador é: ", contador);
            console.log("X é: ", X);
            if (lugarDaPessoa === X) {
                console.log("achou");
                return contadoDasLinhas;
            }
        }
        contadoDasLinhas++;
    }
}