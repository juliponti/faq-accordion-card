const questions = document.getElementsByClassName("faq-questions");

for (item of questions) {
  item.addEventListener("mouseover", moveCubeOn);
  item.addEventListener("mouseout", moveCubeOff);
  item.addEventListener("click", showAnswers);
}

function moveCubeOn() {
  const cube = document.getElementById("cube");
  cube.classList.add("cube-img-hover");
}

function moveCubeOff() {
  const cube = document.getElementById("cube");
  cube.classList.remove("cube-img-hover");
}

const arrows = document.querySelectorAll(".faq-arrow");

for (item of arrows) {
  item.addEventListener("click", arrowUp);
}

function arrowUp(event) {
  const element = event.target.closest(".faq-arrow");
  const parent = element.parentElement;
  const answerDiv = parent.nextElementSibling;

  if (answerDiv.classList.contains("faq-answers-on")) {
    answerDiv.classList.remove("faq-answers-on"); // hide answer
    parent.firstElementChild.classList.remove("faq-questions-on"); // remove bold title
    element.classList.remove("faq-arrow-up"); // toggle arrow
    parent.classList.remove("faq-questions-div-on"); // add border
  } else {
    // hide all answers
    document
      .querySelectorAll(".faq-answers-div")
      .forEach((answer) => answer.classList.remove("faq-answers-on"));

    // reset all arrows
    document
      .querySelectorAll(".faq-arrow")
      .forEach((arrow) => arrow.classList.remove("faq-arrow-up"));

    // reset bold titles
    document
      .querySelectorAll(".faq-questions")
      .forEach((item) => item.classList.remove("faq-questions-on"));

    // reset borders
    document
      .querySelectorAll(".faq-questions-div")
      .forEach((item) => item.classList.remove("faq-questions-div-on"));

    element.classList.add("faq-arrow-up"); // toggle arrow
    answerDiv.classList.add("faq-answers-on"); // show answer
    parent.firstElementChild.classList.add("faq-questions-on"); // bold title
    parent.classList.add("faq-questions-div-on"); // remove borders
  }
}

function showAnswers(event) {
  const element = event.target; // faq-questions
  const parent = element.parentElement; // faq-questions-div
  const answerDiv = parent.nextElementSibling; //faq-answers-div
  const arrow = element.nextElementSibling; // faq-arrow

  if (answerDiv.classList.contains("faq-answers-on")) {
    answerDiv.classList.remove("faq-answers-on"); // hide answer
    parent.firstElementChild.classList.remove("faq-questions-on"); // remove bold title
    arrow.classList.remove("faq-arrow-up"); // toggle arrow
    parent.classList.remove("faq-questions-div-on"); // add border
  } else {
    // hide all answers
    document
      .querySelectorAll(".faq-answers-div")
      .forEach((answer) => answer.classList.remove("faq-answers-on"));

    // reset all arrows
    document
      .querySelectorAll(".faq-arrow")
      .forEach((arrow) => arrow.classList.remove("faq-arrow-up"));

    // reset bold titles
    document
      .querySelectorAll(".faq-questions")
      .forEach((item) => item.classList.remove("faq-questions-on"));

    // reset borders
    document
      .querySelectorAll(".faq-questions-div")
      .forEach((item) => item.classList.remove("faq-questions-div-on"));

    arrow.classList.add("faq-arrow-up"); // toggle arrow
    answerDiv.classList.add("faq-answers-on"); // show answer
    parent.firstElementChild.classList.add("faq-questions-on"); // bold title
    parent.classList.add("faq-questions-div-on"); // remove borders
  }
}
