let array = [8, 7,  2,  2,  3, 4, 2,  5, 5, 6, 7, 8, 5, 9, 0, 1]

const uniqueSorted = (array) => {
    let newSet = new Set();
    for( let i = 1; i <= array.length; i++)
    {
        newSet.add(array[i])
    }
    newSet.forEach((value) => {
        console.log(value);
      });
    return newSet
}
uniqueSorted(array)