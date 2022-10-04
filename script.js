const frutas = ["laranja", "limão", "uva"];

 // Exercício 01 -----------------------------------------------------//
    const fruta1 = document.getElementById("fruta-1")
    fruta1.innerHTML += "laranja"

    const fruta2 = document.getElementById("fruta-2")
    fruta2.innerHTML += "limão"

    const fruta3 = document.getElementById("fruta-3")
    fruta3.innerHTML += "uva"

    

    const capturaValores = () => {
        const fruta4 = document.getElementById("novaFruta")
    
        console.log(fruta4.value)
    
        fruta4.value=""
    }

 // Exercício 02 ----------------------------------------------------//
    const valorDoInput = () => {
        const respostaDoInput = document.getElementById("novaFruta")
        console.log(respostaDoInput.value)
    }
    
 // Exercício 03 ----------------------------------------------------//
 const adicionaFrutas= () => {
    const fruta4 = document.getElementById("novaFruta")
    const lista = document.getElementById("lista-de-frutas")
    lista.innerHTML += `<li>${novaFruta.value}</li>`
    fruta4.value + novaFruta
    //console.log(novaFruta.value)
}
    