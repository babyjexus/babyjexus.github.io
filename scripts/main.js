let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/covid2020.png') {
        myImage.setAttribute('src','images/korn-me.png');
    } else {
        myImage.setAttribute('src','images/covid2020.png');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
    localStorage.setItem('name',myName);
    myHeading.textContent = 'Covid19 in 2020 welcomes '+ myName;
    }
}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Covid19 in 2020 welcomes '+ storedName;
}

myButton.onclick = function() {
    setUserName();
}