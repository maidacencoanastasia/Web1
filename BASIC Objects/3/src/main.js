let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};
function multiplyNumeric(obj) {
  for (let parameter in obj) {
    let type = typeof obj[parameter];
    if (type === "number") {
      obj[parameter] *= 2;
    }
  }
  console.log(obj);
}
multiplyNumeric(menu);
