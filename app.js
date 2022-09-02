const startBtn = document.getElementById('start');
const screens = document.querySelectorAll('.screen');
const timeList = document.getElementById('time-list');
const timeEl = document.getElementById('time');
const board = document.getElementById('board');
const colors = ["AliceBlue",
   "AntiqueWhite",
   "Aqua",
   "Aquamarine",
   "Azure",
   "Beige",
   "Bisque",
   "BlanchedAlmond",
   "Blue",
   "BlueViolet",
   "Brown",
   "BurlyWood",
   "CadetBlue",
   "Chartreuse",
   "Chocolate",
   "Coral",
   "CornflowerBlue",
   "Cornsilk",
   "Crimson",
   "Cyan",
   "DarkBlue",
   "DarkCyan",
   "DarkGoldenRod",
   "DarkGray",
   "DarkGrey",
   "DarkGreen",
   "DarkKhaki",
   "DarkMagenta",
   "DarkOliveGreen",
   "DarkOrange",
   "DarkOrchid",
   "DarkRed",
   "DarkSalmon",
   "DarkSeaGreen",
   "DarkSlateBlue",
   "DarkSlateGray",
   "DarkSlateGrey",
   "DarkTurquoise",
   "DarkViolet",
   "DeepPink",
   "DeepSkyBlue",
   "DimGray",
   "DimGrey",
   "DodgerBlue",
   "FireBrick",
   "FloralWhite",
   "ForestGreen",
   "Fuchsia",
   "Gainsboro",
   "GhostWhite",
   "Gold",
   "GoldenRod",
   "Gray",
   "Grey",
   "Green",
   "GreenYellow",
   "HoneyDew",
   "HotPink",
   "IndianRed",
   "Indigo",
   "Ivory",
   "Khaki",
   "Lavender",
   "LavenderBlush",
   "LawnGreen",
   "LemonChiffon",
   "LightBlue",
   "LightCoral",
   "LightCyan",
   "LightGoldenRodYellow",
   "LightGray",
   "LightGrey",
   "LightGreen",
   "LightPink",
   "LightSalmon",
   "LightSeaGreen",
   "LightSkyBlue",
   "LightSlateGray",
   "LightSlateGrey",
   "LightSteelBlue",
   "LightYellow",
   "Lime",
   "LimeGreen",
   "Linen",
   "Magenta",
   "Maroon",
   "MediumAquaMarine",
   "MediumBlue",
   "MediumOrchid",
   "MediumPurple",
   "MediumSeaGreen",
   "MediumSlateBlue",
   "MediumSpringGreen",
   "MediumTurquoise",
   "MediumVioletRed",
   "MidnightBlue",
   "MintCream",
   "MistyRose",
   "Moccasin",
   "NavajoWhite",
   "Navy",
   "OldLace",
   "Olive",
   "OliveDrab",
   "Orange",
   "OrangeRed",
   "Orchid",
   "PaleGoldenRod",
   "PaleGreen",
   "PaleTurquoise",
   "PaleVioletRed",
   "PapayaWhip",
   "PeachPuff",
   "Peru",
   "Pink",
   "Plum",
   "PowderBlue",
   "Purple",
   "RebeccaPurple",
   "Red",
   "RosyBrown",
   "RoyalBlue",
   "SaddleBrown",
   "Salmon",
   "SandyBrown",
   "SeaGreen",
   "SeaShell",
   "Sienna",
   "Silver",
   "SkyBlue",
   "SlateBlue",
   "SlateGray",
   "SlateGrey",
   "Snow",
   "SpringGreen",
   "SteelBlue",
   "Tan",
   "Teal",
   "Thistle",
   "Tomato",
   "Turquoise",
   "Violet",
   "Wheat",
   "WhiteSmoke",
   "Yellow",
   "YellowGreen"];

let time = 0;
let score = 0;

startBtn.addEventListener('click', (evt) => {
   evt.preventDefault();

   screens[0].classList.add('up');
});

timeList.addEventListener('click', (evt) => {
   if (evt.target.classList.contains('time-btn')) {
      time = parseInt(evt.target.getAttribute('data-time'));
      screens[1].classList.add('up');
      startGame();
   }
});

function startGame() {
   setInterval(decreaseTime, 1000);
   createRandomCircle();
   setTime(time);
}

function decreaseTime() {
   if (time === 0) {
      finishGame();
   } else {
      let current = --time;
      if (current < 10) {
         current = `0${current}`;
      }
      setTime(current);
   }
}

function setTime(value) {
   timeEl.innerHTML = `00:${value}`
}

function createRandomCircle() {
   const circle = document.createElement('div');
   circle.classList.add('circle');

   let circleSize = getRandomNumber(5, 60)
   let { height, width } = board.getBoundingClientRect();
   let color = getRandomColor();
   const x = getRandomNumber(0, width - circleSize);
   const y = getRandomNumber(0, height - circleSize);
   console.log(x);

   circle.style.background = `${color}`
   circle.style.width = `${circleSize}px`
   circle.style.height = `${circleSize}px`
   circle.style.top = `${y}px`;
   circle.style.left = `${x}px`;

   board.append(circle);
}

function getRandomNumber(min, max) {
   return Math.round(Math.random() * (max - min) + min)
}
function getRandomColor() {
   return colors[Math.floor(Math.random() * colors.length)]
}

board.addEventListener('click', (evt) => {
   if (evt.target.classList.contains('circle')) {
      score++;
      evt.target.remove();
      createRandomCircle();
   }
})

function finishGame() {
   board.innerHTML = `<h1>Score: <span class='primary'>${score}</span></h1>`;
   timeEl.parentNode.classList.add('hide');
}