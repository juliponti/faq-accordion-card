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

const arrows = document.getElementsByClassName("faq-arrow");

for (item of arrows) {
  item.addEventListener("click", arrowUp);
  console.log(item);
}

function arrowUp(event) {
  const element = event.target;
  const parent = element.parentElement;
  element.classList.toggle("faq-arrow-up");
  parent.nextElementSibling.firstElementChild.classList.toggle("faq-answers");
}
