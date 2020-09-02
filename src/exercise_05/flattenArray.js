export default function flattenArray(array, result = []) {
  // This function flattens a nested array into a sequence.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in flatten_array_spec.js.
  // * Please do NOT modify the signature of the function.
  if(array == undefined) {
    throw new Error('Flatten undefined or null array');
  }
  for(let item of array){
    if(Array.isArray(item)){
      // flattenArray(item, result);
      for(let it of item){
        result.push(it);
      }
    } else {
      result.push(item);
    }
  }
  return result;
  
}
