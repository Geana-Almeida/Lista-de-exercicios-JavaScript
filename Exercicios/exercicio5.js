function calcular(){
    nota1 = document.getElementById('n1')
    nota2 = document.getElementById('n2')

    nota1 = Number(nota1.value)
    nota2 = Number(nota2.value)

    med = (nota1 + nota2)/2

    if(med <= 10 && med >= 9){
        document.getElementById('res').value = med
        document.getElementById('classificacao').value = "A"
    }

    else if(med <= 9 && med >= 8){
        document.getElementById('res').value = med
        document.getElementById('classificacao').value = "B"
    }

    else if(med <= 8 && med >= 7){
        document.getElementById('res').value = med
        document.getElementById('classificacao').value = "C"
    }

    else if(med <= 7 && med >= 6){
        document.getElementById('res').value = med
        document.getElementById('classificacao').value = "D"
    }

    else if(med <= 6 && med >= 5){
        document.getElementById('res').value = med
        document.getElementById('classificacao').value = "E"
    }

    else{
        document.getElementById('res').value = med
        document.getElementById('classificacao').value = "F"
    }

}