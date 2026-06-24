import closeNotificationDialog from "../dom/closeNotificationDialog";
import { isNotificationDialogOpen } from "../utils/utils";

export default function handleNotificationBtnClick(): void {
  if (!isNotificationDialogOpen()) {
    return;
  }

  closeNotificationDialog();
}
