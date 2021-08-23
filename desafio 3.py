import math


def retorna_pessoas_preferem_um_unico_palco(quantidade_pessoas_evento):
    apenas_a = (0.45 - (0.2 + 0.18 - 0.03))
    apenas_b = (0.33 - (0.2 + 0.10 - 0.03))
    apenas_c = (0.34 - (0.18 + 0.10 - 0.03))
    return math.floor((apenas_a + apenas_b + apenas_c)*quantidade_pessoas_evento)

    '''a = quantidade_pessoas_evento * 0.45
  b = quantidade_pessoas_evento * 0.33
  c = quantidade_pessoas_evento * 0.34
  a_b = quantidade_pessoas_evento * 0.2
  a_c = quantidade_pessoas_evento * 0.18
  b_c = quantidade_pessoas_evento * 0.1
  a_b_c = quantidade_pessoas_evento * 0.03'''
