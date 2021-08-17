const questions = document.getElementsByClassName("faq-questions");

for (item of questions) {
  item.addEventListener("mouseover", moveCubeOn);
  item.addEventListener("mouseout", moveCubeOff);
}

function moveCubeOn() {
  const cube = document.getElementById("cube");
  cube.classList.add("cube-img-hover");
}

function moveCubeOff() {
  const cube = document.getElementById("cube");
  cube.classList.remove("cube-img-hover");
}

const arrow = document.getElementsByClassName("faq-arrow");

for (item of arrow) {
  item.addEventListener("onclick", arrowUp);
  console.log(item);
}

function arrowUp() {
  const item = document.getElementsByClassName("faq-arrow").item;
  const parent = item.parent;
  item.classList.toggle("faq-arrow-up");
  parent.nextSibling.firstChild.classList.toggle("faq-answers");
}
