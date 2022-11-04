const procuraPosto = () => {
  const combustivel = 2;
  const consumoMed = 8;
  const kmMax = combustivel * consumoMed;
  const postosDeGasolina = [33, 33, 22, 3333.2];
  // const postosDeGasolina = [2, 15, 22, 10.2];
  console.log("kmMax: ", kmMax);
  
  // Postos de Gasolina (km): [2, 15, 22, 10.2]
  // Crio um novo array com os valores subtraidos
  const distanciasSubtraida = postosDeGasolina.map((posto) => {
    // map passa por cada
    return kmMax - posto;
  });
  // Ordeno o array com ordem crescente
  const outroArry = distanciasSubtraida.sort((a, b) => {
    return a - b;
  });
  let valorFinal = 0;
  // Crio um novo array removendo os valores negativos
  const novoAArrr = outroArry.filter((item) => item >= 0);
  // Verifico se o novo array tem algo, se ele nao tiver ele cai na regra do -1
  if (novoAArrr.length === 0) {
    valorFinal = -1;
  } else  {
    // pego o primeiro valor do array
    valorFinal = novoAArrr[0];
  }
  console.log(valorFinal);
  return valorFinal;
};
procuraPosto();
