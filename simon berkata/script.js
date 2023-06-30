const btn = document.querySelector('#btn');
const container = document.querySelector('.container');
let deg = 0;
btn.onclick = function () {
  deg += 90;
  container.style.transform = `rotate(${deg}deg)`;
}