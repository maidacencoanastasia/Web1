document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded");
  document.body.style.backgroundColor = "red";
  setTimeout(changeBackground, 3000);
  const switchbutton = document.getElementById("button_orange");
  switchbutton.addEventListener("click", () => {
    document.body.style.backgroundColor = "orange";
  });

  const listItems = document.getElementsByTagName("li");

  const addListItem = () => {
    let ol = document.getElementById("list");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode("Element"));
    ol.appendChild(li);
    
  }
  
  for(let count = 0; count<20; count++) {
    //setTimeout(addListItem,2000);
    addListItem();
    setTimeout(2000);
  }

  let i = 0;
  for (const item of listItems) {
    if (i % 2 === 0) {
      item.style.backgroundColor = "fuchsia";
    } else {
      item.style.backgroundColor = "darkgreen";
    }
    i++;
  }

  console.log(listItems);
});
const changeBackground = () => {
  document.body.style.background = "green";
};

// window.addEventListener("load",function() {
//   changeBackground('red') ;
//   setTimeout(changeBackground('green'), 3000);
// });
const listItems = document.getElementsByTagName("li");

let i = 0;
for (const item of listItems) {
  if (i % 2 === 0) {
    item.style.backgroundColor = "fuchsia";
  } else {
    item.style.backgroundColor = "green";
  }
  i++;
}

console.log(listItems);
