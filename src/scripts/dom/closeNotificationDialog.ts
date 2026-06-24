import { notificationDialog } from "./elements";
import { isNotificationDialogOpen } from "../utils/utils";

export default function closeNotificationDialog(): void {
  if (!isNotificationDialogOpen()) {
    return;
  }

  notificationDialog!.close();
}
