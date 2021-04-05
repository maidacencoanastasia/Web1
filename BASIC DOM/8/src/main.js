const textInput = document.getElementById("input");
const submit = document.getElementById("btn");
const list = document.getElementById("list");

submit.disabled = true;
submit.addEventListener("click", () => {
  addElementToList();
});

textInput.addEventListener("input", () => {
  checkifEmpty();
});

let addElementToList = () => {
  let newItem = document.createElement("li");
  newItem.innerHTML = textInput.value;
  newItem.className = "list__element";
  newItem.addEventListener("click", () => {
    alert(newItem.innerHTML);
  });
  list.append(newItem);
  textInput.value = "";
  checkifEmpty();
};

let checkifEmpty = () => {
  if (textInput.value !== "") {
    submit.disabled = false;
  } else {
    submit.disabled = true;
  }
};
