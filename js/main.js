"use strict";
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
//npm install -p typescript kokomadeyatta.
// origin setting
for (let i = 0; i < hamBtnLineParents.length; i++) {
  hamBtnLineParents[i].children[0].style.transformOrigin = "right";
  hamBtnLineParents[i].children[1].style.transformOrigin = "left";
}
// --------------

console.log(hamBtnLineParents[0].children[0].getBoundingClientRect().top);
console.log(hamBtnLineParents[1].children[0].getBoundingClientRect().top);

//-------
const hamLineScale = 5;
const shrinkHamLineScaleKeyframes = {
  scale: ["100% 100%", `${hamLineScale}% 100%`],
  opacity: ["100%", "100%"],
};
const extendHamLineScaleKeyframes = {
  scale: [`${hamLineScale}% 100%`, "100% 100%"],
  opacity: ["100%", "100%"],
};
console.log(shrinkHamLineScaleKeyframes);
const hamLineMove =
  hamBtnLineParents[1].children[0].getBoundingClientRect().top -
  hamBtnLineParents[0].children[0].getBoundingClientRect().top;
const moveDownHamLineKeyframesOpen = {
  translate: ["100% 100%", `0% ${hamLineMove}px`],
};
const moveUpHamLineKeyframesOpen = {
  translate: ["100% 100%", `0% -${hamLineMove}px`],
};

const moveDownHamLineKeyframesClose = {
  translate: [`0% -${hamLineMove}px`, "0"],
};
const moveUpHamLineKeyframesClose = {
  translate: [`0% ${hamLineMove}px`, "0"],
};

const hamOpDuraTime = 250;
const hamLineAnimationOption = {
  duration: hamOpDuraTime,
  fill: "forwards",
  ease: "ease-out",
};
const hamLineAnimationOptionHalf = {
  duration: hamOpDuraTime / 2,
  fill: "forwards",
  ease: "ease-out",
};

//--------
//test
// openHamBtnAnimate
/*
  中間の線が中心に向かって縮む ---- 0.5

  1.*0.0*
    上下の線が中心に向かって縮む ---- 0.5
  2.*0.5*
    その後中心に集まるために上下に動く -----0.5
  3.*1.0*
    上下の線の角度が変わる ---- 0.0
    100%まで伸びる ---- 0.5

*/
  function openHamBtnAnimate() {
    console.log("in openHamFunction");
    for (let i = 0; i < hamBtnLineParents.length; i++) {
      for (let j = 0; j < hamBtnLineParents[0].children.length; j++) {
        if ((i + 1) % 2 == 0) {
          
          hamBtnLineParents[i].children[j].animate(
            shrinkHamLineScaleKeyframes,
            hamLineAnimationOptionHalf,
          );
        } else {
          // ------ 1 --------
          hamBtnLineParents[i].children[j].animate(
            shrinkHamLineScaleKeyframes,
            hamLineAnimationOptionHalf,
          );
          // ------ 2 --------
          setTimeout(() => {
            hamBtnLineParents[0].children[j].animate(
              moveDownHamLineKeyframesOpen,
              hamLineAnimationOptionHalf,
            );

            hamBtnLineParents[2].children[j].animate(
              moveUpHamLineKeyframesOpen,
              hamLineAnimationOptionHalf,
            );
          }, hamOpDuraTime / 2);
          // ------- 3 --------
          

          setTimeout(() => {
            // 角度 -----
            hamBtnLineParents[i].children[j].style.rotate = "45deg";
            if (Boolean(i) ^ Boolean(j)) {//右上と左下だけ斜め右上に向ける
              hamBtnLineParents[i].children[j].style.rotate = "-45deg";
            }
            //-----------
            hamBtnLineParents[i].children[j].animate(
              {
                scale: ["100%"],
              },
              hamLineAnimationOptionHalf,
            );
          }, hamOpDuraTime);
        }
      }
    }
  }
  /*
  
  1.*0.0*
    斜めになった上下の線を縮める ---- 0.5
    
  2.*0.5*
    上下の線の角度を0degに戻す ---- 0.0
    上下に移動させる ---- 0.5
    中間の線を100%まで伸ばす ---- 0.5
    
  3.*1.0*
    上下の線を伸ばす ---- 0.5
    

  */
  function closeHamBtnAnimate() {
    for (let i = 0; i < hamBtnLineParents.length; i++) {
      for (let j = 0; j < hamBtnLineParents[0].children.length; j++) {
        if ((i + 1) % 2 == 0) {
          //真ん中の線だけ
          setTimeout(()=>{
              hamBtnLineParents[i].children[j].animate(
                {
                  scale: ["100%"],
                },
                hamLineAnimationOptionHalf,
              );
          }
          ,hamOpDuraTime /2
          );
          console.log("close center");
        } else {
          
          // ------ 1 ------
          hamBtnLineParents[i].children[j].animate(
            shrinkHamLineScaleKeyframes
            ,hamLineAnimationOptionHalf
          );
          // --------------
          // ------- 2 ---------

          setTimeout(() => {
            // 角度 -----
            hamBtnLineParents[i].children[j].style.rotate = "0deg";
            // ---------

            console.log(hamBtnLineParents[i].children[j].style.scale, i, j);
            hamBtnLineParents[0].children[j].animate(
              moveUpHamLineKeyframesClose,
              hamLineAnimationOptionHalf,
            );

            hamBtnLineParents[2].children[j].animate(
              moveDownHamLineKeyframesClose,
              hamLineAnimationOptionHalf,
            );
          }, hamOpDuraTime / 2);

          // ------- 3 ---------
          setTimeout(() => {
            hamBtnLineParents[i].children[j].animate(
              extendHamLineScaleKeyframes,
              hamLineAnimationOptionHalf,
            );
          }, hamOpDuraTime / 2);

          

          // setTimeout(() => {
          //  // top & bottom のscale
          // }, hamOpDuraTime);
        }
      }
    }
  }

//----
let canClickBtnFlg = true;
hamburgerButton.addEventListener("click", () => {
  // hamburgerMenu.animate(
  //   {

  //   }
  //   ,hamLineAnimationOption
  // );

  if (canClickBtnFlg) {
    canClickBtnFlg = false;
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
    setTimeout(() => {
      canClickBtnFlg = true;
    }, hamOpDuraTime * 1.5);
  }
});
/*
hamburgerButtonClose.addEventListener("click"
  ,()=>{

   
  }
  
);
*/
/*if (comStyleHamBg.display == "block") {
      hamburgerBackground.style.display = "none"; */
