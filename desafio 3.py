import math
deg =  int(input('Digite o angulo '))
vel_kmh = int(input('Digite a velocidade Km/h'))
vel_ms = (vel_kmh*1000)/3600
cos=math.cos(deg)
time = 5
dist_angle = time*vel_ms
dist_hor = dist_angle*cos
print('sua velocidade em Ms é ', vel_ms)
print('o cosseno de',deg,'é',cos)
print('a distancia com angulo de',deg, 'é', dist_angle)
print ('a distancia horizontal é', f'{dist_hor:.1f}'
)
