// Você e seu time estão desenvolvendo um sistema de indicações de postos de gasolina que ficam próximos da localização atual do veículo.
// No modo de direção “viagem”, a funcionalidade a ser desenvolvida é de indicar ao condutor o posto mais distante possível dentro do limite atual de combustível.
// E caso não exista posto de gasolina, retornar -1
// A pessoa responsável por fazer a especificação do sistema informou que você terá as seguintes informações: consumo médio de combustível, quantidade de combustível restante no veículo e um array contendo distâncias dos postos de gasolinas.

const combustivel = 2;
const consumoMed = 8;
const kmMax = combustivel * consumoMed;
console.log("kmMax: ", kmMax);
// Postos de Gasolina (km): [2, 15, 22, 10.2]
const postosDeGasolina = [2, 15, 22, 10.2];
let valorFinal;

postosDeGasolina.forEach((distanciaAteOPosto) => {
  const chegaNoPosto = kmMax - distanciaAteOPosto;
  if (chegaNoPosto < 0) {
    valorFinal = -1;
  }
  if (chegaNoPosto >= 0) {
    let distanciaAlvo = 0;
    if (distanciaAlvo <= chegaNoPosto) {
    }
  }
});
// ordenar o array por ordem crescente e retornar o primeiro menor valor,
// caso nao haja nenhum valor positivo retorna -1

valorFinal = distanciaAlvo;
const distanciasPositivas = todasDistancias.filter((number) => number > 0);
console.log("distanciasPositivas: ", distanciasPositivas);
var menor = Math.min.apply(null, distanciasPositivas);
console.log("novoArr: ", menor);
