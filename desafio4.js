// distancia minima = 340 velocidade do som *
// percepção humana do som(0, 1)
// como o echo vai e volta, o resultado é dividido por dois
function retornaSeHaEcoNoEstudio(distancia) {
    let distMin = (340 * 0.1) / 2;
    if (distancia >= distMin) {
        return console.log(true);
    }
    return console.log(false);
}

retornaSeHaEcoNoEstudio(8);