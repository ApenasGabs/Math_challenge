const musicas = [2, 10, 5, 3];
const musicasCopia = musicas;

// const suffleMusicas = (musicas: []) => {
console.log("musicas: ", musicas);
const decre = musicas.sort((a, b) => b - a);
const cres = musicasCopia.sort((a, b) => a - b);
console.log("decre: ", decre);
let auxMaior = 0;
let auxMenor = 0;

const teste = [];
const result = musicas.forEach((_, index) => {
  const par = (index + 1) % 2 === 0; // essa logica de par esta OK
  // console.log("par: ", par);
  if (!par) {
    const retorno = decre[auxMaior];
    teste.push(retorno);
    auxMaior++;
    return retorno;
  }
  if (par) {
    const retorno = cres[auxMenor];
    console.log("cres: ", cres);
    console.log("cres[auxMenor]: ", cres[auxMenor]);
    auxMenor++;
    teste.push(retorno);
    return retorno;
  }
});
console.log("teste: ", teste);
return result;
// };
// suffleMusicas(musicas);
