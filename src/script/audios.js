function playPresentationDestiny(){
    if(checkInputs()){
        return
    }
    document.querySelector("#container2").style.display = "none"
    document.querySelector("#playAndStop").style.display = "flex"
    let [selectedDay, selectedMonth, selectedYear] = getDate()
    document.querySelector("#analizingName").innerHTML = _name
    document.querySelector("#analizingDate").innerHTML = `${selectedDay} / ${selectedMonth} / ${selectedYear}`
    showSec('secAnalizing')
    audio.src = "./src/audios/presentationOnDestiny.mp3"
    audio.play()
    audio.addEventListener("ended", presDes)
    audio.addEventListener("timeupdate", timeupdateAudio)
    audioFundo.volume = 0.15
    audioFundo.play()
    function presDes(){
        presentationDestiny = true
        audio.removeEventListener("ended", presDes)
        audio.removeEventListener("timeupdate", timeupdateAudio)
        starAnalyzing()
    }
    function timeupdateAudio(){
        if(audio.currentTime.toFixed(2)>4){
            document.querySelector(".text1").style.opacity = 1
        }
        if(audio.currentTime.toFixed(2)>7){
            document.querySelector(".text2").style.opacity = 1
        }
        if(audio.currentTime.toFixed(2)>15){
            document.querySelector(".text1").style.opacity = 0
            document.querySelector(".text2").style.opacity = 0
        }
        if(audio.currentTime.toFixed(2)>17){
            document.querySelector(".text1").innerHTML = "Você fez uma <span>escolha!</span>"
            document.querySelector(".text2").innerHTML = "As oportunidades que você <span>pode ter!</span>"
        }
        if(audio.currentTime.toFixed(2)>24){
            document.querySelector(".text1").style.opacity = 1
        }
        if(audio.currentTime.toFixed(2)>27){
            document.querySelector(".text2").style.opacity = 1
        }
        if(audio.currentTime.toFixed(2)>40){
            document.querySelector(".text1").style.opacity = 0
            document.querySelector(".text2").style.opacity = 0
        }
    }
}
function playDestiny(){
    let numberDestiny = calcDestiny()
    document.querySelector("#secAnalizing").innerHTML = `
    <h2>Seu numero de Destino é o: ${numberDestiny}</h2>
    <img src="./src/images/Destino/${numberDestiny}.png" class="imgFocus">
    `
    audio.src = `./src/audios/destiny/destino${numberDestiny}.mp3`
    audio.play()
    audio.addEventListener("ended", Dest)
    function Dest(){
        destiny = true
        audio.removeEventListener("ended", Dest)
        starAnalyzing()
    }
}
function playIntroductionExpression(){
    let table = false
    let returnTable = false
    audio.src = `./src/audios/introductionExpression.mp3`
    audio.play()
    audio.addEventListener("ended", intExpre)
    audio.addEventListener("timeupdate", timeupdateAudio)
    function intExpre(){
        introductionExpression = true
        showSec('secFullName')
        document.querySelector("#playAndStop").style.display = "none"
        audio.removeEventListener("ended", intExpre)   
        audio.removeEventListener("timeupdate", timeupdateAudio)
    }
    function timeupdateAudio(){
        if(audio.currentTime.toFixed(2)>62 && !table){
            document.querySelector("#secAnalizing").innerHTML = `
                <img src="./src/images/table.jpeg" class="imgFocus" id="tableImg">
            `
            table = true
        }
        if(audio.currentTime.toFixed(2)>77 && !returnTable){
            document.querySelector("#secAnalizing").innerHTML = `
            <img src="./src/images/analizeImg.png" alt="" class="imgSpin">
            `
            returnTable = true
        }
    }
}
function playPresentationExpression(){
    showSec('secAnalizing')
    document.querySelector("#playAndStop").style.display = "flex"
    document.querySelector("#secAnalizing").innerHTML = `
    <h2 id="analizingName"></h2>
    <img src="./src/images/analizeImg.png" alt="" class="imgSpin">

    `
    document.querySelector("#analizingName").innerHTML = _fullName
    audio.src = "./src/audios/presentationExpression.mp3"
    audio.play()
    audio.addEventListener("ended", presExprex)
    function presExprex(){
        presentationExpression = true
        audio.removeEventListener("ended", presExprex)
        starAnalyzing()
    }

}
function playExpression(){
    let numberExpression = calcExpression()
    document.querySelector("#secAnalizing").innerHTML = `
    <h2>Seu numero de Expressão é o: ${numberExpression}</h2>
    <img src="./src/images/Expressao/${numberExpression}.png" class="imgFocus">
    `
    audio.src = `./src/audios/expression/expressao${numberExpression}.mp3`
    audio.play()
    audio.addEventListener("ended", expres)
    function expres(){
        expression = true
        audio.removeEventListener("ended", expres)
        starAnalyzing()
    }
}
function playintroductionMotivation(){
    audio.src = `./src/audios/introductionMotivation.mp3`
    audio.play()
    audio.addEventListener("ended", intMot)
    function intMot(){
        introductionMotivation = true
        showSec('secEmail')
        document.querySelector("#playAndStop").style.display = "none"
        audio.removeEventListener("ended", intMot)
    }
}
function playPresentetionMotivation(){
    showSec('secAnalizing')
   document.querySelector("#playAndStop").style.display = "flex"
    document.querySelector("#secAnalizing").innerHTML = `
    <h2 id="analizingName"></h2>
    <img src="./src/images/analizeImg.png" alt="" class="imgSpin">
    `
    document.querySelector("#analizingName").innerHTML = _fullName
    audio.src = "./src/audios/presentationMotivation.mp3"
    audio.play()
    audio.addEventListener("ended", presMot)
    function presMot(){
        presentationMotivation = true
        audio.removeEventListener("ended", presMot)
        starAnalyzing()
    }
}
function playMotivarion(){
    let numberMotivation = calcMotivation()
    document.querySelector("#secAnalizing").innerHTML = `
    <h2>Seu numero de Motivação é o: ${numberMotivation}</h2>
    <img src="./src/images/Motivacao/${numberMotivation}.png" class="imgFocus">
    `
    audio.src = `./src/audios/motivation/motivacao${numberMotivation}.mp3`
    audio.play()
    audio.addEventListener("ended", mot)
    function mot(){
        motivarion = true
        audio.removeEventListener("ended", mot)
        starAnalyzing()
    }

}
function playEnded(){
    audio.src = `./src/audios/end1.mp3`
    document.querySelector("#secAnalizing").innerHTML = `
    <h2 id="analizingName"></h2>
    <img src="./src/images/analizeImg.png" alt="" class="imgSpin">
    `
    document.querySelector("#analizingName").innerHTML = _fullName
    audio.play()
    audio.addEventListener("ended", audio2)
    function audio2(){
        document.querySelector("#secAnalizing").innerHTML = `
        <img src="./src/images/capa-mapa.png" class="imgFocus">
        `
        audio.removeEventListener("ended", audio2)
        audio.src = `./src/audios/end2.mp3`
        audio.play()
        audio.addEventListener("ended", audio3)
    }
    function audio3(){
        audio.removeEventListener("ended", audio3)
        ended = true
        showSec('secBuy')
        document.querySelector("#playAndStop").style.display = "none"
        audio.src = `./src/audios/end3.mp3`
        audio.play()
    }
}