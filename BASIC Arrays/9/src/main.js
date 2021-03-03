let arr = [1, "a", 2, null, 3, undefined, 4, {}, 5, 6, `word`, 7, 8, false, 9, 100]

const filter = (array) => {
    let arr2 =[]
    let arr2index = -1
    for( let i = 1; i <= array.length; i++)
    {
        if(typeof array[i] == "number"){
            ++arr2index;
            arr2[arr2index] = array[i];
            //console.log(arr2[i])
        }
    }
    return arr2
}
console.log(filter(arr))