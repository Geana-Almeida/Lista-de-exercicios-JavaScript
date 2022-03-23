function verificar(){
    num = document.getElementById('num')
    res = document.getElementById('res')
    num_div = document.getElementById('cont')
    num_div.innerHTML = ' '

    num = Number(num.value)
    cont_div = 0
    contador = 1
    

    do{
        if(num % contador  == 0){
            cont_div += 1
            num_div.innerHTML += `${contador} `
        }
        contador += 1
        
    }while(num >= contador)
        res.innerHTML = `Existem: ${cont_div} valores divisiveis que são: `
}