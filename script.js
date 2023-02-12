// window.onload = function donenow() {
//   console.log('Hi');
//   document.getElementById('divvy').addEventListener('mousedown', function () {
//     changeColor(this, 'green');
//   });

//   document.getElementById('divvy').addEventListener('mouseup', function () {
//     changeColor(this, 'yellow');
//   });
//   document.getElementById('divvy').addEventListener('dblclick', function () {
//     changeColor(this, 'black');
//   });
//   document.getElementById('divvy').addEventListener('mouseout', function () {
//     changeColor(this, 'blue');
//   });
// };

// function changeColor(el, color) {
//   el.style.backgroundColor = color;
// }

let div = document.querySelector('.divvy');
let inputColor = document.getElementById('color').value;
console.log(inputColor);
div.innerText = 'Hello World';
div.style.width = '200px';
div.style.height = '200px';
div.style.backgroundColor = "red";

div.addEventListener('mouseup', function (e) {
  changeColor('yellow', e);
});

function changeColor(color, e) {
  console.log(e.type);
  div.style.backgroundColor = color;
}
