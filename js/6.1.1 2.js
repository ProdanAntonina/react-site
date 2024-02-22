console.log(`6.1.1 2`);

function fibonacci(fi) {
    if (fi === 0) {
      return [];
    } else if (fi === 1) {
      return [0];
    } else if (fi === 2) {
      return [0, 1];
    } else {
      let fib = [0, 1];
      for (let oke = 2; oke < fi; oke++) {
        fib.push(fib[oke-1] + fib[oke-2]);
      }
      return fib;
    }
  }
  let kekesa = prompt('Insert Number', '');
  console.log(fibonacci(kekesa));
