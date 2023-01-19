let keys = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1El = document.getElementById("password-1")
let password2El = document.getElementById("password-2")

function generate() {
    let bitOne = Math.floor(Math.random() * keys.length)
    let bitTwo = Math.floor(Math.random() * keys.length)
    let bitThree = Math.floor(Math.random() * keys.length)
    let bitFour = Math.floor(Math.random() * keys.length)
    let bitFive = Math.floor(Math.random() * keys.length)
    
    let bitSix = Math.floor(Math.random() * keys.length)
    let bitSeven = Math.floor(Math.random() * keys.length)
    let bitEight = Math.floor(Math.random() * keys.length)
    let bitNine = Math.floor(Math.random() * keys.length)
    let bitTen = Math.floor(Math.random() * keys.length)
    let bitTwelve = Math.floor(Math.random() * keys.length)
    let bitThirteen = Math.floor(Math.random() * keys.length)
    let bitFourteen = Math.floor(Math.random() * keys.length)
    let bitEleven = Math.floor(Math.random() * keys.length)
    let bitFifteen = Math.floor(Math.random() * keys.length)


    let bytOne = Math.floor(Math.random() * keys.length)
    let bytTwo = Math.floor(Math.random() * keys.length)
    let bytThree = Math.floor(Math.random() * keys.length)
    let bytFour = Math.floor(Math.random() * keys.length)
    let bytFive = Math.floor(Math.random() * keys.length)
    
    let bytSix = Math.floor(Math.random() * keys.length)
    let bytSeven = Math.floor(Math.random() * keys.length)
    let bytEight = Math.floor(Math.random() * keys.length)
    let bytNine = Math.floor(Math.random() * keys.length)
    let bytTen = Math.floor(Math.random() * keys.length)
    let bytTwelve = Math.floor(Math.random() * keys.length)
    let bytThirteen = Math.floor(Math.random() * keys.length)
    let bytFourteen = Math.floor(Math.random() * keys.length)
    let bytEleven = Math.floor(Math.random() * keys.length)
    let bytFifteen = Math.floor(Math.random() * keys.length)

    

    
    

    password1El.textContent = keys[bitOne] + keys[bitFive] + keys[bitThree] + keys[bitFour] + keys[bitTwo] + keys[bitSix] + keys[bitSeven] + keys[bitEight] + keys[bitNine] + keys[bitTen] + keys[bitEleven] + keys[bitTwelve] + keys[bitThirteen] + keys[bitFourteen] + keys[bitFifteen]
    password2El.textContent = keys[bytOne] + keys[bytFive] + keys[bytThree] + keys[bytFour] + keys[bytTwo] + keys[bytSix] + keys[bytSeven] + keys[bytEight] + keys[bytNine] + keys[bytTen] + keys[bytEleven] + keys[bytTwelve] + keys[bytThirteen] + keys[bytFourteen] + keys[bytFifteen]

}   

