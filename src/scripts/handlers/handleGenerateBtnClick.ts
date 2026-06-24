import {
  inputQuantity,
  generatedOutput,
  toggleLowercase,
  toggleNumbers,
  toggleSymbol,
  toggleUppercase,
} from "../dom/elements";
import {
  isAnyCheckboxChecked,
  isInputQuantityValueValid,
} from "../utils/utils";
import generatePassword from "../generatePassword";
import openNotificationDialog from "../dom/openNotificationDialog";

export default function handleGenerateBtnClick(): void {
  if (!isAnyCheckboxChecked()) {
    openNotificationDialog(
      "Select a type of character to include in the generated password",
    );

    return;
  }

  if (!isInputQuantityValueValid()) {
    openNotificationDialog(
      "Insert as the password characters quantity a value between 4 and 16",
    );

    inputQuantity!.focus();

    return;
  }

  try {
    const options = {
      includeSymbols: toggleSymbol!.checked,
      includeNumbers: toggleNumbers!.checked,
      includeLowerCase: toggleLowercase!.checked,
      includeUpperCase: toggleUppercase!.checked,
    };

    const passwordLength = +inputQuantity!.value;
    const password = generatePassword(passwordLength, options);

    generatedOutput!.textContent = password;
  } catch (error) {
    if (error instanceof Error) {
      openNotificationDialog(error.message);
    }
  }
}
