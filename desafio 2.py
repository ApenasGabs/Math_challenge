# Um show organizado, com pessoas verificando ingressos, e os seguranças olhando os participantes foi feito com o
#  público de p pessoas (suponha que pode ser, por exemplo, 2.749). Para as pessoas entrarem, a média de tempo
# entre entregar o ingresso e poder acessar a área dos shows é de s segundos (suponha, por exemplo, 50).
# Para agilizar a entrada, a produção do evento disponibilizou n portões de entrada (suponha 8).
# Qual o tempo mínimo, em minutos, para que todos os participantes entrem completamente na área dos shows?
import math
p = 2749
s = 50
n = 8


def retorna_tempo_minimo_em_minutos(p, s, n):
    tempo_portao = s/n
    tempo_total = math.ceil(tempo_portao*p)
    tempo_final = math.ceil(tempo_total/60)
    if( s%5 != 0 ):
        return tempo_final+ 1
    else:
        return print(tempo_final)


    


retorna_tempo_minimo_em_minutos(p, s, n)
