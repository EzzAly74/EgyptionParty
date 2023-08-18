let toggle = document.querySelector(".toggle");
let navbarr = document.querySelector(".navbarr");
let xmark = document.getElementById("xmark");
let days = document.querySelector(".days");
let hours = document.querySelector(".hours");
let mins = document.querySelector(".mins");
let secs = document.querySelector(".secs");
let c = 0;
toggle.addEventListener("click", () => {
  c++;
  if (c % 2 != 0) {
    $(".toggle").animate({ marginLeft: "20%" }, 800);
    $(".navbarr").toggle(800);
  } else {
    $(".toggle").animate({ marginLeft: "1%" }, 800);
    $(".navbarr").toggle(800);
  }
});
$(".para_one").css("display", "block");
xmark.addEventListener("click", () => {
  $(".navbarr").hide(800);
  c++;
  if (c % 2 != 0) {
    $(".toggle").animate({ marginLeft: "20%" }, 800);
  } else {
    $(".toggle").animate({ marginLeft: "1%" }, 800);
  }
});

let h2s = document.querySelectorAll(".section_two div h2");
let ps = document.querySelectorAll(".section_two div p");

h2s.forEach((h2) => {
  h2.addEventListener("click", () => {
    ps.forEach((p) => {
      $(p).slideUp(500);
    });

    if (h2.nextElementSibling.style.display != "block")
      $(h2.nextElementSibling).slideDown(500);
  });
});
let sec = parseInt(secs.textContent);
let min = parseInt(mins.textContent);
let hour = parseInt(hours.textContent);
let day = parseInt(days.textContent);

setInterval(() => {
  sec--;
  secs.innerHTML = sec + " s";

  if (sec == 0) {
    sec = 59;
    secs.innerHTML = 59 + " s";
    min--;
    mins.innerHTML = min + " m";
  }
  if (min == 0) {
    sec = 59;
    secs.innerHTML = 59 + " s";
    min = 59;
    mins.innerHTML = 59 + " m";
    hour--;
    hours.innerHTML = hour + " h";
  }
  if (hour == 0) {
    sec = 59;
    secs.innerHTML = 59 + " s";
    min = 59;
    mins.innerHTML = 59 + " m";
    hour = 23;
    hours.innerHTML = hour + " h";
    day--;
    days.innerHTML = day + " d";
  }
}, 1000);

let textArea = document.getElementById("textArea");
let chrs = document.getElementById("chrs");
let txt = chrs.nextElementSibling.textContent;
let len = Number(chrs.textContent);
textArea.setAttribute("maxlength", `${len}`);

textArea.addEventListener("keydown", (e) => {
  if (e.code == "Backspace" && textArea.value != "") {
    len++;
  } else if (
    textArea.value.length > -1 &&
    e.code != "Backspace" &&
    e.key != "Control" &&
    e.key != "Shift" &&
    e.key != "Tab" &&
    e.key != "Escape" &&
    e.key != "Alt" &&
    e.key != "ArrowUp" &&
    e.key != "ArrowDown" &&
    e.key != "ArrowRight" &&
    e.key != "ArrowLeft" &&
    e.key != "NumLock" &&
    e.key != "Delete" &&
    e.key != "Insert" &&
    e.key != "PrtScr" &&
    e.key != "CapsLock" &&
    len > 0
  ) {
    len--;
  }
  chrs.innerHTML = len;
  if (len == 0) {
    chrs.innerHTML = "your available characters finished";
    chrs.nextElementSibling.textContent = "";
  } else chrs.nextElementSibling.textContent = txt;
});
