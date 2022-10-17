const notification = document.getElementsByClassName("notification-1");
const markAllButton = document.getElementById("markAllAction");
const numberOfNotification = document.getElementById("numberOfNotification");
const parentOfNotification = document.getElementsByClassName(
  "notification-head-left"
);

markAllButton.addEventListener("click", () => {
  for (let element of notification) {
    element.style.background = "none";
  }
  parentOfNotification[0].removeChild(numberOfNotification);
  markAllButton.style.display = "none";
});
