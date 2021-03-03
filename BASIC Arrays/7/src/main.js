let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const extract = (array, start, end) => {
  let numerofelements = end - start + 1;
  let res = array.splice(start, numerofelements);
  return res;
};
let result = extract(array, 2, 4);
console.log(result);
