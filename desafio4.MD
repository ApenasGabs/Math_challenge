Dada um texto qualquer e um lista de termos de pesquisa (sequencia de caracteres), retorne os primeiros K termos mais recorrentes na string, onde K é um parâmetro configurável.

Exemplo:

Corda: "A verdade é que a dor em si é importante, a educação do aluno será seguida, mas acontece neste momento que algum grande trabalho e dor"

Lista de termos: ["a", "em", "i", "el"]

K: 2

Resultado: ["i", "a"]
Explicação:
Ocorrências de cada termo,"i": 11, "a": 7, "em": 2, "el": 1, com K = 2, retornamos "i" e "a" ordenados conforme a quantidade de ocorrências de cada termo.

Obs: Quando houver termos com quantidades iguais, priorizar o retorno de acordo com a ordem de ocorrência do termo na string.