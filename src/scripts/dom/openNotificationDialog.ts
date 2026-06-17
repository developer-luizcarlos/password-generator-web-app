import elements from "./elements";
import utils from "../utils/utils";

export default function openNotificationDialog(message: string): void {
  if (utils.isEmptyString(message)) {
    throw new Error("Give a non-empty message to display");
  }

  const notificationMessageEl =
    elements.notificationDialog!.querySelector(".notification__msg");

  notificationMessageEl!.textContent = message.trim();

  elements.notificationDialog!.open = true;
}
