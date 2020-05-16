let myImage = document.getElementById('imagen')

myImage.onclick = function() {
	let myScr =	myImage.getAttribute('scr');
	if (myScr === 'images/firefox.png') {
		myImage.setAttribute('scr', 'images/gatitos-tiernos.jpg')
	} else {
			myImage.setAttribute('scr', 'images/firefox.png')
	}
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
	
myHeading.onclick = function() {
	setUserName();
}

function setUserName() {
	let myName = prompt('Please enter your name.');
	if (!myName || myName === null) {
		setUserName();
	} else { 
	localStorage.setItem('name','myName');
	myHeading.textContent = 'Mozilla is cool, ' + myName;
	}
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	let storedName = localStorage.getItem('name');
	myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
