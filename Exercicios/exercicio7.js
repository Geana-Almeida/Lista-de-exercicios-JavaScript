function contador(){
    num = document.getElementById('num')
    cont = document.getElementById('cont')
    res = document.getElementById('res')

    res.innerHTML = `Contando <br> `
    num = Number(num.value)
    cont = Number(cont.value)
    
    //teste feito no começo
    while(num <= 100){
        res.innerHTML += num + " "
        num += cont
    }

    
}