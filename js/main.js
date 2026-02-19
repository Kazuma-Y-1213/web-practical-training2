"use strict";
const body = document.querySelector("body");

class CliWindow{
  constructor(parentElement,IdOrClass){
    this.element = document.createElement("div");
    this.parentElement = parentElement;
    
    this.backgroundColor = "#000000";
    this.textColor = "#ffffff";
    this.fontSize = "1rem";

    IdOrClass;
    this.element.setAttribute("id",this.id);

    this.parentElement.appendChild(document.getElementById(this.id));
    console.log(document.getElementById(this.id));
  }
}
const cliWindow = new CliWindow(body,"CLI-window");



