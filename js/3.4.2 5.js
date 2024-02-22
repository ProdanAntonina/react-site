console.log(`3.4.2 5`);

function convert(fn, array) {
    return array.map(fn);
  }
  
  function square(x) {
    return x * x;
  }
  
  console.log(convert(square, [1, 2, 3, 4])); // [1, 4, 9, 16]

  