self.addEventListener("message", (e) => {
  let sum = 0;
  for (let index = 0; index < 1_000_000_000_0; index++) {
    sum += index;
  }
  self.postMessage(sum)
});
