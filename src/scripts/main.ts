import { generateBtn, notificationBtn, toggles } from "./dom/elements";
import {
  handleGenerateBtnClick,
  handleNotificationBtnClick,
  handleToggleClick,
} from "./handlers/handlers";

generateBtn!.addEventListener("click", handleGenerateBtnClick);

notificationBtn!.addEventListener("click", handleNotificationBtnClick);

toggles.forEach((element) => {
  element.addEventListener("click", handleToggleClick);
});
