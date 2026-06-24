import { notificationDialog } from "../dom/elements";

export default function isNotificationDialogOpen(): boolean {
  return notificationDialog!.hasAttribute("open");
}
