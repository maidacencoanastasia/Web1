document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded");
  document.body.style.backgroundColor = "red";
  setTimeout(changeBackground, 3000);
  const switchbutton = document.getElementById("button_orange");
  switchbutton.addEventListener("click", () => {
    document.body.style.backgroundColor = "orange";
  });

  const addListItem = () => {
    let ol = document.getElementById("list");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(`Element ${i}`));
    ol.appendChild(li);
    
  }
  let i = 0;  
let id = setInterval(function() {
	i++;
	
	if (i == 21) {
		clearInterval(id);
	} else {
		addListItem(i);
    check_color(i);
	}
}, 2000);

});
const changeBackground = () => {
  document.body.style.background = "green";
};


// const listItems = document.getElementsByTagName("li");

// let i = 0;
// for (const item of listItems) {
//   if (i % 2 === 0) {
//     item.style.backgroundColor = "fuchsia";
//   } else {
//     item.style.backgroundColor = "green";
//   }
//   i++;
// }
// console.log(listItems);

const check_color = (i) =>{
  //const item = document.getElementsByTagName("li");
  if (i % 2 === 0) {
    document.getElementsByTagName("li").style.backgroundColor ="fuchsia";
  } else {
    document.getElementsByTagName("li").style.backgroundColor ="green";
  }
}