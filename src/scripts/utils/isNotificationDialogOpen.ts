import elements from "../dom/elements";

export default function isNotificationDialogOpen(): boolean {
  return elements.notificationDialog!.hasAttribute("open");
}
