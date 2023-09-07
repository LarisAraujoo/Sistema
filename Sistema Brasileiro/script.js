function calcular() {
    var pais = document.querySelector('#local').value
    var res = document.querySelector('#res')
    
     res.innerHTML = `Se você nasceu em ${pais}...`
    

    if (pais != 'Brasil') {
    res.innerHTML += `Você é estrangeiro!`
    } else {
        res.innerHTML += `Você é Brasileiro!`
    }
 
}