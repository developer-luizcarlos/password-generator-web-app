import elements from "../dom/elements";
import utils from "../utils/utils";
import generatePassword from "../generatePassword";
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

  try {
    const options = {
      includeSymbols: elements.toggleSymbol!.checked,
      includeNumbers: elements.toggleNumbers!.checked,
      includeLowerCase: elements.toggleLowercase!.checked,
      includeUpperCase: elements.toggleUppercase!.checked,
    };

    const passwordLength = +elements.inputQuantity!.value;
    const password = generatePassword(passwordLength, options);

    elements.generatedOutput!.textContent = password;
  } catch (error) {
    if (error instanceof Error) {
      openNotificationDialog(error.message);
    }
  }
}
