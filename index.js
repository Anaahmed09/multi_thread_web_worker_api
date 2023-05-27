const green = document.getElementById("green");
const red = document.getElementById("red");
const background = document.getElementById("background");
const worker = new Worker("worker.js");
green.addEventListener("click", () => {
  document.body.style.backgroundColor = "green";
});
red.addEventListener("click", () => {
  document.body.style.backgroundColor = "red";
});

// with out new thread
// background.addEventListener("click", (e) => {
//   let sum = 0;
//   for (let index = 0; index < 1_000_000_000_0; index++) {
//     sum += index;
//   }
//     document.getElementById("sum").innerText = sum;
// });

// with multi thread
background.addEventListener("click", () => {
  worker.postMessage("fire message");
  worker.addEventListener("message", (e) => {
    document.getElementById("sum").innerText = e.data;
  });
});
