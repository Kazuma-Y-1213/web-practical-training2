const body = document.querySelector("body");
const comStyleBody = getComputedStyle(body);
const main = document.querySelector("main");
const comStyleMain = getComputedStyle(main);
const header = document.querySelector("header");
const comStyleHeader = getComputedStyle(header);

const hamburgerButtonOpen = document.querySelector("#hamburger-button-open");
const comStyleHamBtnOpen = getComputedStyle(hamburgerButtonOpen);
const hamburgerButtonClose = document.querySelector("#hamburger-button-close");
const comStyleHamBtnClose = getComputedStyle(hamburgerButtonClose);
const hamburgerMenu = document.querySelector("#hamburger-menu");
const comStyleHamMenu = getComputedStyle(hamburgerMenu);
const hamburgerBackground = document.querySelector("#hamburger-background");
const comStyleHamBg = getComputedStyle(hamburgerBackground);




const hamburgerAnimationOption = {
  duration:2000
}
hamburgerButtonOpen.addEventListener("click"
  ,()=>{
    // hamburgerMenu.animate(
    //   {
        
    //   }
    //   ,hamburgerAnimationOption
    // );

    hamburgerBackground.style.display = "initial";
    hamburgerButtonOpen.style.display = "none";
    hamburgerButtonClose.style.display = "flex";

    console.log(comStyleHamMenu.display);
    

  }
);
hamburgerButtonClose.addEventListener("click"
  ,()=>{

     hamburgerBackground.style.display = "none";
     hamburgerButtonOpen.style.display = "flex";
     hamburgerButtonClose.style.display = "none";
  }
  
);
/*if (comStyleHamBg.display == "block") {
      hamburgerBackground.style.display = "none"; */



