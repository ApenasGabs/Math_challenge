import math


def gera_frequencia_nota(semitons):
    # Separação das notas crescentes e decrescentes em listas.
    notas_crescentes = ['C', 'C#', 'D', 'D#',
                        'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
    notas_decrescentes = ['C', 'Db', 'D', 'Eb','E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B']
    # Estrutura para a repetição da lista em caso da variável 'semitons' ser maior do que a quantidade de itens na lista 'notas_crescentes'.
    if semitons >= 3:
        notas = notas_crescentes * math.ceil(semitons / 12)
        # Correção da variável 'semitons' para posteriormente ser usada como índice dos itens na lista 'notas'.
        notas_index = (semitons + 9) - 12

    # Estrutura para a repetição da lista em caso da variável 'semitons' ser menor do que o índice mínimo na lista 'notas_decrescentes'.
    elif semitons <= -10:
        notas = notas_decrescentes * math.ceil(abs(semitons) / 12)
        # Correção da variável 'semitons' para posteriormente ser usada como índice dos itens na lista 'notas'.
        notas_index = (semitons + 9) + 12
    # Estrutura padrão que atribuirá à variável 'notas', a lista correspondente à condição de negativo ou positivo da variável 'semitons'.
    else:
        if semitons >= 0:
            notas = notas_crescentes
        else:
            notas = notas_decrescentes
        # Correção da variável 'semitons' para posteriormente ser usada como índice dos itens na lista 'notas'.
        notas_index = (semitons + 9)
    # Cálculo da frequência da nota (usando a nota 'A' como princípio), a partir do semitom digitado pelo usuário.
    frequencia = 440*2 ** (semitons/12)

    # Estrutura para verificar se a variável 'frequencia' é um inteiro, para atribuir ao mesmo a característica de string. Se não for, irá ser formatado para string e exibindo 4 casas decimais.
    if (frequencia).is_integer() == True:
        frequencia = str(int(frequencia))
    else:
        frequencia = format(frequencia, '.4f')

    # Criação da lista final na variável 'resultado'.
    resultado = [frequencia, notas[notas_index]]

    # Retorno da variável resultado.
    return resultado
