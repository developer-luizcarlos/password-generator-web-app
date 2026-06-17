import elements from "./dom/elements";
import handlers from "./handlers/handlers";

elements.generateBtn!.addEventListener(
  "click",
  handlers.handleGenerateBtnClick,
);

elements.notificationBtn!.addEventListener(
  "click",
  handlers.handleNotificationBtnClick,
);

elements.toggles.forEach((element) => {
  element.addEventListener("click", handlers.handleToggleClick);
});
