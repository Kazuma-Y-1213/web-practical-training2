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

// ここから クラス

const unitAry = ["px", "em", "rem", "%", "vw", "vh"];
function showUnitAry() {
  console.log("--unitAry--");
  unitAry.forEach((aaa) => {
    console.log(aaa);
  });
  console.log("-----------");
}
showUnitAry();

class Window {
  constructor(parentElement) {
    this.element = document.createElement("div");
    this.parentElement = parentElement;
    this.parentElement.appendChild(this.element);
  }
  checkedColorCode(colorCode) {
    return colorCode.slice(0, 1).includes("#");
    //includes の返り値 はtrue/false.
  }
  setBackGroundColor(colorCode) {
    if (checkedColorCode(colorCode)) {
      this.element.style.backgroundColor = colorCode;
    } else {
      console.log(`setBackGroundColor:${colorCode}`);
    }
  }
  setTextColor(colorCode) {
    if (checkedColorCode(colorCode)) {
      this.element.style.color = colorCode;
    } else {
      console.log(`setTextColor:${colorCode}`);
    }
  }
  // string.includes() は 文字列 の中に 引数の値が
  // あったら true
  // なかったら false
  // 返り値が T/F だから そのまま flg変数に入れられる.
  checkedUnit(value) {
    // 文字列の中間に、単位に該当する文字列が入っててもtrueにしちゃうぽいからゴミ. 123px23 とか.
    // string を array にすれば 一応いけなくもない
    let returnFlg = false;
    for (let i = 0; i < unitAry.length; i++) {
      returnFlg = value.includes(unitAry[i]);
      if (returnFlg == true) {
        return returnFlg;
      }
    }
    return returnFlg;
  }

  setWindowWidth(width) {
    if (this.checkedUnit(width)) {
      this.element.style.width = width;
    }
  }
  setWindowHeight(height) {
    if (this.checkedUnit(height)) {
      this.element.style.height = height;
    }
  }
  setDefaultColor() {
    this.setBackGroundColor("#000000");
    this.setTextColor("#ffffff");
  }
  setTestWidthHeight() {
    this.setWindowWidth("100px");
    this.setWindowHeight("100px");
  }

  makeTitleTextRectangle(text, parentElement) {
    this.titleTextRectangle = createElement("div");
    this.titleTextRectangle.innerText(text);
    parentElement.appendChild(this.titleTextRectangle);
  }
  makeMinBtn(parentElement) {
    this.minBtn = createElement("div");
    parentElement.appendChild(this.minBtn);
  }
  makeMaxBtn(parentElement) {
    this.maxBtn = createElement("div");
    parentElement.appendChild(this.maxBtn);
  }
  makeDelBtn(parentElement) {
    this.delBtn = createElement("div");
    parentElement.appendChild(this.delBtn);
  }
  makeParentTitleBar() {
    // どうする
    this.parentTitleBar = createElement("div");
  }
  margedTitleBar() {
    this.makeTitleText(parentElement);
    this.makeMinBtn(parentElement);
    this.makeMaxBtn(parentElement);
    this.makeDelBtn(parentElement);
  }
  setTitleBarBtnStyle() {
    this.element.setAttribute("class", ".title-bar-layout");
  }
  makeWindow() {
    this.setDefaultColor();
    this.setTestWidthHeight(); // とりあえずテストって名前つけたけどたぶんずっとこのまま
    this.margedTitleBar();
    this.setTitleBarBtnStyle();
  }
  /* メソッドをどんな感じで分けるか考える */

  /* 背景色などのスタイルの設定 作る */
  /* タイトルバー 最小化 最大化 終了ボタン 作る */
  /* タイトル文変更できるようにする */
}

class temp {
  //書きかけの属性・メソッドを保存しておくためのクラス コメントだと 文字色が一色だから見づらい.
  constructor() {
    this.id;
    this.class;
    if (idOrClass.indexOf("#") == 0) {
      console.log("id");
      this.id = idOrClass.slice(1);
      this.element.setAttribute("id", this.id);
      console.log(`CliWindow's id: ${this.id}`);
    } else if (idOrClass.indexOf(".") == 0) {
      console.log("class");
      this.class = idOrClass.slice(1);
      this.element.setAttribute("class", this.class);
      console.log(`CliWindow's class: ${this.class}`);
    } else {
      console.log(
        `.\nid: ${this.id}\nclass: ${this.class}`,
      );
    }
  }
}

class CliWindow extends Window {}

const cliWindow = new CliWindow(body);
console.log(cliWindow.checkedColorCode("#aaa"));
cliWindow.makeWindow();


