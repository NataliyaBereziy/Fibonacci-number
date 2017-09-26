let input = Number(prompt('Enter a number of Fibonacci sequence'));
function fib(n) {
    let a = 1,
      b = 1;
    for (let i = 3; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
  }

let result = fib(input);
document.write(result);
