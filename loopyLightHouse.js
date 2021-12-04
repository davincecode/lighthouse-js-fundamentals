var x = 100;

while (x <= 199) {
  if (x % 3 === 0 && x % 5 === 0) {
    console.log("LoopyLighthouse");
  } else if (x % 5 === 1) {
    console.log("Lighthouse");
  } else if (x % 3 === 1) {
    console.log("Loopy");
  } else {
    console.log(x);
  }
  x = x + 1;
}
