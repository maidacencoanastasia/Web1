const convert = (fn, array) => {
    let newArray = [];
    for(let i = 0; i < array.Length; i++){
        newArray[i] = fn(array[i]);
    }
    return newArray;
};
