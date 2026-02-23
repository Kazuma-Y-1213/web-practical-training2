"use strict";
const body = document.querySelector("body");
const unitAry = ["px","em","rem","%","vw","vh"];
function showUnitAry(){
  console.log("--unitAry--");
  unitAry.forEach(
    (aaa)=>{
      console.log(aaa);
    }
  );
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

  makeTitleTextRectangle(text,parentElement) {
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
  makeParentTitleBar(){
    //muriunkobaka
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


class temp{
//書きかけの属性・メソッドを保存しておくためのクラス コメントだと 文字色が一色だから見づらい.
  constructor(){
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
     `CliWindow's id and class that is none.\nid: ${this.id}\nclass: ${this.class}`,
   );
 }
  }

}



class CliWindow extends Window {
  

}

const cliWindow = new CliWindow(body);
console.log(cliWindow.checkedColorCode("#aaa"));
cliWindow.makeWindow();



/*

class Window{
  constructor(parentElement){
    this.element = document.createElement("div");
    this.element.style.backgroundColor = "#000000";
    this.element.style.color = "#ffffff";
    this.element.style.width = "100px";
    this.element.style.height = "100px";
    
    this.parentElement = parentElement;
    this.parentElement.appendChild(this.element);
  }
}

class CliWindow extends Window {
//何もなし
}

//extends している時点で window から 諸々を引き継ぐ.

class CliWindow extends Window {
  constructor(parentElement) {
    super(parentElement);
  }

//恐らくsuper()は本来引数が複数あるときに使うもの

    constructor(A,B,C){
    super(A,B)
    const temp = c;
    }

//こんな感じで親から継承するconstructor引数と子クラスで新しく初期化(宣言?)するを変えるために使う?
}
*/
/*
  make class
  play class
  etc.. class 

  こんな感じでhtmlのelement とは違う基準で分けて、
  *メッセージのやり取り* をすることが大切.
  メッセージのやり取りは 専門用語だった気がする
  */