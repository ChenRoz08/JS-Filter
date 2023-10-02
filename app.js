import { data } from "./data.js";
import { getProductTemplate } from "./templates.js";

let filter = data;
const allData = document.querySelector("#allData");
const categoryButton = document.querySelector("#categoryButton");
const priceButton = document.querySelector("#priceButton");
const ratingButton = document.querySelector("#ratingButton");
const display = document.querySelector("#display");

getProductTemplate(filter);

allData.addEventListener("click", all);
categoryButton.addEventListener("click", filterCategory);
priceButton.addEventListener("click", filterPrice);
ratingButton.addEventListener("click", filterRating);

function all() {
  display.innerHTML = "";
  filter = data;
  getProductTemplate(filter);
}

function filterCategory() {
  display.innerHTML = "";
  filter = data;
  filter = filter.filter((data) => {
    return data.category !== undefined;
  });
  getProductTemplate(filter);
}

function filterPrice() {
  display.innerHTML = "";
  filter = data;
  filter = filter.filter((data) => {
    return data.price !== undefined;
  });
  getProductTemplate(filter);
}

function filterRating() {
  display.innerHTML = "";
  filter = data;
  filter = filter.filter((data) => {
    return data.rating !== undefined;
  });
  getProductTemplate(filter);
}

function remove(type) {
  displayisplay.innerHTML = "";
  filter = data;
  filter = filter.filter((data) => {
    return data.type !== undefined;
  });
  template(filter);
}
