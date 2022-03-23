tot = 0

function verificar(){
    num = document.getElementById('num')//4 obj
    veri_string = document.getElementById('ver')//SIM  obj
    res = document.getElementById('res')
    
    
    veri_string = String(veri_string.value) //SIM string
    num = Number(num.value)
      
    
    
    if(veri_string == "SIM"){
        tot += num
        res.innerHTML = tot
    }
    else if(veri_string == "NAO"){
        tot = 0
        
    }

    else{
        window.alert("Resposta inválida.")
    }

    
    
    
    
    
}


