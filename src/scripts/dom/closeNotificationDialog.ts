import elements from "./elements";
import utils from "../utils/utils";

export default function closeNotificationDialog(): void {
  if (!utils.isNotificationDialogOpen()) {
    return;
  }

  elements.notificationDialog!.close();
}
