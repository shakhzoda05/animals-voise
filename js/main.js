let record = new webkitSpeechRecognition();
let elRecordBtn = document.querySelector("record-btn");
let audio = new Audio();
record.lang = "ru-RU";

// shakhzoвф_dev ni animatsiyasi :)>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>pasda
var textWrapper = document.querySelector(".ml3");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml3 .letter",
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i + 1),
  })
  .add({
    targets: ".ml3",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });
// animals voise ni animatsiyasi>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>pasda
var textWrapper = document.querySelector(".ml9 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml9 .letter",
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i + 1),
  })
  .add({
    targets: ".ml9",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });

// ------------- Event start -----------
let elBtnCat = document.querySelector(".btn-cat");
let elBtnHourse = document.querySelector(".btn-hourse");
let elBtnLeopard = document.querySelector(".btn-leopard");
let elBtnLion = document.querySelector(".btn-lion");
let elBtnTiger = document.querySelector(".btn-tiger");
let elBtnWolf = document.querySelector(".btn-wolf");

elBtnCat.addEventListener("click", () => {
  record.start();
  audio.src = "../mp3-animals/cat.mp3";
  audio.play();
});
elBtnHourse.addEventListener("click", () => {
  record.start();
  audio.src = "../mp3-animals/horse.mp3";
  audio.play();
});
elBtnLeopard.addEventListener("click", () => {
  record.start();
  audio.src = "../mp3-animals/leopard.mp3";
  audio.play();
});
elBtnLion.addEventListener("click", () => {
  record.start();
  audio.src = "../mp3-animals/lion.mp3";
  audio.play();
});
elBtnTiger.addEventListener("click", () => {
  record.start();
  audio.src = "../mp3-animals/tiger.mp3";
  audio.play();
});
elBtnWolf.addEventListener("click", () => {
  record.start();
  audio.src = "../mp3-animals/wolf.mp3";
  audio.play();
});
