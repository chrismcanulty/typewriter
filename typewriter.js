const exampleSentence = "hello there from lighthouse labs";
let charDelay = 0;
function typewriter (sentence) {
  for (const char of sentence) {
    charDelay += 50;
    setTimeout(() => {
      process.stdout.write(char);
    }, charDelay);
  } setTimeout(() => {
    process.stdout.write("\n")}, charDelay)
}

typewriter(exampleSentence);
