let code = document.getElementById("code");
let btn = document.getElementById("btn");
let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let wraper = document.getElementById("wraper");

btn.addEventListener("click", () => {
  let hexcolor = "#";
  for (let i = 0; i < 6; i++) {
    let calc = Math.floor(Math.random() * 16);
    hexcolor += hex[calc];
  }
  wraper.style.backgroundColor = hexcolor;
  code.innerText = hexcolor;
});
