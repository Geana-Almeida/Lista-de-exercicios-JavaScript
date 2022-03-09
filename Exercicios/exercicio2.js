function verificador(){
    num1 = document.getElementById('l1')
    num2 = document.getElementById('l2')
    num3 = document.getElementById('l3')

 
   

    num1 = Number(num1.value)
    num2 = Number(num2.value)
    num3 = Number(num3.value)

    if(num1 == num2 || num2 == num3){
        document.getElementById('resul').value = "O triangulo é EQUILATERO"
    }

    else{
        document.getElementById('resul').value = "O triangulo é ESCALENO."
    }
}