import math
deg =  45 #int(input('Digite o angulo '))
vel_kmh = 85 #int(input('Digite a velocidade Km/h '))
vel_ms = (vel_kmh*1000)/3600
cos=math.cos(deg)
time = 5
dist_angle = time*vel_ms
dist_hor = dist_angle*cos
print ('A distancia horizontal é', f'{dist_hor:.2f}','metros')