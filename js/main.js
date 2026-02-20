"use strict";
const body = document.querySelector("body");

class Window{

  constructor(parentElement){
    this.element = document.createElement("div");

    this.parentElement = parentElement;
    this.parentElement.appendChild(this.element);


  }

  setDefaultStyle(){
    this.element.style.backgroundColor = "#000000";
    this.element.style.color = "#ffffff";
    this.element.style.width = "100px";
    this.element.style.height = "100px";
  }

  start(){
    setDefaultStyle();
  }
  /* メソッドをどんな感じで分けるか考える */
    
  
  /* 背景色などのスタイルの設定 作る */
  /* タイトルバー 最小化 最大化 終了ボタン 作る */
  
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




