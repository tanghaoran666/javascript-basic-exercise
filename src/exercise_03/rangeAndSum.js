export function range(start, end) {
  // This function creates an array which contains numbers within a range specified by `start`
  // and `end`.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.

  const result = [];
  const diff = end - start;
  const diffper = diff / Math.abs(diff);
  for( var i = 0;i < Math.abs(diff);i++) {
    result.push(start);
    start += diffper;
  }
  return result;
}

export function sum(...numbers) {
  // This function sums all the numbers in the array and returns the final result.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.

  let sum = 0;
  for(var i =0;i<numbers.length;i++){
    sum += numbers[i];
  }
  return sum;
}
