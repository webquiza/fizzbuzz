// Get input from user and wrap prompt call in a parseInt function so number is returned.

let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

for (let i = 1; i <= answer; i++) {
  if (i % 3 === 0) {
    console.log("Fizz")
  } else {
    console.log(i);
  }
}