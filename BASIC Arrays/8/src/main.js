const colors = ["red", "green", "blue"];
let color = "red";
color = color.toLowerCase();
const checkColor = (color, arrays) => {
  for (let i = 0; i < colors.length; i++) {
    if (colors[i] == color) {
      console.log(i);
    } else {
      console.log("-1");
    }
  }
};
checkColor(color, colors);
