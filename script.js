function selectSex(sex) {
    var fsex = document.getElementsByClassName("buttonSex")
    // Remove a classe 'selected' de ambos os botões
    document.getElementById('fem').classList.remove('selected');
    document.getElementById('masc').classList.remove('selected');

    // Adiciona a classe 'selected' ao botão clicado
    if (sex === 'fem') {
        document.getElementById('fem').classList.add('selected')
        fsex[1].checked = [1];
    } else if (sex === 'masc') {
        document.getElementById('masc').classList.add('selected');
        fsex[0].checked = [0];
    }
}

function verificar(){

    var data = new Date()
    var ano = data.getFullYear() 
    var fano = document.getElementById("ano")
    var res = document.getElementById("res")

    if(fano.value.length == 0 || fano.value > ano){

        window.alert("Verifique os dados, e tente novamente!!")
    }else{

        var fsex = document.getElementsByClassName("buttonSex")
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if(fsex[0].checked){
        genero = 'Homem'

        if(idade >0 && idade<=10){
          //crianca
            img.setAttribute('src', 'bebehomem.jpg')
        }else if(idade<20){
          //jovem
            img.setAttribute('src', 'jovemhomem.jpg')
        }else if(idade <50){
          //adulto
            img.setAttribute('src', 'adultohomem.jpg')
        }else{
            img.setAttribute('src','idosohomem.jpg') 
          //idoso
        }

    }else if(fsex[1].checked){
        genero = 'Mulher'

        if(idade >0 && idade<=10){
          //crianca
            img.setAttribute('src','bebemulher.jpg')
        }else if(idade<20){
            img.setAttribute('src','jovemmulher.jpg')
          //jovem
        }else if(idade <50){
            img.setAttribute('src','adultamulher.jpg')
          //adulto
        }else{
            img.setAttribute('src','idosamulher.jpg')
          //idoso

        }
}

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos: ${genero} com ${idade} anos`
        res.appendChild(img)

    }
}