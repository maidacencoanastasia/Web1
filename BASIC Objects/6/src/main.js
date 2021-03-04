let arr = [
  { x: 1, y: 2 },
  { x: 3, y: 4 },
  { x: null, y: 4 },
  { x: 3, y: undefined },
];
let final_array = [];
let i = 0;
const output = arr.map(({ x, y }) => [y, x]);
console.log(output);
for (element in output) {
  for (element1 in output[element]) {
    if (output[element1] != null || output[element1] != undefined) {
      final_array[i] = output[element1];
      i++;
    }
  }
}
console.log(final_array);
