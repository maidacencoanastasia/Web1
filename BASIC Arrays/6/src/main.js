let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let position = array.length/2;
Array.prototype.insert = function(index) {
    this.splice.apply(this, [index, 0].concat(
        Array.prototype.slice.call(arguments, 1)));
    return this;
};
array.insert(position, 0, 0, 0)
console.log(array);
