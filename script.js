"use strict";

//#1. - Vending Machine
let count = 0;
let disp = document.getElementById("display");

const limecola = document.querySelector(".limecola");
const saltedpeanuts = document.querySelector(".saltedpeanuts");
const chocolatebar = document.querySelector(".chocolatebar");
const fruitgummies = document.querySelector(".fruitgummies");

limecola.addEventListener("click", () => {
  count += 2;
  disp.innerHTML = count;
});

saltedpeanuts.addEventListener("click", () => {
  count += 3;
  disp.innerHTML = count;
});

chocolatebar.addEventListener("click", () => {
  count += 4;
  disp.innerHTML = count;
});

fruitgummies.addEventListener("click", () => {
  count += 6;
  disp.innerHTML = count;
});

//#2. - Make Money

const moneyform = document.querySelector(".form-sec");
const coincontainer = document.querySelector(".coin-container");

const addCoinFunction = () => {
  const newCoin = document.createElement("div");
  //based on the number put into the form, need to create that number of divs each time button is clicked -- loop?
  newCoin.setAttribute("class", "coin");
  coincontainer.append(newCoin);
  newCoin.addEventListener("click", () => {
    newCoin.remove();
  });
};

moneyform.addEventListener("submit", (e) => {
  e.preventDefault();
  let numberofcoins = document.querySelector("#howmany");
  let numberofcoinsvalue = numberofcoins.value;
  console.log(numberofcoinsvalue);
});

moneyform.addEventListener("submit", addCoinFunction);

//3. - Lightbulb

const lightbulb = document.getElementById("bulb");
const onbutton = document.querySelector(".onbutton");
const offbutton = document.querySelector(".offbutton");
const togglebutton = document.querySelector(".togglebutton");
const endbutton = document.querySelector(".endbutton");

const buttonsdisabled = () => {
  onbutton.disabled = true;
  offbutton.disabled = true;
  togglebutton.disabled = true;
  endbutton.disabled = true;
};

endbutton.addEventListener("click", buttonsdisabled);
endbutton.addEventListener("click", () => {
  lightbulb.remove();
});

let selection = "";

onbutton.addEventListener("click", () => {
  selection = "yellow";
  lightbulb.style.backgroundColor = selection;
});

offbutton.addEventListener("click", () => {
  selection = "black";
  lightbulb.style.backgroundColor = selection;
});

togglebutton.addEventListener("click", () => {
  if (selection === "yellow") {
    lightbulb.style.backgroundColor = "black";
  } else {
    lightbulb.style.backgroundColor = "yellow";
  }
});
