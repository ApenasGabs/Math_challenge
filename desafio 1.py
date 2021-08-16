def retorna_tempo_arena_em_milisegundos(distancia,velocidade):
  fdm = float(distancia)
  result  = round((fdm/velocidade)*1000000, 0)
  return result
