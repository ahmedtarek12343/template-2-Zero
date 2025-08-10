const hamMenu = document.querySelector(".ham-menu");
const headerLinks = document.querySelector(".header__links");
const closeMenu = document.querySelector(".close-menu");
const arrowDown = document.querySelector(".arrow-down");
const articlesSection = document.querySelector(".articles");
const header = document.querySelector(".header");
const scrollToTop = document.querySelector(".scroll-to-top");
const skillsSection = document.querySelector(".skills");
const skillsProgressBars = document.querySelectorAll(
  ".skills__progress-bar-fill"
);

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 1000) {
    scrollToTop.classList.add("active");
  } else {
    scrollToTop.classList.remove("active");
  }
});

scrollToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

hamMenu.addEventListener("click", () => {
  headerLinks.classList.add("show-menu");
});

closeMenu.addEventListener("click", () => {
  headerLinks.classList.remove("show-menu");
});

arrowDown.addEventListener("click", () => {
  articlesSection.scrollIntoView({ behavior: "smooth" });
});

function progressBar() {
  skillsProgressBars.forEach((progressBar) => {
    const progress = progressBar.getAttribute("data-progress");
    progressBar.style.width = progress;
  });
}

function removeProgress() {
  skillsProgressBars.forEach((progressBar) => {
    progressBar.style.width = "0%";
  });
}

function handleScroll() {
  const sectionTop = skillsSection.getBoundingClientRect().top;
  if (sectionTop < 400) {
    progressBar();
  } else {
    removeProgress();
  }
}

window.addEventListener("scroll", handleScroll);

let day = 3;
let hour = 10;
let minute = 30;
let second = 5;

const timerCountDown = () => {
  setInterval(() => {
    second--;
    if (second < 0) {
      second = 59;
      minute--;
    }
    if (minute < 0) {
      minute = 59;
      hour--;
    }
    if (hour < 0) {
      hour = 23;
      day--;
    }
    if (day < 0) {
      day = 0;
      hour = 0;
      minute = 0;
      second = 0;
      clearInterval(timerCountDown);
    }
    console.log(day, hour, minute, second);
  }, 1000);
};
