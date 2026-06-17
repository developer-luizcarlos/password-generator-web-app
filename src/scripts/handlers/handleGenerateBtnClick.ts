import elements from "../dom/elements";
import utils from "../utils/utils";
import openNotificationDialog from "../dom/openNotificationDialog";

export default function handleGenerateBtnClick(): void {
  if (!utils.isAnyCheckboxChecked()) {
    openNotificationDialog(
      "Select a type of character to include in the generated password",
    );

    return;
  }

  if (!utils.isInputQuantityValueValid()) {
    openNotificationDialog(
      "Insert as the password characters quantity a value between 4 and 16",
    );

    elements.inputQuantity!.focus();

    return;
  }
}
