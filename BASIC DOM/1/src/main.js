document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded");
  document.body.style.backgroundColor = "red";
  setTimeout(changeBackground, 3000);

  const switchbutton = document.getElementById("button_orange");
  switchbutton.addEventListener("click", () => {
    document.body.style.backgroundColor = "orange";
  });
});
const changeBackground = () => {
  document.body.style.background = "green";
};

//   const addListItem = () => {
//     let ol = document.getElementById("list");
//     let li = document.createElement("li");
//     li.appendChild(document.createTextNode(`Element ${i}`));
//     ol.appendChild(li);
    
//   }
//   let i = 0;  
// let id = setInterval(function() {
// 	i++;
	
// 	if (i == 21) {
// 		clearInterval(id);
// 	} else {
// 		addListItem(i);
//     check_color(i);
// 	}
// }, 2000);




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

// const check_color = (a) =>{
//   const item = document.getElementsByTagName("li");
//   if (a % 2 === 0) {
//     item[i].style.backgroundColor ="fuchsia";
//   } else {
//     item[i].style.backgroundColor ="green";
//   }
// }


let list = document.createElement('ol');
let addElement = () => {
    let elementOfList = [];
    let i = 0;
    let timer = setInterval(() => {
        i++;
        elementOfList = document.createElement('li');
        elementOfList.innerHTML = `Element ${i}`;

        if (i % 2 == 0) {
            elementOfList.style.background = 'fuchsia';
        } else {
            elementOfList.style.background = 'green';
        }
        list.append(elementOfList);
    }, 2000);

    setTimeout(() => {
        clearInterval(timer);
    }, 40000);
}

document.body.append(list);
addElement();