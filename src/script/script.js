let synth = new SpeechSynthesisUtterance();
let audio = document.querySelector("#mainAudio")
let _name = ""
let _fullName = ""
let selectedName = false
let presentationDestiny = false
let presentationExpression = false
let presentationMotivation = false
let destiny = false
let expression = false
let motivarion = false
let introductionExpression = false
let introductionMotivation = false
let ended = false

function starAnalyzing() {
    if(!selectedName){
        _name = document.querySelector("#inputName").value
        if(_name == ""){
            alert("digite seu nome")
            return
        }
        selectedName = true
        showSec('secInputDate')
        return
    }
    if(!presentationDestiny){
        playPresentationDestiny()
        return
    }
    if(!destiny){
        playDestiny()
        return
    }
    if(!introductionExpression){
        playIntroductionExpression()
        return
    }
    if(!presentationExpression){
        _fullName = document.querySelector("#inputFullName").value
        if(_fullName == ""){
            alert("digite seu nome")
            return
        }
        playPresentationExpression()
        return
    }
    if(!expression){
        playExpression()
        return
    }
    if(!introductionMotivation){
        playintroductionMotivation()
        return
    }
    if(!presentationMotivation){
        playPresentetionMotivation()
        return
    }
    if(!motivarion){
        playMotivarion()
        return
    }
    if(!ended){
        playEnded()
        return
    }

} 


function getDate(){
    let selecDay = document.querySelector("#inputDay")
    let selecMonth = document.querySelector("#inputMonth")
    let selecYear = document.querySelector("#inputYear")
    let selectedDay = selecDay.options[selecDay.selectedIndex].value
    let selectedMonth = selecMonth.options[selecMonth.selectedIndex].value
    let selectedYear = selecYear.options[selecYear.selectedIndex].value
    return [selectedDay, selectedMonth, selectedYear]
}


function checkInputs(){
    let [selectedDay, selectedMonth, selectedYear] = getDate()
    if(selectedDay == ""){
        alert("Coloque o seu dia de nascimento")
        return true
    }
    if(selectedMonth == ""){
        alert("Coloque o seu mes de nascimento")
        return true
    }
    if(selectedYear == ""){
        alert("Coloque o seu ano de nascimento")
        return true
    }
    return false
}


function calcDestiny(){
    let [selectedDay, selectedMonth, selectedYear] = getDate()
    let sDay = synthesizeNumber(selectedDay)
    let sMonth = synthesizeNumber(selectedMonth)
    let sYear = synthesizeNumber(selectedYear)
    let sumNumber = sDay + sMonth + sYear
    let sDestiny = synthesizeNumber(sumNumber)
    return sDestiny
}

function calcExpression(){
    let nameFull = _fullName.toLocaleLowerCase().replaceAll(" ", "").replaceAll("a", "").replaceAll("e", "").replaceAll("i", "").replaceAll("o", "").replaceAll("u", "")
    let sumNumber = 0
    nameFull.split("").forEach(letter=>{
        sumNumber += tableCabalistic[letter]
    })
    return synthesizeNumber(sumNumber)
}

function calcMotivation(){
    let nameFull = _fullName.toLocaleLowerCase().replaceAll(" ", "")
    let sumNumber = 0
    nameFull.split("").forEach(letter=>{
        switch (letter) {
            case "a": sumNumber += tableCabalistic[letter]; break;
            case "e": sumNumber += tableCabalistic[letter]; break;
            case "i": sumNumber += tableCabalistic[letter]; break;
            case "o": sumNumber += tableCabalistic[letter]; break;
            case "u": sumNumber += tableCabalistic[letter]; break;
            default:
                break;
        }
        
    })
    return synthesizeNumber(sumNumber)
}

function synthesizeNumber(number){
    let baseNum = Number(number)
    while (baseNum>9) {
        if(baseNum == 11 || baseNum == 22 || baseNum == 33){
            return baseNum
        }
        let baseSum = 0
        baseNum.toString().split("").forEach(num=>{
            baseSum += Number(num)
        })
        baseNum = baseSum
    }
    return baseNum
}

function showSec(section){
    hideSec()
    document.querySelector("#"+section).style.display = "flex"
}
function hideSec(){
    document.querySelectorAll("section").forEach(element=>{
        element.style.display = "none"
    })
}
function setCalendar(){
    let months = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]
    document.querySelector("#inputDay").innerHTML = `<option value="">Coloque um Dia</option>`
    document.querySelector("#inputMonth").innerHTML = `<option value="">Coloque um Mes</option>`
    document.querySelector("#inputYear").innerHTML = `<option value="">Coloque um Ano</option>`
    for(let day=1;day<32;day++){
        if(day<10){
            document.querySelector("#inputDay").innerHTML += `<option value='0${day}'>0${day}</option>`
        } else {
            document.querySelector("#inputDay").innerHTML += `<option value='${day}'>${day}</option>`
        }
    }
    for(let month=1;month<13;month++){
        if(month<10){
            document.querySelector("#inputMonth").innerHTML += `<option value='0${month}'>${months[month-1]}</option>`
        } else {
            document.querySelector("#inputMonth").innerHTML += `<option value='${month}'>${months[month-1]}</option>`
        }
    }
    for(let year=0;year<100;year++){
        document.querySelector("#inputYear").innerHTML += `<option value=${(2023 - year)}>${(2023 - year)}</option>`
    }
}
function playAndStop(){
    if(audio.paused){
        audio.play()
    } else {
        audio.pause()
    }
}
showSec("secInputName")
setCalendar()