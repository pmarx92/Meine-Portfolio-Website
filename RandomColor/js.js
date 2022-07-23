
const colors = ["Green", "Blue", "Red", "Purple", "Lightblue", "Black", "Grey", "Yellow"];
const hex = document.getElementById("hex");

function colorOutput() {
  a = colors[~~(Math.random() * colors.length)];
  document.body.style.backgroundColor = a;
  document.getElementById("color").innerHTML = a;
}

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  document.getElementById("color").innerHTML = color;
  return color;
}

function setRandomColor(b) {
  let a = getRandomColor();
  document.body.style.backgroundColor = a;
}
