const sentence = "hello there from lighthouse labs";

let ms = 0

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(`${char}`);
  }, ms)
  ms += 100
}
