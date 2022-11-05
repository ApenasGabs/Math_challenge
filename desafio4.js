const frase2 =
  "A verdade é que a dor em si é importante, a educação do aluno será seguida, mas acontece neste momento que algum grande trabalho e dor";
const frase =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
const termos = ["a", "em", "i", "el"];

const calculaTopOcorrenciasDeQueries = (texto, queries, k) => {
  const valores = queries.map((querie) => {
    return { valor: 0, palavra: querie };
  });
  const palavrasPVerificar = texto.split(" ");
  valores.forEach((item, index) => {
    palavrasPVerificar.forEach((palavra) => {
      if (palavra.includes(item.palavra)) {
        valores[index].valor = valores[index].valor + 1;
      }
    });
  });
  const valorFinal = valores.sort((a, b) => {
    return b.valor - a.valor;
  });
  const resultado = [];
  for (let i = 0; i < k; i++) {
    resultado.push(valorFinal[i].palavra);
  }
  console.log(resultado);
  return resultado;
};

calculaTopOcorrenciasDeQueries(frase, termos, 2);
