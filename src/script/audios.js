function playPresentationDestiny(){
    if(checkInputs()){
        return
    }
    let [selectedDay, selectedMonth, selectedYear] = getDate()
    document.querySelector("#analizingName").innerHTML = _name
    document.querySelector("#analizingDate").innerHTML = `${selectedDay} / ${selectedMonth} / ${selectedYear}`
    showSec('secAnalizing')
    audio.src = "./src/audios/presentationOnDestiny.mp3"
    audio.play()
    audio.addEventListener("ended", presDes)
    audio.addEventListener("timeupdate", timeupdateAudio)
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
    audio.src = `./src/audios/introductionExpression.mp3`
    audio.play()
    audio.addEventListener("ended", intExpre)
    function intExpre(){
        introductionExpression = true
        showSec('secFullName')
        audio.removeEventListener("ended", intExpre)
    }
}
function playPresentationExpression(){
    showSec('secAnalizing')
    document.querySelector("#secAnalizing").innerHTML = `
    <h2 id="analizingName"></h2>
    <img src="https://static.wixstatic.com/media/204c2d_e9e0cd7cafdf41c88c4651d449dd9556~mv2.png/v1/fit/w_500,h_500,q_90/file.png" alt="" class="imgSpin">

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
        audio.removeEventListener("ended", intMot)
    }
}
function playPresentetionMotivation(){
    showSec('secAnalizing')
    document.querySelector("#secAnalizing").innerHTML = `
    <h2 id="analizingName"></h2>
    <img src="https://static.wixstatic.com/media/204c2d_e9e0cd7cafdf41c88c4651d449dd9556~mv2.png/v1/fit/w_500,h_500,q_90/file.png" alt="" class="imgSpin">
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
    <img src="./src/images/motivacao/${numberMotivation}.png" class="imgFocus">
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
    <img src="https://static.wixstatic.com/media/204c2d_e9e0cd7cafdf41c88c4651d449dd9556~mv2.png/v1/fit/w_500,h_500,q_90/file.png" alt="" class="imgSpin">
    `
    document.querySelector("#analizingName").innerHTML = _fullName
    audio.play()
    audio.addEventListener("ended", audio2)
    function audio2(){
        audio.removeEventListener("ended", audio2)
        audio.src = `./src/audios/end2.mp3`
        audio.play()
        audio.addEventListener("ended", audio3)
    }
    function audio3(){
        audio.removeEventListener("ended", audio3)
        ended = true
        showSec('secBuy')
        audio.src = `./src/audios/end3.mp3`
        audio.play()
    }
}