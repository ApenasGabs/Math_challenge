combustivel = 2;
consumoMed = 8;
# # Consumo médio (km/l): 8
 distanciaMax = combustivel * consumoMed;
console.log("distanciaMax: ", distanciaMax);
# Postos de Gasolina (km): [2, 15, 22, 10.2]
postosDeGasolina = [2, 15, 22, 10.2];
todasDistancias = postosDeGasolina.map(
  (distanciaPosto) => distanciaMax - distanciaPosto
);
 distanciasPositivas = todasDistancias.filter( number => number < 0)
var menor = Math.min.apply(null, novoArr);
console.log("novoArr: ", menor);

#  cria um novo arr
#  item do array subtrair o valor de distanciaMax
# encontrar o menor valor desse novo arr
