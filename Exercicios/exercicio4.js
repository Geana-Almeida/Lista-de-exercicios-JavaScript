function calcular(){
    massa = document.getElementById('massa')
    altu = document.getElementById('alt')


    
    massa = Number(massa.value)
    altu = Number(altu.value)

    imc = massa / (altu ** 2)

    if(imc < 17){
        document.getElementById('resul').value = `Você está muito abaixo do peso ideal. IMC= ${imc.toFixed(2)}`
    }

    else{
        if(imc >= 17 && imc <= 18.5){
            document.getElementById('resul').value = `Você está abaixo do peso ideal. IMC= ${imc.toFixed(2)}`
        }

        else{
            if(imc >= 18.5 && imc < 25){
                document.getElementById('resul').value = `Você está no peso ideal, Parabéns. IMC= ${imc.toFixed(2)}`
            }

            else{
                if(imc >= 25 && imc< 30){
                    document.getElementById('resul').value = `Sobrepeso. IMC= ${imc.toFixed(2)}`
                }

                else{
                    if(imc >= 30 && imc < 35){
                        document.getElementById('resul').value = `Obesidade. IMC= ${imc.toFixed(2)}`
                    }

                    else{
                        if(imc >= 35 && imc < 40){
                            document.getElementById('resul').value = `Obesidade severa. IMC= ${imc.toFixed(2)}`
                        }

                        else{
                            document.getElementById('resul').value = `Obesidade Morbida. IMC= ${imc.toFixed(2)}`
                        }
                    }
                }
            }
        }
    }
}