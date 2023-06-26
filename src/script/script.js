let synth = new SpeechSynthesisUtterance();

function starAnalyzing() {
    let _name = document.querySelector("#name").value
    let text = "Olá " + _name + " tudo bem? Isso é um teste e irei analizar seu nome, pois o resultado da soma numerológica cabalista do seu nome é: "
    //let nameObject = transformInObj(_name)
    text += analyzingName(_name)
    text += ". E baseado nisso terá a descrição do seu nome aqui"
    document.querySelector("div").innerHTML = "Resposta: " + text
    speak(text)
} 
function speak(text){
    synth.text = text
    window.speechSynthesis.speak(synth)
}
function transformInObj(name){
    let nameSplited = name.toLowerCase().split("")
    let object = {}
    nameSplited.forEach(letter => {
        if(letter != " "){
            if(!object[letter]){
                object[letter] = 1
            } else {
                object[letter]++
            }
        }
    }); 
    return object
}
function analyzingName(name){
    let sumName = 0
    name.split("").forEach(letter=>{
        sumName += tableCabalistic[letter]
    })
    while (sumName>9) {
        let digito1 = sumName.toString()[sumName.toString().length-1]
        sumName = Number(sumName) - Number(digito1)
        sumName = sumName / 10
        sumName = Number(sumName) + Number(digito1)
    }
    return sumName
}