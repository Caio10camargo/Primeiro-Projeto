function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var data = new Date()
var hora = data.getHours()
 msg.innerHTML = `Agora são ${hora}:horas.`

if ( hora >= 0 && hora <12 ){
// Bom dia!
img.src = "fotomanha.png.png"
} else if ( hora >= 12 && hora < 18) {
    // Boa tarde!
    img.src = "fototarde1.png"
} else{
    //Boa noite!
    img.src = "fotonoite.png.png"
}

 var nome = window.prompt ('Gostaria de saber que horas são?')
 window.alert ('Atualizando a hora!')
}