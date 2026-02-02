const body = document.querySelector("body");
const comStyleBody = getComputedStyle(body);
const main = document.querySelector("main");
const comStyleMain = getComputedStyle(main);
const header = document.querySelector("header");
const comStyleHeader = getComputedStyle(header);




console.log(header);

const gotElementsList = Array(body,main,header);

// hamburgerMenu
const hamburgerMenu = document.querySelector("#hamburger-menu");
console.log(hamburgerMenu);

console.log(hamburgerMenu,"hamburgerMenu");

hamburgerMenu.style.width = body.clientWidth + "px";
const headerMarginTop = header.clientHeight
hamburgerMenu.style.height = main.clientHeight - (header.width + header.style.marginTop + header.style.marginBottom)  + "px";
console.log(header.clientWidth ,comStyleHeader.marginTop , comStyleHeader.marginBottom , "header width");
const bodyMarginLeft = (window.innerWidth - body.clientWidth) / 2;
hamburgerMenu.style.marginLeft = bodyMarginLeft + "px";
// -------------