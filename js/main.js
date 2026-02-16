const body = document.querySelector("body");
const comStyleBody = getComputedStyle(body);
const main = document.querySelector("main");
const comStyleMain = getComputedStyle(main);
const header = document.querySelector("header");
const comStyleHeader = getComputedStyle(header);

const hamburgerButton = document.querySelector("#hamburger-button");
const comStyleHamBtn = getComputedStyle(hamburgerButton);

const hamBtnLineParents = document.querySelectorAll("[id^=ham-line-parent-]");
console.log(hamBtnLineParents);
console.log(hamBtnLineParents[0].children[1]);


const hamburgerMenu = document.querySelector("#hamburger-menu");
const comStyleHamMenu = getComputedStyle(hamburgerMenu);
const hamburgerBackground = document.querySelector("#hamburger-background");
const comStyleHamBg = getComputedStyle(hamburgerBackground);

// origin setting
for(let i = 0;i < hamBtnLineParents.length;i++)
{
  hamBtnLineParents[i].children[0].style.transformOrigin = "right";
  hamBtnLineParents[i].children[1].style.transformOrigin = "left";
}
// --------------
//-------
  const hamburgerScaleAnimation = 
    {
      scale: ["100% 100%", "5% 100%"],
      opacity:["100%","100%"]
    };
  console.log(hamburgerScaleAnimation);

  const openHamburgerDownAnimation =
  {
    translate: ["100% 100%", "0 400%"],
  }
  const openHamburgerUpAnimation = {
    translate: ["100% 100%", "0 -400%"],
  };


  const closeHamburgerDownAnimation = {
    translate: ["0% -400%", "0"],
  };
  const closeHamburgerUpAnimation = {
    translate: ["0% 400%", "0"],
  };

  const hamOpDuraTime = 1000;
  const hamburgerAnimationOption =
    {
      duration: hamOpDuraTime,
      fill: "forwards",
      ease: "line",
    }
  const hamburgerAnimationOptionHalfDuration =
    {
      duration: hamOpDuraTime / 2
      ,fill: "forwards"
      ,ease: "line",
    }
  
//--------
//test
function openHamBtnAnimate()
{

  for (let i = 0; i < hamBtnLineParents.length; i++) {
    for (let j = 0; j < hamBtnLineParents[0].children.length; j++) {
      if ((i + 1) % 2 == 0) {
        
        hamBtnLineParents[i].children[j].animate(
          hamburgerScaleAnimation,
          hamburgerAnimationOption,
        );
      } else {
        
        hamBtnLineParents[i].children[j].animate(
          hamburgerScaleAnimation,
          hamburgerAnimationOptionHalfDuration,
        );
        setTimeout(() => {
          hamBtnLineParents[0].children[j].animate(
            openHamburgerDownAnimation,
            hamburgerAnimationOptionHalfDuration,
          );

          hamBtnLineParents[2].children[j].animate(
            openHamburgerUpAnimation,
            hamburgerAnimationOptionHalfDuration,
          );
        }, hamOpDuraTime / 2);
        setTimeout(() => {
          hamBtnLineParents[i].children[j].style.rotate = "45deg";
          //右上と左下だけ斜め右上に向ける
          if (Boolean(i) ^ Boolean(j)) {
            hamBtnLineParents[i].children[j].style.rotate = "-45deg";
          }
          //-----------
          hamBtnLineParents[i].children[j].animate(
            {
              scale: ["100%"],
            },
            hamburgerAnimationOption,
          );
        }, hamOpDuraTime);
      }
    }
  }
}
function closeHamBtnAnimate() {

  for (let i = 0; i < hamBtnLineParents.length; i++) {
    for (let j = 0; j < hamBtnLineParents[0].children.length; j++) {
      if ((i + 1) % 2 == 0) {//真ん中の線だけ
        hamBtnLineParents[i].children[j].animate(
          {
            scale:["100%"]
          }
          ,hamburgerAnimationOption,
        );
        console.log("close center");
      } else {

        hamBtnLineParents[i].children[j].style.rotate = "0deg";

        hamBtnLineParents[0].children[j].animate(
          closeHamburgerUpAnimation,
          hamburgerAnimationOptionHalfDuration,
        );

        hamBtnLineParents[2].children[j].animate(
          closeHamburgerDownAnimation,
          hamburgerAnimationOptionHalfDuration,
        );

        setTimeout(() => {

        }, hamOpDuraTime / 2);

        setTimeout(() => {
         // top & bottom のscale
        }, hamOpDuraTime);
      }
    }
  }
}

//----
hamburgerButton.addEventListener("click", () => {
  // hamburgerMenu.animate(
  //   {

  //   }
  //   ,hamburgerAnimationOption
  // );
  console.log("hamBtn is clicked.");
  console.log(comStyleHamMenu.display);
  if (hamburgerBackground.style.display == "none") {
    hamburgerBackground.style.display = "initial";
    openHamBtnAnimate();
  } else if (hamburgerBackground.style.display == "initial") {
    hamburgerBackground.style.display = "none";
    closeHamBtnAnimate();
  } else {
    hamburgerBackground.style.display = "initial";
    openHamBtnAnimate();
  }
  console.log(comStyleHamMenu.display);
});
/*
hamburgerButtonClose.addEventListener("click"
  ,()=>{

   
  }
  
);
*/
/*if (comStyleHamBg.display == "block") {
      hamburgerBackground.style.display = "none"; */



