var container = document.getElementsByClassName("smol")[0];
container.onkeyup = function(e) {
    var target = e.srcElement || e.target;
    var maxLength = parseInt(target.attributes["maxlength"].value, 10);
    var myLength = target.value.length;
    if (myLength >= maxLength) {
        var next = target;
        while (next = next.nextElementSibling) {
            if (next == null)
                break;
            if (next.tagName.toLowerCase() === "input") {
                next.focus();
                break;
            }
        }
    }
    // Move to previous field if empty (user pressed backspace)
    else if (myLength === 0) {
        var previous = target;
        while (previous = previous.previousElementSibling) {
            if (previous == null)
                break;
            if (previous.tagName.toLowerCase() === "input") {
                previous.focus();
                break;
            }
        }
    }
}

var container = document.getElementsByClassName("smol")[1];
container.onkeyup = function(e) {
    var target = e.srcElement || e.target;
    var maxLength = parseInt(target.attributes["maxlength"].value, 10);
    var myLength = target.value.length;
    if (myLength >= maxLength) {
        var next = target;
        while (next = next.nextElementSibling) {
            if (next == null)
                break;
            if (next.tagName.toLowerCase() === "input") {
                next.focus();
                break;
            }
        }
    }
    // Move to previous field if empty (user pressed backspace)
    else if (myLength === 0) {
        var previous = target;
        while (previous = previous.previousElementSibling) {
            if (previous == null)
                break;
            if (previous.tagName.toLowerCase() === "input") {
                previous.focus();
                break;
            }
        }
    }
}

var container = document.getElementsByClassName("smol")[2];
container.onkeyup = function(e) {
    var target = e.srcElement || e.target;
    var maxLength = parseInt(target.attributes["maxlength"].value, 10);
    var myLength = target.value.length;
    if (myLength >= maxLength) {
        var next = target;
        while (next = next.nextElementSibling) {
            if (next == null)
                break;
            if (next.tagName.toLowerCase() === "input") {
                next.focus();
                break;
            }
        }
    }
    // Move to previous field if empty (user pressed backspace)
    else if (myLength === 0) {
        var previous = target;
        while (previous = previous.previousElementSibling) {
            if (previous == null)
                break;
            if (previous.tagName.toLowerCase() === "input") {
                previous.focus();
                break;
            }
        }
    }
}

var container = document.getElementsByClassName("smol")[3];
container.onkeyup = function(e) {
    var target = e.srcElement || e.target;
    var maxLength = parseInt(target.attributes["maxlength"].value, 10);
    var myLength = target.value.length;
    if (myLength >= maxLength) {
        var next = target;
        while (next = next.nextElementSibling) {
            if (next == null)
                break;
            if (next.tagName.toLowerCase() === "input") {
                next.focus();
                break;
            }
        }
    }
    // Move to previous field if empty (user pressed backspace)
    else if (myLength === 0) {
        var previous = target;
        while (previous = previous.previousElementSibling) {
            if (previous == null)
                break;
            if (previous.tagName.toLowerCase() === "input") {
                previous.focus();
                break;
            }
        }
    }
}

let guessnumNumber = Math.floor(1000 + Math.random() * 9000)
let guessNumber = String(guessnumNumber)

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function deadAndWounded(){
    plauyernumGuess = document.getElementById("num1").value + document.getElementById("num2").value + document.getElementById("num3").value + document.getElementById("num4").value
    playerGuess = String(plauyernumGuess)
    console.log(guessNumber)
    console.log(playerGuess)

    dead = 0
    wounded = 0
    position = 0

    while(position < 4){
        if(playerGuess[position] == guessNumber[position]){
            dead += 1
        }
        else if(guessNumber.includes(playerGuess[position]) && playerGuess[position] != guessNumber[position]){
            wounded += 1
        }
        position ++
    }

    if (dead == 4){
        document.getElementById('result').textContent = "All dead, you win!"
    }
    else{
        document.getElementById('result').textContent = `There are ${dead} dead and ${wounded} wounded`
    }

    let list = document.getElementById('guesses');
    let entry = document.createElement('li')
    let historylog = `${playerGuess} (${dead} dead ${wounded} wounded)`
    entry.appendChild(document.createTextNode(historylog));
    list.appendChild(entry)

    await sleep(1000)
    document.getElementById("num1").value = ""
    document.getElementById("num2").value = ""
    document.getElementById("num3").value = ""
    document.getElementById("num4").value = ""

    
}


