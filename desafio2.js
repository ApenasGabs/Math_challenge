function sales(sales){
    let menorValor = 0
    let maiorValor= 0

    const firstValue = sales[0]

    sales.forEach(item => {
        item.forEach(value => {
            if(value > maiorValor){
                maiorValor = value
            } 

            if (value < menorValor || menorValor == 0){
                menorValor = value
            }
        })
    })

    return Array.of(menorValor, maiorValor)
}

console.log(sales([[200, 100], [300]]))