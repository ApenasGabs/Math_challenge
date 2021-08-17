def retorna_tempo_minimo_em_minutos(p, s, n):
    tempo_total = p*s
    tempo_final = tempo_total/n
    minutos = round(tempo_final/60)+1
    return minutos