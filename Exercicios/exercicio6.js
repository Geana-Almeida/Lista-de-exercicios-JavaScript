function calcular(){
    gol_bangu = document.getElementById('g_bangu')
    gol_madu = document.getElementById('g_madu')

    gol_bangu = Number(gol_bangu.value)
    gol_madu = Number(gol_madu.value)

    if(gol_bangu >= gol_madu){
        dif = gol_bangu - gol_madu
    }

    else{
        dif = gol_madu - gol_bangu
    }

    switch(dif){
        case 0:
            document.getElementById('res').value = dif
            document.getElementById('status').value = `EMPATE`
            break

        case 1:
            document.getElementById('res').value = dif
            document.getElementById('status').value = `PARTIDA NORMAL`
            break

        case 2:
            document.getElementById('res').value = dif
            document.getElementById('status').value = `PARTIDA NORMAL`
            break

        case 3:
            document.getElementById('res').value = dif
            document.getElementById('status').value = `PARTIDA NORMAL`
            break


        case 4:
            document.getElementById('res').value = dif
            document.getElementById('status').value = `GOLEADA`
            break

        case 5:
            document.getElementById('res').value = dif
            document.getElementById('status').value = `GOLEADA`
            break

        case 6:
            document.getElementById('res').value = dif
            document.getElementById('status').value = `GOLEADA`
            break
            
        default:
            window.alert("Inválido")


    }

}