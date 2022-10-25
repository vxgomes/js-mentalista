function chutar() {
    let numeroSecreto = Math.floor(Math.random() * 10)
    let chute = document.getElementById("valor").value 

    let emojiFeliz = '<img src="imagens/emojiFeliz.png" width="50" height="50">'
    let emojiTriste = '<img src="imagens/emojiTriste.png" width="50" height="50">'

    if(chute == numeroSecreto){
        //verdadeiro
        document.getElementById("resultado").innerHTML = emojiFeliz;
    }else{
        //falso
        document.getElementById("resultado").innerHTML = emojiTriste;
    }
}