function soma(){

var num1 = document.getElementById('num1')
var num2 = document.getElementById('num2')


num1 = Number(num1.value)
num2 = Number(num2.value)

if(num1>num2){
    document.getElementById('tot').value = num1 + num2
    document.getElementById('mai_num').value = num1
}

else{
    document.getElementById('tot').value = num2 + num1
    document.getElementById('mai_num').value = num2
}








}

