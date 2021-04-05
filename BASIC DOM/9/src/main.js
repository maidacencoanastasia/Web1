let showNotification = ({
  top = 20,
  left = 10,
  message = "Hello!",
  className = "welcome",
}) => {
  let nitification = document.createElement("div");
  nitification.classList.add("notification");

  nitification.style.position = "absolute";
  nitification.style.top = top + "px";
  nitification.style.left = left + "px";

  nitification.innerHTML = message;

  if (className) {
    nitification.classList.add(className);
  }

  document.body.append(nitification);

  setTimeout(() => {
    nitification.remove();
  }, 1500);
};

showNotification({
  top: 10,
  left: 10,
  message: "Hello!",
  className: "welcome",
});
