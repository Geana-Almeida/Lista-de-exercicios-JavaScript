
function executar(){
    num = document.getElementById('num')
    res = document.getElementById('res')
    
    num = Number(num.value)

    fat = 1

    do{
        fat = fat * num
        num = num - 1
        
    }while(num > 1)
        res.innerHTML = `O fatorial do número digitado é: ${fat}`
}