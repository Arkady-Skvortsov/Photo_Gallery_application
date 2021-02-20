let mainScreen = document.querySelector(".main-screen-block");
let happyBirthday = document.querySelector(".happy-birthday-block");
let continueBlock = document.querySelector(".continue-txt");
let firstScreen = document.querySelector(".first-child-block");
let secondScreen = document.querySelector(".second-child-block");
let controllBtn = document.querySelector(".controllBtn");
let txt = document.querySelector(".text");
let iconBtn = document.querySelector(".iconBtn");

window.addEventListener("load", () => {
  firstScreen.classList.add("loading-main-block");

  setTimeout(() => {
    firstScreen.classList.remove("loading-main-block");

    happyBirthday.classList.add("loading-happy-birthday");
  }, 1000);

  setTimeout(() => {
    happyBirthday.style.width = "325px";

    happyBirthday.classList.remove("loading-happy-birthday");

    continueBlock.classList.add("loading-continue-block");
  }, 2000);

  setTimeout(() => {
    continueBlock.classList.remove("loading-continue-block");

    continueBlock.style.opacity = "1";
  }, 3000);

  continueBlock.addEventListener("click", () => {
    continueBlock.classList.add("loading-continue-reverse");

    setTimeout(() => {
      continueBlock.style.opacity = "0";

      happyBirthday.classList.add("loading-happy-reverse");
    }, 1000);

    setTimeout(() => {
      happyBirthday.style.width = "0px";

      firstScreen.classList.add("loading-main-reverse");
    }, 2000);

    setTimeout(() => {
      firstScreen.style.display = "none";
    }, 3000);
  });

  controllBtn.addEventListener("click", () => {
    txt.textContent = words[i];

    let i = 0;

    i++;
  });
});
