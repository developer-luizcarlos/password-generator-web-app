import closeNotificationDialog from "../dom/closeNotificationDialog";
import utils from "../utils/utils";

export default function handleNotificationBtnClick(): void {
  if (!utils.isNotificationDialogOpen()) {
    return;
  }

  closeNotificationDialog();
}
