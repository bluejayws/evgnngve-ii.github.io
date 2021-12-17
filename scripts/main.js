

// PRACTICE
// const myHeading = document.querySelector('h1'); //grab reference to heading
// myHeading.textContent = 'CheemScript'; //store in variable, set text
//
// // This process ^ is similar to what's done in CSS
// //  Select an element, do something to it.
//
// let myHTML = document.querySelector('html');
// myHTML.onclick = function() {
//   alert("*GNOME GNOISES*")
// };
// Select an element, do something to it.
//
//
// // IMAGE CLICK SWITCHING
// let myImage = document.querySelector('img');
// // Anonymous function is used here
// myImage.onclick = function() {
//   let mySrc = myImage.getAttribute('src');
//   if(mySrc === 'images/pixel-cheems.png') {
//     myImage.setAttribute('src','images/me-meow.png');
//   } else {
//     myImage.setAttribute('src', 'images/pixel-cheems.png');
//   }
// };
//
// // SET OR SHOW USERNAME TO NEW OR PAST USERS
// let myButton = document.querySelector('button');
// myButton.onclick = function () {
//   setUserName();
// }
//
// function setUserName() {
//   // Ask for text data from user. Data stored after user clicks "OK"
//   let myName = prompt('Please enter your name: ');
//
//   // check if myName is null; User pressed enter w/empty input
//   if (!myName) {
//     setUserName();
//   } else {
//     // Store data in browser for later use, using Key-Value
//     localStorage.setItem('name', myName);
//     myHeading.textContent = 'Mozilla is cool, ' + myName;
//   }
// }
//
// let myHeading = document.querySelector('h1');
// // If the localStorage doesn't have a value with key of 'name'...
// if(!localStorage.getItem('name')) {
//   setUserName();
// } else {
//   let storedName = localStorage.getItem('name');
//   myHeading.textContent = 'Mozilla is cool, ' + storedName;
// }
