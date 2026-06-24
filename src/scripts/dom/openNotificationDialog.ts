import { notificationDialog } from "./elements";
import { isEmptyString } from "../utils/utils";

export default function openNotificationDialog(message: string): void {
  if (isEmptyString(message)) {
    throw new Error("Give a non-empty message to display");
  }

  const notificationMessageEl =
    notificationDialog!.querySelector(".notification__msg");

  notificationMessageEl!.textContent = message.trim();

  notificationDialog!.open = true;
}
