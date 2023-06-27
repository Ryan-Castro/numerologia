let synth = new SpeechSynthesisUtterance();
let audio = document.querySelector("#mainAudio")
let presetention = false
let enderEmail = false
let showEmail = false
let ended = false
audio.addEventListener("ended", ()=>{
    starAnalyzing()
})

function starAnalyzing() {
    let _name = document.querySelector("#name").value
    let numberCab = analyzingName(_name)
    if(!presetention){
        document.querySelector("#secInputName").style.display = "none"
        document.querySelector("#secAnalizing").style.display = "flex"
        document.querySelector("#analizingName").innerHTML = _name
        presetention = true
        starAnalyzing()
        return
    }
    if(!enderEmail){
        speak(`./src/audios/inputEmail.mp3`)
        enderEmail = true
        return
    }
    if(!showEmail){
        document.querySelector("#secAnalizing").style.display = "none"
        document.querySelector("#secEmail").style.display = "flex"
        showEmail = true
        return
    }
    if(!ended){
        alert(`aqui vai ter mais um audio`)
        document.querySelector("#secEmail").style.display = "none"
        document.querySelector("#secBuy").style.display = "flex"
        ended = true
    }

} 
function speak(linkAudio){
    audio.src = linkAudio
    
    audio.play()
}

function analyzingName(name){
    let sumName = 0
    name.toLowerCase().split("").forEach(letter=>{
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