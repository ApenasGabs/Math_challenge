var d1 = 0.35
var d2 = 0.6
var d3 = "0.45"
var vel_som = 340

function retornaTempoArenaEmMilisegundos(distancia, velocidade) {
    var fdm = parseFloat(distancia) * 1000000
    return fdm / velocidade
}

// #
// 350 m * 1216 = 425.600 / 3, 6 = 118.22 m / s# 1216 km
// retorna_tempo_arena_em_milisegundos(d3, vel_som)