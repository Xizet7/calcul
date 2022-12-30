let plusButton = document.querySelector('#plus')
let minusButton = document.querySelector('#minus')
let multiplyButton = document.querySelector('#multiply')
let divideButton = document.querySelector('#divide')

plusButton.addEventListener('click', answerPlus)
minusButton.addEventListener('click', answerMinus)
multiplyButton.addEventListener('click', answerMultiply)
divideButton.addEventListener('click', answerDivide)

function answerPlus(){
    plusButton.style.background = "green";
    minusButton.style.background = "lavender";
    multiplyButton.style.background = "lavender";
    divideButton.style.background = "lavender";
    let numberone = Number(document.querySelector('#first').value);
    let numbertwo = Number(document.querySelector('#second').value);
    sum = numberone + numbertwo;
    document.getElementById("answer").innerHTML=sum;
}
function answerMinus(){
    plusButton.style.background = "lavender";
    minusButton.style.background = "green";
    multiplyButton.style.background = "lavender";
    divideButton.style.background = "lavender";
    let numberone = Number(document.querySelector('#first').value);
    let numbertwo = Number(document.querySelector('#second').value);
    sum = numberone - numbertwo;
    document.getElementById("answer").innerHTML=sum;
}
function answerMultiply(){
    plusButton.style.background = "lavender";
    minusButton.style.background = "lavender";
    multiplyButton.style.background = "green";
    divideButton.style.background = "lavender";
    let numberone = Number(document.querySelector('#first').value);
    let numbertwo = Number(document.querySelector('#second').value);
    sum = numberone * numbertwo;
    document.getElementById("answer").innerHTML=sum;
}
function answerDivide(){
    plusButton.style.background = "lavender";
    minusButton.style.background = "lavender";
    multiplyButton.style.background = "lavender";
    divideButton.style.background = "green";
    let numberone = Number(document.querySelector('#first').value);
    let numbertwo = Number(document.querySelector('#second').value);
    sum = numberone / numbertwo;
    document.getElementById("answer").innerHTML=sum;
}