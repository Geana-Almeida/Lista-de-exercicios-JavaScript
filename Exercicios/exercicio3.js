function media(){
    nota1 = document.getElementById('n1')
    nota2 = document.getElementById('n2')
    

    nota1 = Number(nota1.value)
    nota2 = Number(nota2.value)

    med = (nota1+nota2)/2

    if(med >= 7){
        document.getElementById('res').value = `Aluno aprovado com a nota ${med}`
    }

    else{
        document.getElementById('res').value = `Aluno reprovado, sua nota foi: ${med}`
    }

    

    
}